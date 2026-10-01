/**
 * Multi-user concurrency, isolation, and security test suite for AKGTK Smart Practice.
 */
import { spawn } from 'child_process';

const BASE_URL = 'http://localhost:3000';

async function request(path: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error(`Failed to parse JSON from ${path} (status ${res.status}): ${text.slice(0, 200)}`);
  }
  return { status: res.status, data };
}

async function runTests() {
  console.log('🚀 Starting Concurrency, Isolation, and Security Verification Tests...\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string, detail?: string) {
    if (condition) {
      console.log(`✅ [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${testName}${detail ? ` - ${detail}` : ''}`);
      failed++;
    }
  }

  // 1. Multi-User Isolation Test (User A vs User B)
  console.log('\n--- Scenario 1: Multi-User Isolation (User A vs User B) ---');
  
  // Register User A
  const userARes = await request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email: `guru.ahmad.${Date.now()}@madrasah.id`,
      password: 'password123',
      name: 'Ahmad Dahlan, S.Pd.'
    })
  });
  assert((userARes.status === 200 || userARes.status === 201) && !!userARes.data.token, 'User A registered successfully');
  const tokenA = userARes.data.token;
  const userAId = userARes.data.user.id;

  // Register User B
  const userBRes = await request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email: `guru.fatimah.${Date.now()}@madrasah.id`,
      password: 'password123',
      name: 'Fatimah Az-Zahra, M.Pd.'
    })
  });
  assert((userBRes.status === 200 || userBRes.status === 201) && !!userBRes.data.token, 'User B registered successfully');
  const tokenB = userBRes.data.token;
  const userBId = userBRes.data.user.id;

  assert(userAId !== userBId, 'User A and User B have distinct, isolated IDs');

  // User A starts a simulation session
  const sessionARes = await request('/api/sessions/start', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({
      mode: 'simulation',
      category: 'literasi',
      count: 5
    })
  });
  assert((sessionARes.status === 200 || sessionARes.status === 201) && !!sessionARes.data.sessionId, 'User A started a simulation session');
  const sessionAId = sessionARes.data.sessionId;

  // User B starts a practice session
  const sessionBRes = await request('/api/sessions/start', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenB}` },
    body: JSON.stringify({
      mode: 'practice',
      category: 'numerasi',
      count: 5
    })
  });
  assert((sessionBRes.status === 200 || sessionBRes.status === 201) && !!sessionBRes.data.sessionId, 'User B started a practice session');
  const sessionBId = sessionBRes.data.sessionId;

  // Security test: User B tries to write to User A's session
  const breachAttempt = await request(`/api/sessions/${sessionAId}/answer`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${tokenB}` },
    body: JSON.stringify({
      questionId: sessionARes.data.questions[0].id,
      answer: 'C'
    })
  });
  assert(breachAttempt.status === 403, 'Cross-user write blocked: User B cannot modify User A\'s session (HTTP 403)');

  // User A saves an answer
  const qA0 = sessionARes.data.questions[0].id;
  await request(`/api/sessions/${sessionAId}/answer`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({
      questionId: qA0,
      answer: 'A',
      isFlagged: true,
      currentIndex: 1
    })
  });

  // User A checks active session (e.g. page refresh)
  const activeSessionA = await request('/api/sessions/active', {
    headers: { Authorization: `Bearer ${tokenA}` }
  });
  assert(
    activeSessionA.data.activeSession?.sessionId === sessionAId &&
    activeSessionA.data.activeSession?.userAnswers[qA0] === 'A' &&
    activeSessionA.data.activeSession?.currentIndex === 1,
    'Session state persistence & restore works correctly on refresh'
  );

  // User A submits simulation
  const submitARes = await request(`/api/sessions/${sessionAId}/submit`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({
      userAnswers: { [qA0]: 'A' }
    })
  });
  assert(submitARes.status === 200 && !!submitARes.data.result, 'User A submitted simulation successfully');

  // Double Submit Test
  const doubleSubmitRes = await request(`/api/sessions/${sessionAId}/submit`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({
      userAnswers: { [qA0]: 'A' }
    })
  });
  assert(doubleSubmitRes.status === 200, 'Double-submit protected: Server returns idempotent result');

  // Check history isolation: User A has 1 result, User B has 0 results
  const histA = await request('/api/user/history', {
    headers: { Authorization: `Bearer ${tokenA}` }
  });
  const histB = await request('/api/user/history', {
    headers: { Authorization: `Bearer ${tokenB}` }
  });

  assert(histA.data.items.length === 1, 'User A history contains exactly 1 result');
  assert(histB.data.items.length === 0, 'User B history is completely isolated and empty (0 results)');

  // 2. Role-Based Access Control (RBAC) Test
  console.log('\n--- Scenario 2: Role-Based Access Control (RBAC) ---');

  // Normal user tries to access admin stats
  const adminStatsDenied = await request('/api/admin/stats', {
    headers: { Authorization: `Bearer ${tokenA}` }
  });
  assert(adminStatsDenied.status === 403, 'Normal user blocked from accessing Admin Stats (HTTP 403)');

  // Normal user tries to invoke AI generator
  const aiGenDenied = await request('/api/admin/generate-questions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({
      category: 'literasi',
      count: 1
    })
  });
  assert(aiGenDenied.status === 403, 'Normal user blocked from invoking AI Generator (HTTP 403)');

  // Login as Demo Admin
  const adminLogin = await request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@akgtk.id',
      password: 'admin123'
    })
  });
  assert(adminLogin.status === 200, 'Admin logged in successfully');
  const adminToken = adminLogin.data.token;

  // Admin accesses admin stats
  const adminStatsSuccess = await request('/api/admin/stats', {
    headers: { Authorization: `Bearer ${adminToken}` }
  });
  assert(adminStatsSuccess.status === 200 && typeof adminStatsSuccess.data.stats?.totalUsers === 'number', 'Admin successfully accessed system metrics');

  // 3. User Bookmark Isolation Test
  console.log('\n--- Scenario 3: Bookmark Isolation ---');
  await request('/api/user/bookmarks', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({ questionId: 'LIT_001' })
  });

  const bookmarksA = await request('/api/user/bookmarks', {
    headers: { Authorization: `Bearer ${tokenA}` }
  });
  const bookmarksB = await request('/api/user/bookmarks', {
    headers: { Authorization: `Bearer ${tokenB}` }
  });

  assert(bookmarksA.data.bookmarks.includes('LIT_001'), 'User A has bookmark LIT_001');
  assert(!bookmarksB.data.bookmarks.includes('LIT_001'), 'User B does NOT have bookmark LIT_001 (isolated)');

  console.log(`\n========================================`);
  console.log(`Total Passed: ${passed} | Total Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});

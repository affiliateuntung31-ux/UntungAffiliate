// Dedicated Master Generator for Bahasa Inggris (English) MTs & MA (150 Questions Each)
// Aligned with Kemenag AKGTK Guru Bahasa Inggris & Kurikulum Merdeka Competencies

const fs = require('fs');
const path = require('path');
const { createQuestion } = require('./generate_all_subjects_master.cjs');

// ============================================================================
// 1. BAHASA INGGRIS MTS (150 QUESTIONS)
// ============================================================================
const mtsEnglishArchetypes = [
  // 1. Reading Comprehension: Descriptive Text (Islamic Heritage & Madrasah)
  {
    subtopic: 'Reading: Descriptive Text (Madrasah & Heritage)',
    competency: 'Analyze social function, specific information, and main idea of descriptive texts',
    generator: (cycle, diff, num) => {
      const places = [
        { name: 'Baiturrahman Grand Mosque', city: 'Banda Aceh', feature: 'striking black domes, white alabaster walls, and 12 grand electric umbrellas reminiscent of the Prophet’s Mosque in Medina', year: '1881' },
        { name: 'Istiqlal Grand Mosque', city: 'Jakarta', feature: 'massive stainless steel dome, seven entrance gates symbolizing the seven heavens, and capacity for over 200,000 worshippers', year: '1978' },
        { name: 'Menara Kudus Mosque', city: 'Central Java', feature: 'a unique red-brick minaret resembling a Hindu-Javanese candi, reflecting deep cultural acculturation and wisdom of Sunan Kudus', year: '1549' },
        { name: 'Sultan Suriansyah Mosque', city: 'Banjarmasin', feature: 'traditional Banjar multi-tiered wooden roof structure built along the scenic Kuin riverbank', year: '1526' },
        { name: 'Cordoba Great Mosque-Cathedral', city: 'Andalusia', feature: 'hundreds of bicolored red-and-white double arches supported by jasper and onyx columns', year: '785' }
      ];
      const p = places[(num - 1) % places.length];
      const passage = `${p.name} is one of the most prominent Islamic architectural landmarks located in ${p.city}. Established in ${p.year}, the structure is celebrated for its ${p.feature}. Pilgrims and educational study-tour groups from various madrasahs frequently visit this sanctuary not only to perform congregational prayers but also to admire its historical significance and harmonious cultural synthesis. The surrounding courtyard is adorned with lush gardens and reflective pools that create an atmosphere of serenity.`;
      
      const qTypes = [
        {
          q: `What is the main topic of the descriptive passage above?`,
          a: `The architectural magnificence and historical significance of ${p.name} in ${p.city}.`,
          b: `The detailed schedule of daily prayers at ancient mosques in Southeast Asia.`,
          c: `A comparison between modern commercial buildings and traditional wooden sanctuaries.`,
          d: `The political challenges faced by Muslim architects in the 18th century.`,
          ans: 'A',
          exp: `Paragraf tersebut secara menyeluruh mendeskripsikan keagungan arsitektur, sejarah pendirian (${p.year}), dan fungsi edukatif/spiritual ${p.name} di ${p.city}.`,
          tip: 'Main topic/idea sebuah descriptive text terangkum pada identifikasi objek utama di kalimat pembuka.'
        },
        {
          q: `Based on the text, what unique architectural feature characterizes ${p.name}?`,
          a: `Its ${p.feature}.`,
          b: 'High-tech glass skyscrapers and underground automated shopping arcades.',
          c: 'A completely flat concrete roof without any minarets or decorative arches.',
          d: 'An amphitheater designed exclusively for international sports tournaments.',
          ans: 'A',
          exp: `Teks secara eksplisit menyebutkan ciri arsitektur khasnya: "${p.feature}".`,
          tip: 'Scanning kata kunci "feature" atau ciri arsitektur pada paragraf stimulus.'
        },
        {
          q: `The word "serenity" in the last sentence is closest in meaning to...`,
          a: 'tranquility and peace',
          b: 'chaos and disturbance',
          c: 'extreme arrogance',
          d: 'dense pollution',
          ans: 'A',
          exp: '"Serenity" bermakna ketenangan, kedamaian batin (peacefulness/tranquility). Antonimnya adalah chaos/disturbance.',
          tip: 'Pahami konteks kalimat: taman asri dan kolam air di tempat ibadah menciptakan ketenangan ("serenity").'
        }
      ];
      const selectedQ = qTypes[(num - 1) % qTypes.length];
      return {
        passage,
        question: selectedQ.q,
        options: {
          A: selectedQ.a,
          B: selectedQ.b,
          C: selectedQ.c,
          D: selectedQ.d
        },
        correctAnswer: selectedQ.ans,
        explanation: selectedQ.exp,
        tip: selectedQ.tip
      };
    }
  },

  // 2. Reading Comprehension: Recount Text (Madrasah Science Camp / MTQ / Study Tour)
  {
    subtopic: 'Reading: Recount Text (School Events & Experiences)',
    competency: 'Identify chronology, factual events, and writer\'s reflection in recount texts',
    generator: (cycle, diff, num) => {
      const events = [
        { title: 'National Madrasah Robotics Competition in Yogyakarta', activity: 'presented an automated greenhouse watering system powered by solar micro-panels', outcome: 'received the silver trophy and best innovation certificate' },
        { title: 'Annual Madrasah Arabic & English Speech Contest', activity: 'delivered an argumentative speech on the pivotal role of youth in digital literacy', outcome: 'earned the first champion trophy after a tight final debate round' },
        { title: 'Field Study to the Geothermal Power Station in Dieng', activity: 'interviewed geothermal engineers and measured steam pressure using calibrated gauges', outcome: 'compiled a comprehensive environmental impact portfolio' },
        { title: 'Madrasah Scouts Eco-Camp and River Cleanup', activity: 'planted three hundred mangrove seedlings and sorted biodegradable waste along the estuary', outcome: 'received environmental conservation awards from the local regency office' }
      ];
      const ev = events[(num - 1) % events.length];
      const passage = `Last month, our madrasah sent a delegation to participate in the ${ev.title}. On the first morning, we registered at the reception hall and finalized our team demonstration booth. During the primary adjudication session, our team ${ev.activity}. Although we felt nervous when the jury posed sharp technical inquiries, we managed to elucidate our findings systematically. At the closing ceremony, the announcement brought immense joy as we ${ev.outcome}. It was an unforgettable learning milestone that strengthened our teamwork and scientific resilience.`;
      
      return {
        passage,
        question: `What was the ultimate achievement of the madrasah delegation according to the recount text?`,
        options: {
          A: `They ${ev.outcome}.`,
          B: 'They withdrew from the contest due to unresolved technical malfunctions.',
          C: 'They failed to answer the jury’s inquiries and left before the closing ceremony.',
          D: 'They organized a demonstration protesting the event committee’s venue choice.'
        },
        correctAnswer: 'A',
        explanation: `Bagian re-orientasi di akhir teks menyatakan bahwa delegasi madrasah "${ev.outcome}".`,
        tip: 'Struktur Recount: Orientation -> Events -> Re-orientation (evaluasi hasil akhir dan refleksi).'
      };
    }
  },

  // 3. Reading Comprehension: Procedure Text (Laboratory & Daily Activities)
  {
    subtopic: 'Reading: Procedure Text (Instructions & Lab Guidelines)',
    competency: 'Analyze sequential steps, temporal conjunctions, and imperative instructions',
    generator: (cycle, diff, num) => {
      const procedures = [
        { title: 'How to Prepare an Onion Epidermis Slide for Microscope Observation', first: 'Peel a delicate translucent membrane from the inner surface of a fresh onion scale.', action: 'Add a single drop of iodine solution or methylene blue onto the specimen.', purpose: 'to enhance the visual contrast of plant cell walls and nuclei under the objective lens.' },
        { title: 'How to Calibrate a Digital Laboratory Balance', first: 'Place the balance on a sturdy, level surface away from direct drafts.', action: 'Press the tare button until the digital LED display reads exactly zero point zero grams.', purpose: 'to eliminate the container weight and ensure precision measurements.' },
        { title: 'How to Operate a Fire Extinguisher (PASS Method)', first: 'Pull the safety pin located at the top of the operating lever.', action: 'Aim the nozzle towards the base of the fire and squeeze the trigger handle firmly.', purpose: 'to smother the fuel source effectively rather than merely scattering the flames.' }
      ];
      const proc = procedures[(num - 1) % procedures.length];
      const passage = `GUIDELINE: ${proc.title}\n1. ${proc.first}\n2. Carefully position the sample onto the center of a clean glass slide.\n3. ${proc.action}\n4. Gently lower the cover slip at a 45-degree angle to avoid air bubble entrapment.\n5. Inspect the prepared sample under low-power magnification before switching to high-power.`;

      return {
        passage,
        question: `In the guideline above, why should the operator ${proc.action.toLowerCase()}?`,
        options: {
          A: `In order ${proc.purpose}`,
          B: 'To permanently dissolve the glass slide before heating.',
          C: 'To increase the room temperature during observation.',
          D: 'To allow external dust particles to contaminate the specimen.'
        },
        correctAnswer: 'A',
        explanation: `Tindakan tersebut dilakukan untuk "${proc.purpose}".`,
        tip: 'Pertanyaan "Why..." pada teks prosedur menanyakan tujuan (purpose/function) dari langkah spesifik.'
      };
    }
  },

  // 4. Grammar in Context: Passive Voice in Academic & Factual Sentences
  {
    subtopic: 'Grammar: Passive Voice (Present & Past)',
    competency: 'Transform and construct passive voice constructions across academic contexts',
    generator: (cycle, diff, num) => {
      const passiveCases = [
        {
          active: 'The madrasah curriculum committee designed the new digital learning syllabus last month.',
          passive: 'The new digital learning syllabus was designed by the madrasah curriculum committee last month.',
          dist1: 'The new digital learning syllabus is designed by the madrasah curriculum committee last month.',
          dist2: 'The new digital learning syllabus has been designing by the madrasah curriculum committee.',
          dist3: 'The new digital learning syllabus was designing by the madrasah curriculum committee last month.'
        },
        {
          active: 'Laboratory technicians sterilize all glassware before conducting microbiological experiments.',
          passive: 'All glassware is sterilized by laboratory technicians before conducting microbiological experiments.',
          dist1: 'All glassware was sterilized by laboratory technicians before conducting microbiological experiments.',
          dist2: 'All glassware are sterilizing by laboratory technicians before conducting microbiological experiments.',
          dist3: 'All glassware have sterilized by laboratory technicians before conducting microbiological experiments.'
        },
        {
          active: 'Students have submitted twenty-five research articles for the madrasah science journal.',
          passive: 'Twenty-five research articles have been submitted by students for the madrasah science journal.',
          dist1: 'Twenty-five research articles has been submitted by students for the madrasah science journal.',
          dist2: 'Twenty-five research articles were submitting by students for the madrasah science journal.',
          dist3: 'Twenty-five research articles are submitted by students for the madrasah science journal.'
        }
      ];
      const pc = passiveCases[(num - 1) % passiveCases.length];
      return {
        question: `Choose the grammatically correct passive transformation of the following sentence:\n"${pc.active}"`,
        options: {
          A: pc.passive,
          B: pc.dist1,
          C: pc.dist2,
          D: pc.dist3
        },
        correctAnswer: 'A',
        explanation: `Pola kalimat pasif: Subjek penerima aksi + to be (sesuai tenses dan jumlah subjek) + Verb 3 (Past Participle) + by agent. Kalimat "${pc.passive}" mematuhi kesesuaian tenses dan agreement.`,
        tip: 'Perhatikan tenses asal: Simple Past -> was/were + V3; Simple Present -> is/am/are + V3; Present Perfect -> have/has been + V3.'
      };
    }
  },

  // 5. Grammar in Context: Degrees of Comparison
  {
    subtopic: 'Grammar: Degrees of Comparison',
    competency: 'Apply comparative and superlative structures correctly',
    generator: (cycle, diff, num) => {
      const compCases = [
        {
          sentence: 'Among all the library facilities in our regency, the madrasah digital library is considered the ... (comprehensive) in terms of scientific journal access.',
          ans: 'most comprehensive',
          d1: 'more comprehensive',
          d2: 'comprehensive-est',
          d3: 'as comprehensive as'
        },
        {
          sentence: 'Solar energy is substantially ... (clean) than burning fossil fuels for powering rural madrasah facilities.',
          ans: 'cleaner',
          d1: 'more clean',
          d2: 'cleanest',
          d3: 'as clean'
        },
        {
          sentence: 'Ahmad’s exam performance this semester is ... (good) than his previous trial score.',
          ans: 'better',
          d1: 'gooder',
          d2: 'more good',
          d3: 'best'
        }
      ];
      const cc = compCases[(num - 1) % compCases.length];
      return {
        question: `Complete the sentence with the appropriate degree of comparison:\n"${cc.sentence}"`,
        options: {
          A: cc.ans,
          B: cc.d1,
          C: cc.d2,
          D: cc.d3
        },
        correctAnswer: 'A',
        explanation: `Bentuk yang benar adalah "${cc.ans}". Kata sifat komparatif memakai akhiran -er atau more ... than, sedangkan bentuk superlatif memakai the most ... atau akhiran -est.`,
        tip: 'Ada kata "than" = Komparatif (cleaner, better). Ada "Among all..." atau "the..." = Superlatif (the most comprehensive).'
      };
    }
  },

  // 6. Short Functional Text: Official Notice, Announcement & Invitation
  {
    subtopic: 'Short Functional Text: Notices & Announcements',
    competency: 'Interpret information in notices, warning signs, and formal school announcements',
    generator: (cycle, diff, num) => {
      const notices = [
        {
          tag: 'MADRASAH SCIENCE LAB NOTICE',
          body: 'ALL STUDENTS AND VISITORS MUST WEAR SAFETY GOGGLES AND CHEMICAL-RESISTANT APRONS BEFORE ENTERING THE REAGENT STORAGE ZONE. FOOD AND DRINKS ARE STRICTLY PROHIBITED.',
          target: 'ensure personal physical protection against accidental chemical splashes and prevent substance contamination',
          dist: 'encourage students to sell snacks during biology practical exams'
        },
        {
          tag: 'CENTRAL MADRASAH LIBRARY ANNOUNCEMENT',
          body: 'DUE TO SYSTEMATIC RFID STOCK OPNAME, BOOK BORROWING AND PHYSICAL LOAN SERVICES WILL BE TEMPORARILY SUSPENDED FROM OCTOBER 5TH TO 8TH. ONLINE REPOSITORY ACCESS REMAINS FULLY OPERATIONAL.',
          target: 'inform users about the scheduled temporary pause in physical book borrowing while maintaining digital access',
          dist: 'notify that all library collections have been permanently sold to the public'
        }
      ];
      const not = notices[(num - 1) % notices.length];
      const passage = `NOTICE:\n[${not.tag}]\n"${not.body}"`;

      return {
        passage,
        question: `What is the primary intention of posting this public notice?`,
        options: {
          A: `To ${not.target}.`,
          B: `To ${not.dist}.`,
          C: 'To recruit new security personnel for night shifts.',
          D: 'To announce the permanent closure of the madrasah institution.'
        },
        correctAnswer: 'A',
        explanation: `Pemberitahuan tersebut bertujuan untuk "${not.target}".`,
        tip: 'Intention/Purpose notice: Cari tujuan utama yang mencakup pesan inti dan batasan aturan yang dicantumkan.'
      };
    }
  },

  // 7. Transactional Dialogues: Expression of Opinion, Agreement, and Permission
  {
    subtopic: 'Transactional Speaking: Opinions & Interpersonal Exchanges',
    competency: 'Analyze expressions of agreement, disagreement, obligation, and suggestion in dialogue',
    generator: (cycle, diff, num) => {
      const dialogues = [
        {
          speakerA: 'Umar: In my opinion, our student council should organize a peer tutoring program to assist classmates who struggle with numeracy.',
          speakerB: 'Zainab: ...! That initiative will not only improve our academic scores but also cultivate genuine empathy among students.',
          ans: 'I couldn’t agree with you more',
          d1: 'I totally disagree with your idea',
          d2: 'I doubt that has any value',
          d3: 'I am completely against that'
        },
        {
          speakerA: 'Teacher: Salma, you look pale and exhausted today. Have you seen the school nurse?',
          speakerB: 'Salma: Not yet, Ma’am. I have had a severe migraine since morning.\nTeacher: You ... go to the clinic immediately and take a rest.',
          ans: 'should',
          d1: 'might not',
          d2: 'must not',
          d3: 'are able to'
        }
      ];
      const d = dialogues[(num - 1) % dialogues.length];
      return {
        question: `Read the following dialogue and select the most appropriate expression to complete it:\n${d.speakerA}\n${d.speakerB}`,
        options: {
          A: d.ans,
          B: d.d1,
          C: d.d2,
          D: d.d3
        },
        correctAnswer: 'A',
        explanation: `Ekspresi yang tepat adalah "${d.ans}". Ungkapan ini menunjukkan keselarasan makna dalam konteks percakapan (persetujuan penuh / saran medis).`,
        tip: 'Perhatikan kalimat lanjutan: argumen pendukung ("cultivate empathy") mengindikasikan persetujuan (agreement).'
      };
    }
  }
];

// ============================================================================
// 2. BAHASA INGGRIS MA (150 QUESTIONS)
// ============================================================================
const maEnglishArchetypes = [
  // 1. Advanced Grammar: Conditional Sentences (Type 2, Type 3, & Inverted Conditionals)
  {
    subtopic: 'Advanced Grammar: Conditionals & Inversions',
    competency: 'Analyze unreal past conditions, mixed conditionals, and negative inversion syntax',
    generator: (cycle, diff, num) => {
      const cases = [
        {
          type: 'Inverted Conditional Type 3',
          sentence: '... the madrasah debate adjudicators noticed the subtle logical fallacy in the rebuttal earlier, the team’s total argumentation score would have been adjusted downwards.',
          ans: 'Had',
          d1: 'If had',
          d2: 'Were',
          d3: 'Should'
        },
        {
          type: 'Negative Adverbial Inversion',
          sentence: 'Seldom ... such a profound synthesis between religious ethics and contemporary scientific inquiry in an adolescent research competition.',
          ans: 'have we witnessed',
          d1: 'we have witnessed',
          d2: 'did we witnessed',
          d3: 'we were witnessing'
        },
        {
          type: 'Inverted Conditional Type 1 (Formal)',
          sentence: '... any student require supplementary laboratory consumables, please notify the laboratory curator twenty-four hours in advance.',
          ans: 'Should',
          d1: 'Unless',
          d2: 'Were',
          d3: 'Had'
        },
        {
          type: 'Conditional Type 3 (Hypothetical Past)',
          sentence: 'If the laboratory technician had inspected the voltage stabilizer before the storm, the delicate spectrophotometer ... damaged.',
          ans: 'would not have been',
          d1: 'will not be',
          d2: 'would not be',
          d3: 'was not'
        }
      ];
      const c = cases[(num - 1) % cases.length];
      return {
        question: `Identify the grammatically correct phrase to complete this advanced academic construction:\n"${c.sentence}"`,
        options: {
          A: c.ans,
          B: c.d1,
          C: c.d2,
          D: c.d3
        },
        correctAnswer: 'A',
        explanation: `Pada konstruksi "${c.type}", struktur inversi memindahkan auxiliary verb ke depan subjek tanpa konjungsi "if". Jawaban "${c.ans}" memenuhi kaidah tata bahasa tingkat lanjut.`,
        tip: 'Inversi Type 3: "Had + Subjek + V3..." = "If + Subjek + had + V3...". Inversi negatif (Seldom/Rarely): auxiliary mendahului subjek.'
      };
    }
  },

  // 2. Critical Reading: Analytical & Hortatory Exposition Text
  {
    subtopic: 'Critical Reading: Analytical Exposition (Global Issues & Education)',
    competency: 'Evaluate thesis, arguments, rhetorical stance, and implicit assumptions in exposition texts',
    generator: (cycle, diff, num) => {
      const essays = [
        {
          title: 'The Imperative of Cultivating Critical Artificial Intelligence Literacy in Modern Madrasahs',
          thesis: 'While Generative AI tools offer unprecedented productivity enhancements, uncritical reliance on automated text generators undermines authentic analytical cognitive faculties.',
          arg: 'Algorithmic hallucinations and implicit biases frequently fabricate sources and misrepresent theological nuances, requiring students to possess robust epistemic skepticism.',
          reit: 'Educational institutions must integrate algorithmic literacy into the curriculum rather than adopting indiscriminate technological euphoria.',
          topic: 'the critical necessity of balancing AI technology adoption with rigorous epistemic skepticism and analytical competence'
        },
        {
          title: 'Preserving Ecological Balance as an Integral Dimension of Islamic Stewardship (Khilafah Fil Ardh)',
          thesis: 'Anthropogenic carbon emissions and plastic contamination in marine ecosystems represent a moral crisis that violates the fundamental mandate of stewardship entrusted to humanity.',
          arg: 'Traditional sustainable agricultural practices combined with renewable energy transitions embody the Qur’anic principle of Mizan (cosmic equilibrium).',
          reit: 'Faith-based schools must spearhead zero-waste lifestyles and solar panel implementations as living demonstrations of Islamic environmental jurisprudence.',
          topic: 'the moral and theological imperative of ecological stewardship and environmental conservation in educational communities'
        }
      ];
      const es = essays[(num - 1) % essays.length];
      const passage = `ESSAY EXCERPT:\n"${es.title}"\n${es.thesis} ${es.arg} Therefore, ${es.reit}`;

      return {
        passage,
        question: `What is the underlying thesis and communicative purpose of the exposition text above?`,
        options: {
          A: `To persuade readers regarding ${es.topic}.`,
          B: 'To provide a lighthearted fictional narrative about robotic animals in a futuristic forest.',
          C: 'To explain the historical military tactics utilized during the Crusades in medieval times.',
          D: 'To advertise a commercial software package without any ethical evaluation.'
        },
        correctAnswer: 'A',
        explanation: `Teks eksposisi analitis bertujuan meyakinkan pembaca (persuade the readers) mengenai argumen pokok penulis, yaitu "${es.topic}".`,
        tip: 'Analytical Exposition = Thesis + Arguments + Reiteration (Menjelaskan mengapa suatu isu krusial/penting).'
      };
    }
  },

  // 3. Discourse Analysis: Cohesion, Coherence, and Logical Connectors
  {
    subtopic: 'Discourse: Cohesive Devices & Sentence Connectors',
    competency: 'Analyze transition markers (concession, contrast, addition, cause-and-effect)',
    generator: (cycle, diff, num) => {
      const transitions = [
        {
          context: 'The madrasah administration faced significant budgetary constraints during the fiscal year. ..., they successfully secured external competitive grants and completed the construction of the state-of-the-art multimedia laboratory.',
          ans: 'Nevertheless (concession/contrast)',
          word: 'Nevertheless',
          d1: 'Consequently',
          d2: 'Furthermore',
          d3: 'Similarly'
        },
        {
          context: 'Global temperatures have continued to shatter historical records annually. ..., extreme meteorological events such as flash droughts and severe typhoons have quadrupled in frequency.',
          ans: 'Consequently (cause-and-effect / result)',
          word: 'Consequently',
          d1: 'In spite of this',
          d2: 'Conversely',
          d3: 'On the contrary'
        },
        {
          context: 'The newly introduced module reinforces foundational algebraic geometry. ..., it provides extensive exploratory data science simulations for advanced students.',
          ans: 'Furthermore (addition/extension)',
          word: 'Furthermore',
          d1: 'On the other hand',
          d2: 'Otherwise',
          d3: 'Nonetheless'
        }
      ];
      const tr = transitions[(num - 1) % transitions.length];
      return {
        question: `Choose the discourse connector that best establishes the logical relationship between the two clauses:\n"${tr.context}"`,
        options: {
          A: tr.word,
          B: tr.d1,
          C: tr.d2,
          D: tr.d3
        },
        correctAnswer: 'A',
        explanation: `Hubungan logis yang terjalin adalah ${tr.ans}. Kata "${tr.word}" mengekspresikan transisi makna secara presisi.`,
        tip: 'Perhatikan hubungan makna: Kontras meskipun ada kendala -> Nevertheless. Hubungan sebab akibat -> Consequently. Penambahan ide setara -> Furthermore.'
      };
    }
  },

  // 4. Advanced Grammar: Subjunctive Mood, Participle Clauses, and Gerunds
  {
    subtopic: 'Advanced Grammar: Subjunctives & Reduced Clauses',
    competency: 'Apply subjunctive mood and reduced adverbial/relative participle clauses',
    generator: (cycle, diff, num) => {
      const subjCases = [
        {
          sentence: 'The headmaster strongly recommended that every teacher ... (submit) the differentiated lesson portfolio before the accreditation deadline.',
          ans: 'submit (mandative subjunctive base form)',
          word: 'submit',
          d1: 'submits',
          d2: 'submitted',
          d3: 'has submitted'
        },
        {
          sentence: '... (realize) that the chemical mixture was highly volatile, the senior researcher immediately evacuated the laboratory chamber.',
          ans: 'Realizing (present participle showing cause/reason)',
          word: 'Realizing',
          d1: 'Realized',
          d2: 'Having been realized',
          d3: 'To be realizing'
        },
        {
          sentence: 'The historical manuscript, ... (preserve) in the temperature-controlled archive for decades, was finally exhibited to academic scholars.',
          ans: 'preserved (past participle clause / passive meaning)',
          word: 'preserved',
          d1: 'preserving',
          d2: 'was preserving',
          d3: 'having preserved'
        }
      ];
      const sc = subjCases[(num - 1) % subjCases.length];
      return {
        question: `Identify the grammatically correct form to complete the sentence:\n"${sc.sentence}"`,
        options: {
          A: sc.word,
          B: sc.d1,
          C: sc.d2,
          D: sc.d3
        },
        correctAnswer: 'A',
        explanation: `Struktur ini menuntut penggunaan ${sc.ans}. Pada mandative subjunctive (recommend/insist/mandate that...), kata kerja selalu dalam bentuk dasar (bare infinitive). Pada reduced clause, aksi aktif menggunakan Present Participle (V-ing), aksi pasif menggunakan Past Participle (V3).`,
        tip: 'Mandative subjunctive: "recommend that + Subject + [Bare Infinitive]". Tanpa akhiran -s atau -ed.'
      };
    }
  },

  // 5. Reading Comprehension: Discussion Text & Multi-perspective Evaluation
  {
    subtopic: 'Reading: Discussion Text (Controversial Issues)',
    competency: 'Evaluate opposing viewpoints, authorial neutrality, and synthesizing conclusions',
    generator: (cycle, diff, num) => {
      const passage = `The integration of algorithmic automated grading systems for student academic essays has ignited polarized debates across educational fraternities. Proponents argue that machine learning evaluators eliminate subjective human bias, provide instant formative feedback on grammatical mechanics, and relieve teachers from hundreds of grading hours. Conversely, detractors contend that automated algorithms fail to comprehend nuanced metaphors, rhetorical creativity, philosophical depth, and culturally grounded humor. Consequently, a growing consensus advocates for a hybrid model where AI handles preliminary mechanical proofreading, while human educators retain ultimate qualitative evaluation.`;

      return {
        passage,
        question: `What is the synthesis or balanced resolution proposed in the discussion text?`,
        options: {
          A: 'A hybrid model in which AI assists with preliminary mechanics, but human educators evaluate qualitative and nuanced dimensions.',
          B: 'A complete ban on all computational technology in educational grading.',
          C: 'The total dismissal of human teachers in favor of fully automated autonomous evaluation robots.',
          D: 'The immediate abolition of essay writing tests from all national curricula.'
        },
        correctAnswer: 'A',
        explanation: 'Kalimat terakhir teks diskusi menyatakan sintesis jalan tengah yang seimbang: "a hybrid model where AI handles preliminary mechanical proofreading, while human educators retain ultimate qualitative evaluation."',
        tip: 'Struktur Discussion Text diakhiri dengan Rekomendasi/Sintesis seimbang (Balanced conclusion) yang memadukan kelebihan kedua pandangan pro dan kontra.'
      };
    }
  },

  // 6. ELT Pedagogical Competence: Lesson Planning & Assessment Rubrics
  {
    subtopic: 'ELT Pedagogy: Teaching Receptive & Productive Skills',
    competency: 'Design communicative language tasks, diagnostic reading questions, and holistic writing rubrics',
    generator: (cycle, diff, num) => {
      const pedScenarios = [
        {
          context: 'An English teacher in Madrasah Aliyah notices that while students can memorize vocabulary lists, they struggle significantly with summarizing argumentative texts in their own words.',
          action: 'Implementing reciprocal teaching strategies focusing on predicting, questioning, clarifying, and summarizing in collaborative peer groups.',
          d1: 'Doubling the weekly memorization quotas of isolated bilingual dictionary entries.',
          d2: 'Restricting all English activities exclusively to multiple-choice grammatical drill sheets.',
          d3: 'Exempting students from ever reading texts containing more than one paragraph.'
        },
        {
          context: 'When designing a diagnostic reading assessment to measure students’ ability to draw inferences rather than merely retrieve explicit facts, the teacher should formulate questions that...',
          action: 'Require students to connect contextual text clues with prior world knowledge to deduce implicit motivations and underlying themes.',
          d1: 'Ask students to copy-paste the exact sentence found in paragraph one without any transformation.',
          d2: 'Demand students count the exact number of words printed on the page.',
          d3: 'Test students solely on spelling punctuation marks in isolation.'
        }
      ];
      const ps = pedScenarios[(num - 1) % pedScenarios.length];
      return {
        question: `PEDAGOGICAL SCENARIO:\n"${ps.context}"\nWhat is the most effective and communicative instructional response?`,
        options: {
          A: ps.action,
          B: ps.d1,
          C: ps.d2,
          D: ps.d3
        },
        correctAnswer: 'A',
        explanation: `Pendekatan pedagogik bahasa Inggris yang komunikatif dan berbasis nalar kritis berfokus pada strategi aktif: ${ps.action}.`,
        tip: 'Pendekatan ELT modern: Mengutamakan scaffolding kontekstual, pemahaman inferensial, dan interaksi kolaboratif (reciprocal teaching).'
      };
    }
  }
];

// Build the complete 150 questions for MTs and MA
function generateEnglishMTs() {
  const questions = [];
  const numArchetypes = mtsEnglishArchetypes.length;
  for (let i = 0; i < 150; i++) {
    const arch = mtsEnglishArchetypes[i % numArchetypes];
    const cycle = Math.floor(i / numArchetypes) + 1;
    const difficulty = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');
    const num = i + 1;
    const padded = String(num).padStart(3, '0');
    const id = `MTS-EN-${padded}`;

    const built = arch.generator(cycle, difficulty, num);

    questions.push(createQuestion({
      id,
      educationLevel: 'MTs',
      categoryId: 'umum',
      category: 'umum',
      akgtkCategory: 'Umum',
      subjectId: 'bahasa_inggris',
      subject: 'Bahasa Inggris MTs',
      subtopic: arch.subtopic,
      competency: arch.competency,
      passage: built.passage,
      question: built.question,
      optionA: built.options.A,
      optionB: built.options.B,
      optionC: built.options.C,
      optionD: built.options.D,
      correctAnswer: built.correctAnswer,
      explanation: built.explanation,
      tip: built.tip,
      difficulty
    }));
  }
  return questions;
}

function generateEnglishMA() {
  const questions = [];
  const numArchetypes = maEnglishArchetypes.length;
  for (let i = 0; i < 150; i++) {
    const arch = maEnglishArchetypes[i % numArchetypes];
    const cycle = Math.floor(i / numArchetypes) + 1;
    const difficulty = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');
    const num = i + 1;
    const padded = String(num).padStart(3, '0');
    const id = `MA-EN-${padded}`;

    const built = arch.generator(cycle, difficulty, num);

    questions.push(createQuestion({
      id,
      educationLevel: 'MA',
      categoryId: 'umum',
      category: 'umum',
      akgtkCategory: 'Umum',
      subjectId: 'bahasa_inggris',
      subject: 'Bahasa Inggris MA',
      subtopic: arch.subtopic,
      competency: arch.competency,
      passage: built.passage,
      question: built.question,
      optionA: built.options.A,
      optionB: built.options.B,
      optionC: built.options.C,
      optionD: built.options.D,
      correctAnswer: built.correctAnswer,
      explanation: built.explanation,
      tip: built.tip,
      difficulty
    }));
  }
  return questions;
}

module.exports = {
  generateEnglishMTs,
  generateEnglishMA
};

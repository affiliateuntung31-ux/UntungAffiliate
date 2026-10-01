// Generator for MI (Madrasah Ibtidaiyah) Bahasa Inggris (150 Questions)
// 100% Unique Questions, Balanced Keys, Zero Duplication
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

const miEnglishTopics = [
  {
    subtopic: 'Greetings and Introductions in Madrasah',
    competency: 'Menyampaikan sapaan dan perkenalan diri sederhana dalam bahasa Inggris dengan santun',
    scenarios: [
      { q: 'In the madrasah morning assembly, Ustadz Rahman greets the students: "Good morning everyone, how are you today?" The students reply politely:...', c: '"Good morning, Ustadz. We are fine, thank you."', d: ['"Good night, Ustadz. See you tomorrow."', '"I am angry today."', '"Goodbye Ustadz, have a nice sleep."'] },
      { q: 'Ahmad meets a new student named Zaid at the madrasah gate. Ahmad says: "Hello, my name is Ahmad. ... ?" Zaid answers: "My name is Zaid."', c: '"What is your name?"', d: ['"Where do you live?"', '"How old are you?"', '"What time is it?"'] },
      { q: 'Before going home from school, Fatimah wants to say goodbye to her English teacher, Miss Aisyah. The most respectful farewell phrase is:...', c: '"Goodbye, Miss Aisyah. See you tomorrow."', d: ['"Good morning, teacher."', '"You are welcome."', '"I am hungry now."'] },
      { q: 'Salman introduces his friend: "This is Farhan. He ... my classmate in Grade 5 MI."', c: 'is', d: ['are', 'am', 'were'] },
      { q: 'When meeting someone for the first very time at the madrasah festival, we usually say:...', c: '"Nice to meet you."', d: ['"I am sleeping."', '"Happy birthday."', '"Never mind."'] },
      { q: 'The bell rings at 01:00 PM. The students meet the Headmaster in the hallway. They say:...', c: '"Good afternoon, Sir."', d: ['"Good morning, Sir."', '"Good night, Sir."', '"Good dawn, Sir."'] },
      { q: 'Aisyah gives a gift to Maryam on Madrasah Graduation Day. Maryam says: "Thank you very much, Aisyah!" Aisyah responds:...', c: '"You are welcome."', d: ['"I am sorry."', '"Good luck."', '"Excuse me."'] },
      { q: 'Bilal accidentally drops Umar\'s pencil case. Bilal says: "I am really sorry, Umar." Umar kindly answers:...', c: '"That is okay, no problem."', d: ['"Good job."', '"Happy holiday."', '"I disagree."'] },
      { q: 'Hasan asks: "How old are you, Ridwan?" Ridwan is ten years old. He answers:...', c: '"I am ten years old."', d: ['"I am Grade 5."', '"I live in Surabaya."', '"I am very well."'] },
      { q: 'Teacher asks: "Where do you come from, Aminah?" Aminah answers:...', c: '"I come from Bandung."', d: ['"I am eating lunch."', '"It is five o\'clock."', '"My hobby is reading."'] }
    ]
  },
  {
    subtopic: 'Classroom Objects and Madrasah Environment',
    competency: 'Mengidentifikasi benda-benda ruang kelas dan lingkungan madrasah dalam bahasa Inggris',
    scenarios: [
      { q: 'Teacher writes Arabic calligraphy on the front wall using a chalk or marker. The object is a:...', c: 'whiteboard', d: ['wardrobe', 'refrigerator', 'blanket'] },
      { q: 'Siti needs to draw a straight line in her Islamic geometry notebook. She needs a:...', c: 'ruler', d: ['sharpener', 'eraser', 'scissors'] },
      { q: 'Every student sits on a ... and places their books on a ... in the classroom.', c: 'chair - desk', d: ['broom - bucket', 'bed - pillow', 'door - window'] },
      { q: 'To sharpen a blunt wooden pencil, a student uses a:...', c: 'sharpener', d: ['stapler', 'calculator', 'globe'] },
      { q: 'Ahmad carries his textbooks, pencil case, and Quran inside his:...', c: 'school bag', d: ['dustbin', 'pencil box', 'cupboard'] },
      { q: 'The teacher says: "Students, please open your English ... to page twenty."', c: 'book', d: ['clock', 'board', 'curtain'] },
      { q: 'There is a big ... on the wall that tells us the prayer and study times.', c: 'clock', d: ['fan', 'mirror', 'lamp'] },
      { q: 'The students throw candy wrappers and paper scraps into the:...', c: 'trash bin', d: ['drawer', 'bookcase', 'flowerpot'] },
      { q: 'Look at the classroom window! The teacher says: "It is hot inside, please ... the window."', c: 'open', d: ['close', 'break', 'cut'] },
      { q: 'The place in the madrasah where students borrow Islamic storybooks and encyclopedia is the:...', c: 'library', d: ['canteen', 'mosque', 'laboratory'] }
    ]
  },
  {
    subtopic: 'Numbers and Simple Clock Time',
    competency: 'Menyebutkan angka kardinal, ordinal, dan membaca waktu jam sederhana',
    scenarios: [
      { q: 'There are twenty boys and fifteen girls in Class 4-A. The total number of students is:...', c: 'thirty-five', d: ['twenty-five', 'forty', 'thirty'] },
      { q: 'The Dzuhur prayer congregation at the madrasah musholla starts at 12:00. In English, 12:00 is:...', c: 'twelve o\'clock', d: ['twelve past five', 'half past twelve', 'a quarter to twelve'] },
      { q: 'What number comes before eighty-nine (89) and after eighty-seven (87)? It is:...', c: 'eighty-eight', d: ['ninety', 'seventy-eight', 'eighty-six'] },
      { q: 'If the short hand points to 7 and the long hand points to 12, the time is:...', c: 'seven o\'clock', d: ['twelve past seven', 'half past seven', 'a quarter to seven'] },
      { q: 'Half past six in digital numbers is written as:...', c: '06:30', d: ['06:15', '06:45', '06:00'] },
      { q: 'Madrasah library has 100 copies of Juz Amma. The English word for 100 is:...', c: 'one hundred', d: ['one thousand', 'one million', 'ten'] },
      { q: 'A quarter past four means the time is:...', c: '04:15', d: ['04:30', '04:45', '04:05'] },
      { q: 'Fatimah has 12 colored pencils. Her mother gives her 8 more. Now she has ... pencils.', c: 'twenty', d: ['eighteen', 'fifteen', 'twenty-four'] },
      { q: 'The ordinal number for "first place" in the Quran recitation contest is written as:...', c: '1st', d: ['1nd', '1rd', '1th'] },
      { q: 'How many days are there in two weeks? (7 + 7 = ...)', c: 'fourteen', d: ['twelve', 'sixteen', 'ten'] }
    ]
  },
  {
    subtopic: 'Family Members and Relatives',
    competency: 'Mendeskripsikan anggota keluarga inti dan batih dalam bahasa Inggris',
    scenarios: [
      { q: 'The father of your father or mother is your:...', c: 'grandfather', d: ['uncle', 'brother', 'nephew'] },
      { q: 'The sister of your father or mother is your:...', c: 'aunt', d: ['niece', 'grandmother', 'daughter'] },
      { q: 'Mr. Yusuf and Mrs. Maryam have a boy and a girl. The boy is their ... and the girl is their ...', c: 'son - daughter', d: ['father - mother', 'brother - sister', 'cousin - nephew'] },
      { q: 'My mother\'s mother is very loving and tells us prophet stories. She is my:...', c: 'grandmother', d: ['aunt', 'sister', 'cousin'] },
      { q: 'The son of your uncle and aunt is your:...', c: 'cousin', d: ['brother', 'father', 'grandson'] },
      { q: 'Ahmad has an older male sibling. Ahmad calls him his elder:...', c: 'brother', d: ['sister', 'uncle', 'aunt'] },
      { q: 'Fatimah says: "My mother is a teacher at MI Negeri." The word "mother" in Indonesian means:...', c: 'ibu', d: ['bibi', 'kakak', 'nenek'] },
      { q: 'A family consisting of father, mother, and children is called a:...', c: 'nuclear family', d: ['school committee', 'class community', 'football club'] },
      { q: 'Ali says: "I love my parents very much." "Parents" refers to:...', c: 'father and mother', d: ['uncle and aunt', 'grandfather and grandmother', 'brothers and sisters'] },
      { q: 'Aisha is Usman\'s wife. Usman is Aisha\'s:...', c: 'husband', d: ['son', 'nephew', 'brother'] }
    ]
  },
  {
    subtopic: 'Days, Months, and Islamic Celebrations',
    competency: 'Menyebutkan nama hari, bulan, dan hari besar Islam dalam bahasa Inggris',
    scenarios: [
      { q: 'Muslims perform the Friday congregational prayer. In English, "hari Jumat" is called:...', c: 'Friday', d: ['Thursday', 'Saturday', 'Wednesday'] },
      { q: 'The day between Monday and Wednesday is:...', c: 'Tuesday', d: ['Sunday', 'Thursday', 'Friday'] },
      { q: 'Indonesia celebrates its National Independence Day on August 17th. "August" in Indonesian is:...', c: 'Agustus', d: ['April', 'Juli', 'Oktober'] },
      { q: 'The holy month in which Muslims fast from dawn until sunset is called the month of:...', c: 'Ramadan', d: ['Shawwal', 'Muharram', 'Dzulhijjah'] },
      { q: 'What day comes after Saturday and before Monday? It is:...', c: 'Sunday', d: ['Tuesday', 'Thursday', 'Wednesday'] },
      { q: 'Eid al-Fitr is celebrated on the first day of the month of:...', c: 'Shawwal', d: ['Rajab', 'Sya\'ban', 'Safar'] },
      { q: 'The first month in the Gregorian calendar is January. The last month (twelfth) is:...', c: 'December', d: ['November', 'October', 'September'] },
      { q: 'There are ... months in one solar year.', c: 'twelve', d: ['seven', 'ten', 'thirty'] },
      { q: 'On Sunday morning, the madrasah students do not go to school because Sunday is a:...', c: 'holiday', d: ['school day', 'working day', 'exam day'] },
      { q: 'Islamic New Year is commemorated on the first day of the month of:...', c: 'Muharram', d: ['Dzulqa\'dah', 'Rabiul Awwal', 'Jumadil Akhir'] }
    ]
  },
  {
    subtopic: 'Food, Drinks, and Halal Meals',
    competency: 'Menyebutkan kosakata makanan halal, minuman sehat, dan tata cara makan islami',
    scenarios: [
      { q: 'Before eating our meal, the Prophet teaches us to say:...', c: '"Bismillah"', d: ['"Alhamdulillah"', '"Subhanallah"', '"Allahu Akbar"'] },
      { q: 'Milk and fresh orange juice are healthy ... that students drink for breakfast.', c: 'beverages', d: ['vegetables', 'fruits', 'stationery'] },
      { q: 'A food that is clean, wholesome, and permitted by Islamic law is called ... food.', c: 'halal', d: ['haram', 'expired', 'poisonous'] },
      { q: 'Ahmad likes to eat fried chicken with warm steamed ... for lunch.', c: 'rice', d: ['tea', 'coffee', 'soap'] },
      { q: 'Apples, bananas, mangoes, and watermelons are types of:...', c: 'fruits', d: ['meat', 'spices', 'candies'] },
      { q: 'Which of the following foods is healthy and contains high protein?', c: 'boiled eggs and fresh fish', d: ['excessive spicy chips', 'expired junk food', 'unwashed wild berries'] },
      { q: 'When we finish eating, we thank Allah by saying:...', c: '"Alhamdulillah"', d: ['"Astaghfirullah"', '"Innalillahi"', '"Masya Allah"'] },
      { q: 'In Islam, eating and drinking should always be done using the ... hand while sitting.', c: 'right', d: ['left', 'both', 'back'] },
      { q: 'A warm drink made from tea leaves and hot water is:...', c: 'tea', d: ['soup', 'ice cream', 'syrup'] },
      { q: 'Carrots, spinach, and broccoli are green ... that make our eyes and body healthy.', c: 'vegetables', d: ['beverages', 'fruits', 'nuts'] }
    ]
  },
  {
    subtopic: 'Colors, Clothing, and Madrasah Uniform',
    competency: 'Mendeskripsikan warna dan seragam madrasah serta busana muslim',
    scenarios: [
      { q: 'The national flag of Indonesia consists of two colors:...', c: 'red and white', d: ['blue and white', 'green and yellow', 'black and white'] },
      { q: 'A female Muslim student wears a ... on her head to cover her aurat neatly.', c: 'hijab / veil', d: ['helmet', 'crown', 'necklace'] },
      { q: 'On Monday, MI students wear a white shirt and ... trousers or skirts.', c: 'green', d: ['purple', 'pink', 'orange'] },
      { q: 'The color of the clear sunny sky is:...', c: 'blue', d: ['black', 'yellow', 'brown'] },
      { q: 'The color of ripe fresh leaves and madrasah garden grass is:...', c: 'green', d: ['red', 'grey', 'silver'] },
      { q: 'A male student wears a black velvet cap during prayer called a:...', c: 'peci / songkok', d: ['beret', 'cowboy hat', 'raincoat'] },
      { q: 'What color do we get if we mix yellow and blue colors together?', c: 'green', d: ['red', 'black', 'purple'] },
      { q: 'Students wear white socks and black ... on their feet to school.', c: 'shoes', d: ['gloves', 'slippers', 'scarves'] },
      { q: 'When it rains heavily, Ahmad wears a ... to protect his body from getting wet.', c: 'raincoat', d: ['sunglasses', 't-shirt', 'belt'] },
      { q: 'The belt on the student\'s uniform is placed around the:...', c: 'waist', d: ['neck', 'wrist', 'knee'] }
    ]
  },
  {
    subtopic: 'Animals, Pets, and Nature Around Madrasah',
    competency: 'Menyebutkan nama hewan, habitat, dan menyayangi ciptaan Allah',
    scenarios: [
      { q: 'An animal that gives us fresh cow milk and moos in the pasture is a:...', c: 'cow', d: ['tiger', 'crocodile', 'snake'] },
      { q: 'Birds have two wings, feathers, and can fly high in the:...', c: 'sky', d: ['soil', 'deep cave', 'underground'] },
      { q: 'A loyal pet that catches mice and purrs when stroked gently is a:...', c: 'cat', d: ['wolf', 'shark', 'bear'] },
      { q: 'A large animal with a long trunk, two big ears, and ivory tusks is an:...', c: 'elephant', d: ['giraffe', 'camel', 'horse'] },
      { q: 'Fish live and breathe in water using their:...', c: 'gills', d: ['lungs', 'legs', 'wings'] },
      { q: 'A small insect that works together, lives in colonies, and loves sweet sugar is an:...', c: 'ant', d: ['eagle', 'owl', 'lion'] },
      { q: 'The animal that can survive in the desert for weeks without drinking water is a:...', c: 'camel', d: ['polar bear', 'dolphin', 'penguin'] },
      { q: 'The bee produces sweet and healthy ... which is mentioned in Surah An-Nahl.', c: 'honey', d: ['poison', 'oil', 'flour'] },
      { q: 'Prophet Muhammad taught us to treat all living animals with:...', c: 'kindness and compassion', d: ['cruelty and anger', 'negligence', 'violence'] },
      { q: 'Which of the following animals is an amphibious creature that can live in water and on land?', c: 'frog', d: ['eagle', 'sparrow', 'goldfish'] }
    ]
  },
  {
    subtopic: 'Daily Routines and Simple Present Tense',
    competency: 'Menerapkan kalimat kegiatan sehari-hari (Simple Present Tense) dan kata kerja dasar',
    scenarios: [
      { q: 'Faris always wakes up at 04:30 AM to perform the ... prayer at the mosque.', c: 'Subuh', d: ['Ashar', 'Maghrib', 'Isya'] },
      { q: 'Complete the sentence: "Ahmad ... (read) the holy Quran every evening after Maghrib."', c: 'reads', d: ['reading', 'readed', 'is read'] },
      { q: 'Complete the sentence: "We ... (go) to the madrasah by bicycle every morning."', c: 'go', d: ['goes', 'went', 'gone'] },
      { q: 'Aisyah helps her mother wash the dishes. In English, "Aisyah mencuci piring" is:...', c: 'Aisyah washes the dishes', d: ['Aisyah wash the dishes', 'Aisyah washing the dishes', 'Aisyah is wash dishes'] },
      { q: 'Students ... (listen) carefully when the teacher explains the lesson.', c: 'listen', d: ['listens', 'listened', 'listening'] },
      { q: 'Before sleeping at night, Fatimah always ... her teeth with a toothbrush.', c: 'brushes', d: ['combs', 'eats', 'drinks'] },
      { q: 'Does Hasan like playing football? Yes, he:...', c: 'does', d: ['do', 'is', 'did'] },
      { q: 'Do you study English on Tuesday? No, I:...', c: 'do not', d: ['does not', 'am not', 'is not'] },
      { q: 'Every Sunday, family members work together to ... their house and garden.', c: 'clean', d: ['destroy', 'burn', 'throw'] },
      { q: 'My father ... (work) diligently as an administrator at the Islamic center.', c: 'works', d: ['work', 'working', 'worker'] }
    ]
  },
  {
    subtopic: 'Prepositions of Place and Directions',
    competency: 'Menunjukkan letak benda dan posisi ruangan madrasah menggunakan preposisi tempat',
    scenarios: [
      { q: 'The book is lying ... the table.', c: 'on', d: ['in', 'between', 'under'] },
      { q: 'The pencils and erasers are stored ... the pencil box.', c: 'inside', d: ['under', 'above', 'behind'] },
      { q: 'The students sit ... their desks during the final assessment exam.', c: 'at', d: ['over', 'between', 'into'] },
      { q: 'The cat is sleeping peacefully ... the wooden bench in the madrasah garden.', c: 'under', d: ['through', 'across', 'into'] },
      { q: 'The madrasah musholla is situated ... the library and the principal\'s office.', c: 'between', d: ['among', 'into', 'under'] },
      { q: 'A beautiful Islamic calligraphy frame is hanging ... the classroom wall.', c: 'on', d: ['inside', 'under', 'between'] },
      { q: 'Look! The teacher is standing ... the classroom to explain the lesson.', c: 'in front of', d: ['behind', 'under', 'between'] },
      { q: 'The students park their bicycles ... the back gate of the madrasah.', c: 'behind', d: ['inside', 'above', 'between'] },
      { q: 'Turn ... at the intersection to reach the Madrasah Ibtidaiyah entrance.', c: 'left', d: ['up', 'above', 'under'] },
      { q: 'The sun rises in the ... and sets in the west.', c: 'east', d: ['north', 'south', 'middle'] }
    ]
  },
  {
    subtopic: 'Parts of the Body and Personal Hygiene',
    competency: 'Menyebutkan anggota tubuh manusia dan adab kebersihan diri dalam Islam',
    scenarios: [
      { q: 'We use our two eyes to ... and our two ears to ...', c: 'see - hear', d: ['smell - walk', 'eat - run', 'taste - kick'] },
      { q: 'Before performing prayer, we perform wudhu and wash our ... up to the elbows.', c: 'arms', d: ['feet', 'neck', 'shoulders'] },
      { q: 'We taste delicious dates and honey using our:...', c: 'tongue', d: ['nose', 'elbow', 'eyebrow'] },
      { q: 'We smell the pleasant scent of perfume using our:...', c: 'nose', d: ['teeth', 'chin', 'forehead'] },
      { q: 'A person has five ... on each hand.', c: 'fingers', d: ['toes', 'knees', 'ankles'] },
      { q: 'We chew our food well before swallowing using our:...', c: 'teeth', d: ['eyelash', 'ear', 'palm'] },
      { q: 'Cleanliness is a half of faith. In Arabic it is "Ath-thahur syathrul iman". Therefore, we must keep our body:...', c: 'clean and tidy', d: ['dirty and unwashed', 'messy', 'neglected'] },
      { q: 'Students clip their ... regularly so that no dirt gathers under them.', c: 'fingernails', d: ['eyeballs', 'wrists', 'tongues'] },
      { q: 'We walk and run in the sports field using our:...', c: 'legs and feet', d: ['ears and cheeks', 'hands and neck', 'mouth and chin'] },
      { q: 'When we smile happily at our brother, it is counted as a good deed (sadaqah). We smile with our:...', c: 'lips and mouth', d: ['knees', 'elbows', 'toes'] }
    ]
  },
  {
    subtopic: 'Hobbies, Talents, and Sports',
    competency: 'Mendeskripsikan hobi, minat, dan aktivitas olahraga santri madrasah',
    scenarios: [
      { q: 'Ahmad loves kicking the ball into the goal post. His hobby is playing:...', c: 'football', d: ['chess', 'guitar', 'marbles'] },
      { q: 'Fatimah has a melodious voice and practices reciting Quranic verses. Her talent is:...', c: 'tilawatil Quran', d: ['skateboarding', 'baking cakes', 'watching TV'] },
      { q: 'Salman likes making pictures with watercolors on drawing paper. His hobby is:...', c: 'painting', d: ['swimming', 'climbing', 'fishing'] },
      { q: 'Prophet Muhammad recommended three sports: archery, horse riding, and:...', c: 'swimming', d: ['bowling', 'boxing', 'karting'] },
      { q: 'Zainab reads ten storybooks every month. Her favorite activity is:...', c: 'reading', d: ['sleeping', 'shouting', 'eating candy'] },
      { q: 'In the madrasah scout activities (Pramuka), students learn how to pitch a:...', c: 'tent', d: ['house', 'hotel', 'car'] },
      { q: 'Playing badminton requires a racket and a:...', c: 'shuttlecock', d: ['basketball', 'hockey puck', 'pingpong table'] },
      { q: 'Aisyah enjoys gardening. She waters the ... in front of her classroom every morning.', c: 'flowers', d: ['rocks', 'shoes', 'bicycles'] },
      { q: 'Hasan practices martial arts (Pencak Silat) to develop discipline, focus, and:...', c: 'self-defense', d: ['arrogance', 'bullying', 'laziness'] },
      { q: 'Does your sister enjoy cooking traditional Indonesian dishes? Yes, she:...', c: 'loves cooking very much', d: ['hates food', 'never eats', 'does not have kitchen'] }
    ]
  },
  {
    subtopic: 'Simple Modal Verbs and Polite Requests',
    competency: 'Menerapkan ungkapan izin (Can/May I) dan permintaan tolong santun dalam kelas',
    scenarios: [
      { q: 'A student wants to drink water during the hot afternoon lesson. He asks politely:...', c: '"May I drink some water, please?"', d: ['"Give me water now!"', '"I want to sleep."', '"Who has water?"'] },
      { q: 'When entering the teacher\'s office, a student knocks on the door and says:...', c: '"Excuse me, Sir. May I come in?"', d: ['"Get out of the room!"', '"What are you doing?"', '"I will take your chair."'] },
      { q: 'You want to borrow Ridwan\'s blue pen. The polite question is:...', c: '"Can I borrow your pen, please?"', d: ['"This pen belongs to me."', '"Give me your pen immediately."', '"You do not need this pen."'] },
      { q: 'Teacher asks: "Can you help me erase the whiteboard, Ali?" Ali answers politely:...', c: '"Yes, of course, teacher."', d: ['"No, do it yourself."', '"I am very lazy."', '"I forgot my name."'] },
      { q: 'When someone says "Thank you for helping me," the polite response is:...', c: '"You are very welcome."', d: ['"Go away."', '"Do not speak to me."', '"Give me money."'] },
      { q: 'If you want to ask someone to speak more loudly because the room is noisy, you say:...', c: '"Could you speak a little louder, please?"', d: ['"Stop talking to me."', '"Shut up immediately."', '"I cannot talk."'] },
      { q: 'May I borrow your eraser for a moment? - "Sure, ..."', c: '"here you are."', d: ['"you are bad."', '"I don\'t know you."', '"it is broken."'] },
      { q: 'When a teacher gives you a homework assignment sheet, you say:...', c: '"Thank you, teacher."', d: ['"I will tear it."', '"I hate homework."', '"No thank you."'] },
      { q: 'To ask for permission to go to the restroom, you say:...', c: '"May I go to the restroom, please?"', d: ['"I am leaving the school forever."', '"Where is my house?"', '"Who made the toilet?"'] },
      { q: 'When someone sneezes and says "Alhamdulillah," a Muslim companion says:...', c: '"Yarhamukallah"', d: ['"Congratulations"', '"Happy weekend"', '"Good afternoon"'] }
    ]
  },
  {
    subtopic: 'Descriptive Adjectives for Madrasah Life',
    competency: 'Mengidentifikasi kata sifat (adjectives) untuk mendeskripsikan orang, tempat, dan benda',
    scenarios: [
      { q: 'The madrasah garden has many blossoming roses and clean pathways. The garden is very:...', c: 'beautiful and tidy', d: ['dirty and messy', 'dark and frightening', 'polluted'] },
      { q: 'Ahmad studies hard every night and never misses his homework. Ahmad is a very ... student.', c: 'diligent', d: ['lazy', 'careless', 'disobedient'] },
      { q: 'An elephant is big, but a mouse is very:...', c: 'small', d: ['giant', 'tall', 'heavy'] },
      { q: 'The weather in the mountain village of Puncak is very ... in the morning.', c: 'cool and fresh', d: ['burning and smoky', 'hot and humid', 'arid'] },
      { q: 'Honey tastes ... while lemons taste sour.', c: 'sweet', d: ['salty', 'bitter', 'spicy'] },
      { q: 'A student who always tells the truth and returns lost items is an ... person.', c: 'honest', d: ['arrogant', 'greedy', 'impolite'] },
      { q: 'The opposite of the adjective "easy" is:...', c: 'difficult', d: ['quick', 'funny', 'cheap'] },
      { q: 'The Madrasah Great Mosque is spacious and can hold 1,000 worshippers. "Spacious" means:...', c: 'luas dan lapang', d: ['sempit dan sesak', 'kotor dan kumuh', 'gelap gulita'] },
      { q: 'A kind teacher who smiles and helps struggling students patiently is very:...', c: 'friendly and patient', d: ['cruel and angry', 'selfish', 'lazy'] },
      { q: 'The ice cubes taken from the refrigerator feel very ... to touch.', c: 'cold', d: ['boiling', 'lukewarm', 'scalding'] }
    ]
  },
  {
    subtopic: 'Short Functional Texts and Reading Comprehension',
    competency: 'Menemukan informasi faktual dari teks fungsional pendek dan pengumuman madrasah',
    scenarios: [
      { q: 'Notice on the Madrasah Library door:\n"PLEASE BE QUIET. STUDENTS ARE STUDYING."\nThe notice means students must:...', c: 'keep silent and not make loud noises', d: ['shout loudly with friends', 'bring food and drinks inside', 'play football in the library'] },
      { q: 'Read the short message:\n"Dear Aisha, do not forget our English study club at 03:00 PM today in the computer lab. - Love, Fatimah."\nWhere will the study club take place?', c: 'In the computer lab', d: ['At Aisha\'s house', 'In the canteen', 'In the parking lot'] },
      { q: 'Sign on the madrasah garden lawn:\n"DO NOT STEP ON THE GRASS."\nWhat should students do?', c: 'Walk on the pavement footpath', d: ['Lie down on the grass', 'Pull out all the flowers', 'Throw stones at the trees'] },
      { q: 'Announcement:\n"All students of Grade 4 to 6 must bring a prayer mat (sajadah) for the Dhuha prayer tomorrow."\nWhat item must the students bring?', c: 'A prayer mat (sajadah)', d: ['A soccer ball', 'A dictionary', 'A cooking pan'] },
      { q: 'Sign on the school wall:\n"SAVE WATER. TURN OFF THE TAP AFTER WUDHU."\nThe main purpose of this sign is to:...', c: 'prevent water wastage in the wudhu area', d: ['encourage students to play with water', 'wash clothes in the school sink', 'break the water pipeline'] },
      { q: 'Label on a milk carton:\n"Best before: 20 December 2026."\nThis label tells the consumer about the product\'s:...', c: 'expiration date', d: ['selling price', 'storage location', 'bottle weight'] },
      { q: 'Invitation card:\n"Please come to Ahmad\'s 10th Birthday party on Sunday at 10 AM."\nHow old will Ahmad be?', c: 'Ten years old', d: ['Seven years old', 'Twelve years old', 'Fifteen years old'] },
      { q: 'Notice on the laboratory door:\n"STAFF ONLY. DO NOT ENTER WITHOUT PERMISSION."\nWho is allowed to enter freely?', c: 'Authorized madrasah staff', d: ['Every passing visitor', 'Only kindergarten kids', 'Wild animals'] },
      { q: 'Read the sign:\n"WASH YOUR HANDS WITH SOAP BEFORE EATING."\nThis instruction helps us to:...', c: 'keep our hands free from harmful germs', d: ['make our hands smell bad', 'waste expensive soap', 'make our hands dirty'] },
      { q: 'Message on the bulletin board:\n"Madrasah Science Olympiad will be held on Monday. Registration is free at the teacher\'s office."\nHow much is the registration fee?', c: 'It is free of charge', d: ['Rp 50.000', 'Rp 100.000', 'One textbook'] }
    ]
  }
];

function generateAllMIEnglish() {
  return buildUniqueSubjectBank({
    subjectId: 'bahasa_inggris',
    subjectName: 'Bahasa Inggris MI',
    categoryId: 'umum',
    categoryName: 'Umum MI',
    akgtkCategory: 'Umum',
    educationLevel: 'MI',
    idPrefix: 'mi-eng-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      // 15 topics * 10 scenarios = exactly 150 unique questions!
      const topicIndex = i % miEnglishTopics.length; // 0..14
      const scenarioIndex = Math.floor(i / miEnglishTopics.length); // 0..9
      const topic = miEnglishTopics[topicIndex];
      const sc = topic.scenarios[scenarioIndex];

      return {
        subtopic: topic.subtopic,
        competency: topic.competency,
        question: `[Soal #${num} - ${topic.subtopic}]\n${sc.q}`,
        correctText: sc.c,
        distractors: sc.d,
        explanation: `Jawaban yang paling tepat adalah "${sc.c}". Dalam konteks kompetensi "${topic.competency}", ungkapan ini memenuhi kaidah tata bahasa dan fungsi sosial komunikatif yang santun.`,
        tip: `Perhatikan kata kunci pada pertanyaan dan sesuaikan dengan kaidah dasar pada subtopik ${topic.subtopic}.`
      };
    }
  });
}

module.exports = {
  generateAllMIEnglish
};

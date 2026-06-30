type QuestionBank = Record<string, { q: string; opts: string[]; ans: number; exp: string }[]>

export const QUESTION_BANK: QuestionBank = {
  quant: [
    { q: "A train 120 m long passes a pole in 12 seconds. Find its speed in km/h.", opts: ["40 km/h", "36 km/h", "45 km/h", "50 km/h"], ans: 1, exp: "Speed = 120/12 = 10 m/s = 10 × 18/5 = 36 km/h" },
    { q: "Simple interest on ₹2000 at 5% per annum for 3 years is:", opts: ["₹200", "₹300", "₹350", "₹250"], ans: 1, exp: "SI = (2000 × 5 × 3)/100 = ₹300" },
    { q: "If 20% of a number is 80, then 30% of that number is:", opts: ["100", "120", "150", "80"], ans: 1, exp: "Number = 80/0.20 = 400. 30% of 400 = 120" },
    { q: "A shopkeeper buys an article for ₹500 and sells it at 20% profit. Find the selling price.", opts: ["₹580", "₹600", "₹550", "₹620"], ans: 1, exp: "SP = 500 × 1.20 = ₹600" },
    { q: "The average of 5 numbers is 18. If one number is removed, the average becomes 16. The removed number is:", opts: ["24", "26", "28", "22"], ans: 1, exp: "Sum of 5 = 90, Sum of 4 = 64, Removed = 90 - 64 = 26" },
    { q: "A can complete work in 12 days and B in 18 days. How many days will they take together?", opts: ["6.8 days", "7.2 days", "8 days", "9 days"], ans: 1, exp: "Work/day = 1/12 + 1/18 = 5/36. Days = 36/5 = 7.2" },
    { q: "The ratio of two numbers is 3:4 and their sum is 280. Find the smaller number.", opts: ["110", "120", "100", "140"], ans: 1, exp: "Smaller = (3/7) × 280 = 120" },
    { q: "Compound interest on ₹1000 at 10% p.a. for 2 years is:", opts: ["₹200", "₹210", "₹220", "₹215"], ans: 1, exp: "A = 1000(1.1)² = 1210. CI = 1210 - 1000 = ₹210" },
    { q: "Two pipes A and B can fill a tank in 10 and 15 hours respectively. Together they fill in:", opts: ["5 hours", "6 hours", "4 hours", "7 hours"], ans: 1, exp: "Combined rate = 1/10 + 1/15 = 1/6. Time = 6 hours" },
    { q: "A person sells an article at 25% profit. If cost price is ₹800, what is selling price?", opts: ["₹1000", "₹900", "₹950", "₹1100"], ans: 0, exp: "SP = 800 × 1.25 = ₹1000" },
    { q: "15% of 280 is:", opts: ["40", "42", "44", "38"], ans: 1, exp: "15% of 280 = 0.15 × 280 = 42" },
    { q: "Speed of a boat in still water is 15 km/h, stream speed is 3 km/h. Time to cover 36 km upstream?", opts: ["3 hours", "4 hours", "3.5 hours", "2.5 hours"], ans: 0, exp: "Upstream speed = 15 - 3 = 12 km/h. Time = 36/12 = 3 hours" },
    { q: "A number when divided by 7 leaves remainder 3. What is the remainder when 3 times the number is divided by 7?", opts: ["2", "1", "3", "4"], ans: 0, exp: "3 × 3 = 9. 9 ÷ 7 leaves remainder 2" },
    { q: "Price of an article increases by 20% then decreases by 20%. Net change is:", opts: ["No change", "4% decrease", "2% decrease", "4% increase"], ans: 1, exp: "Net factor = 1.2 × 0.8 = 0.96. Net loss = 4%" },
    { q: "A trader marks goods 30% above cost price and allows 10% discount. His profit % is:", opts: ["15%", "17%", "20%", "22%"], ans: 1, exp: "SP = 1.3CP × 0.9 = 1.17CP. Profit = 17%" },
  ],
  reasoning: [
    { q: "Find the odd one out: 17, 27, 37, 47", opts: ["17", "27", "37", "47"], ans: 1, exp: "27 = 3³ is not prime. 17, 37, 47 are all prime numbers." },
    { q: "Number series: 2, 6, 12, 20, 30, ?", opts: ["40", "42", "44", "45"], ans: 1, exp: "Differences: 4, 6, 8, 10, 12. Next = 30 + 12 = 42" },
    { q: "Analogy — Doctor : Hospital :: Teacher : ?", opts: ["Book", "School", "Study", "Lecture"], ans: 1, exp: "A doctor works in a hospital; a teacher works in a school." },
    { q: "Number series: 1, 4, 9, 16, 25, ?", opts: ["36", "32", "30", "34"], ans: 0, exp: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36" },
    { q: "In a class, Ravi is 7th from the top and 28th from the bottom. How many students are there?", opts: ["34", "35", "33", "36"], ans: 0, exp: "Total = 7 + 28 - 1 = 34" },
    { q: "Pointing to a photograph, a man says 'She is the daughter of my father's only son.' Who is she?", opts: ["Daughter", "Sister", "Niece", "Wife"], ans: 0, exp: "Father's only son = himself. So 'daughter of himself' = his own daughter." },
    { q: "Series: ACE, BDF, CEG, ?", opts: ["DFH", "EGH", "DGH", "EFH"], ans: 0, exp: "Each group shifts by 1 → DFH" },
    { q: "A is taller than B. C is shorter than D. B is taller than C. Who is the shortest?", opts: ["A", "B", "C", "D"], ans: 2, exp: "Order: A > B > C, D > C. C is the shortest." },
    { q: "A walks 3 km North, then turns Right and walks 4 km. How far from start?", opts: ["5 km", "7 km", "4 km", "3 km"], ans: 0, exp: "√(3² + 4²) = 5 km" },
    { q: "In a code, MANGO is written as LZMFN. How is GUAVA written?", opts: ["FTUZU", "FTUZV", "FTUZA", "GUVZA"], ans: 0, exp: "Each letter shifted back by 1 = FTUZU" },
    { q: "Series: 3, 8, 15, 24, 35, ?", opts: ["46", "48", "50", "52"], ans: 1, exp: "Differences: 5, 7, 9, 11, 13. Next = 35 + 13 = 48" },
    { q: "If 'FRIEND' is coded as 'HUMJTK', how is 'CANDLE' coded?", opts: ["ECPFNG", "EBNFME", "DCNEME", "ECHNFG"], ans: 0, exp: "Each letter shifted forward by 2 = ECPFNG" },
  ],
  english: [
    { q: "Choose the correctly spelled word:", opts: ["Accomodation", "Accommodation", "Acommodation", "Accommodasion"], ans: 1, exp: "Accommodation has double 'c' and double 'm'." },
    { q: "Antonym of 'BENEVOLENT':", opts: ["Kind", "Malevolent", "Generous", "Charitable"], ans: 1, exp: "BENEVOLENT means kind. Antonym = MALEVOLENT." },
    { q: "Fill in: He _____ working here since 2015.", opts: ["is", "was", "has been", "have been"], ans: 2, exp: "'Since' → present perfect: 'has been'." },
    { q: "Synonym of 'LUCID':", opts: ["Confused", "Clear", "Vague", "Dark"], ans: 1, exp: "LUCID = clear/easily understood." },
    { q: "'Hit the nail on the head' means:", opts: ["Work very hard", "Say exactly the right thing", "Hammer something", "Make a mistake"], ans: 1, exp: "Means to describe exactly what is causing a situation." },
    { q: "Error: 'She don't know the answer.'", opts: ["She", "don't", "know", "the answer"], ans: 1, exp: "With 'She', use 'doesn't'." },
    { q: "One word for 'Fear of water':", opts: ["Claustrophobia", "Acrophobia", "Hydrophobia", "Xenophobia"], ans: 2, exp: "Hydrophobia = fear of water." },
    { q: "Passive voice of 'He wrote the letter.':", opts: ["The letter wrote by him", "The letter was written by him", "The letter is written by him", "Letter has been written by him"], ans: 1, exp: "Past simple passive: 'The letter was written by him.'" },
    { q: "Correct sentence:", opts: ["Neither of them are ready", "Neither of them is ready", "Neither of them was ready", "Both a and b"], ans: 1, exp: "'Neither' takes a singular verb." },
    { q: "'Once in a blue moon' means:", opts: ["Very rarely", "During a blue sky", "Every month", "During a full moon"], ans: 0, exp: "Means very rarely." },
    { q: "Antonym of 'VERBOSE':", opts: ["Talkative", "Concise", "Loquacious", "Garrulous"], ans: 1, exp: "VERBOSE = using too many words. Antonym = CONCISE." },
    { q: "Fill in: The committee _____ submitted its report.", opts: ["have", "has", "had already", "are"], ans: 1, exp: "'Committee' is singular. Use 'has'." },
  ],
  gk: [
    { q: "RBI Governor who served longest recently (2016-2024)?", opts: ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "YV Reddy"], ans: 2, exp: "Shaktikanta Das served Dec 2018 – Dec 2024." },
    { q: "India's HDI rank in 2023:", opts: ["132", "135", "130", "128"], ans: 0, exp: "India ranked 132 in HDI 2023." },
    { q: "G20 Summit 2023 hosted by India in:", opts: ["Mumbai", "Chennai", "New Delhi", "Bengaluru"], ans: 2, exp: "G20 2023 in New Delhi." },
    { q: "National Sports Day in India:", opts: ["29 August", "15 August", "5 September", "2 October"], ans: 0, exp: "29 August = Dhyan Chand's birthday." },
    { q: "Who wrote 'Discovery of India'?", opts: ["Mahatma Gandhi", "Subhash Chandra Bose", "Jawaharlal Nehru", "Rabindranath Tagore"], ans: 2, exp: "Jawaharlal Nehru (1944)." },
    { q: "Bank with most branches in India?", opts: ["HDFC Bank", "ICICI Bank", "State Bank of India", "Bank of Baroda"], ans: 2, exp: "SBI has 22,000+ branches." },
    { q: "Operation Maitri (2015) was conducted in:", opts: ["Nepal", "Sri Lanka", "Maldives", "Myanmar"], ans: 0, exp: "India's earthquake relief in Nepal 2015." },
    { q: "51st Chief Justice of India (2024)?", opts: ["DY Chandrachud", "Sanjiv Khanna", "UU Lalit", "NV Ramana"], ans: 1, exp: "Justice Sanjiv Khanna, Nov 2024." },
    { q: "Cricketer with 100 international centuries?", opts: ["Virat Kohli", "Sachin Tendulkar", "Sourav Ganguly", "Rahul Dravid"], ans: 1, exp: "Sachin Tendulkar." },
    { q: "India's first indigenous COVID vaccine:", opts: ["Covishield", "Covaxin", "Sputnik V", "ZyCoV-D"], ans: 1, exp: "Covaxin by Bharat Biotech." },
  ],
  banking: [
    { q: "Full form of CIBIL:", opts: ["Credit Information Bureau India Limited", "Central India Banking Institute Limited", "Credit Institute Bureau of India Limited", "Central Information Bureau of India Limited"], ans: 0, exp: "CIBIL = Credit Information Bureau (India) Limited." },
    { q: "Basel III norms relate to:", opts: ["Insurance", "Banking", "Capital Markets", "Real Estate"], ans: 1, exp: "Basel III is an international banking regulatory framework." },
    { q: "CRR (Cash Reserve Ratio) is:", opts: ["Interest rate set by RBI", "% of deposits banks must keep with RBI", "Rate banks lend to each other", "Minimum SLR requirement"], ans: 1, exp: "CRR = % of deposits kept as cash with RBI." },
    { q: "SARFAESI Act 2002 deals with:", opts: ["Foreign exchange", "Recovery of bad loans / NPA", "Banking regulations", "Insurance claims"], ans: 1, exp: "Allows banks to recover NPAs without court." },
    { q: "SWIFT code is used for:", opts: ["ATM transactions", "International wire transfers", "Domestic NEFT transfers", "UPI payments"], ans: 1, exp: "SWIFT facilitates international transfers." },
    { q: "Repo Rate is the rate at which:", opts: ["Banks lend to public", "RBI lends to commercial banks", "Banks lend to each other overnight", "RBI borrows from banks"], ans: 1, exp: "Repo Rate = rate at which RBI lends to commercial banks." },
  ],
  ssc: [
    { q: "Preamble to Indian Constitution adopted on:", opts: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1949"], ans: 1, exp: "Constitution adopted 26 November 1949." },
    { q: "Attorney General of India is appointed by:", opts: ["Prime Minister", "Chief Justice", "President", "Parliament"], ans: 2, exp: "Appointed by the President under Article 76." },
    { q: "Article 21 deals with:", opts: ["Right to Education", "Right to Life and Personal Liberty", "Right to Equality", "Freedom of Speech"], ans: 1, exp: "Article 21: Right to Life and Personal Liberty." },
    { q: "Fundamental Duties added by which Amendment?", opts: ["42nd", "44th", "52nd", "86th"], ans: 0, exp: "42nd Amendment Act 1976." },
    { q: "Number of subjects in Union List:", opts: ["97", "66", "47", "52"], ans: 0, exp: "Union List originally had 97 subjects." },
    { q: "Mount Everest is in:", opts: ["India", "China", "Nepal", "Bhutan"], ans: 2, exp: "Mount Everest is in Nepal." },
  ],
  defence: [
    { q: "NDA is located at:", opts: ["Dehradun", "Khadakwasla, Pune", "Chennai", "New Delhi"], ans: 1, exp: "NDA is at Khadakwasla near Pune." },
    { q: "INS Vikrant is India's:", opts: ["First nuclear submarine", "First indigenous aircraft carrier", "Most powerful destroyer", "Largest frigate"], ans: 1, exp: "INS Vikrant commissioned 2022, India's first domestic aircraft carrier." },
    { q: "Param Vir Chakra is awarded for:", opts: ["Gallantry facing the enemy", "Gallantry peacetime", "Meritorious service", "Police bravery"], ans: 0, exp: "Param Vir Chakra = India's highest wartime military decoration." },
    { q: "Operation Vijay (1961) was in:", opts: ["East Pakistan", "Sri Lanka", "Goa", "Nepal"], ans: 2, exp: "Operation Vijay liberated Goa from Portuguese rule." },
    { q: "AFCAT is conducted by:", opts: ["UPSC", "SSC", "Indian Air Force", "Ministry of Defence"], ans: 2, exp: "AFCAT is conducted by the Indian Air Force." },
    { q: "Indian Army's motto:", opts: ["Jai Hind", "Service Before Self", "Touch the Sky with Glory", "Sarvatra Izzat-o-Iqbal"], ans: 3, exp: "Indian Army motto: 'Sarvatra Izzat-o-Iqbal'." },
  ],
  mba: [
    { q: "Break-even point is when:", opts: ["Revenue > costs", "Total Revenue = Total Costs", "Revenue < costs", "Profit is maximum"], ans: 1, exp: "Break-even: Total Revenue = Total Costs." },
    { q: "EBITDA stands for:", opts: ["Earnings Before Interest Taxes Depreciation and Amortization", "Estimated Budget in Tax Depreciation Analysis", "Earnings Beyond Interest Tax Discount Amount", "Effective Business Income Tax Depreciation Analysis"], ans: 0, exp: "EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization." },
    { q: "Porter's Five Forces analyzes:", opts: ["Employee performance", "Industry competition & attractiveness", "Company financial health", "Market pricing"], ans: 1, exp: "Porter's Five Forces analyzes industry competitive dynamics." },
    { q: "BCG Matrix stands for:", opts: ["Business Consulting Group", "Boston Consulting Group", "Banking Commerce Growth", "Board of Corporate Growth"], ans: 1, exp: "BCG = Boston Consulting Group." },
    { q: "ROI stands for:", opts: ["Rate of Investment", "Return on Investment", "Risk of Investment", "Revenue over Income"], ans: 1, exp: "ROI = (Net Profit / Cost) × 100." },
    { q: "NPV in finance stands for:", opts: ["Net Present Value", "New Product Value", "Nominal Price Valuation", "Net Profit Volume"], ans: 0, exp: "NPV = Net Present Value." },
  ],
  law: [
    { q: "CPC stands for:", opts: ["Criminal Procedure Code", "Civil Procedure Code", "Constitutional Procedure Code", "Central Police Command"], ans: 1, exp: "CPC = Code of Civil Procedure (1908)." },
    { q: "'Audi alteram partem' means:", opts: ["Hear the other side", "Power of judicial review", "Public interest litigation", "Right of appeal"], ans: 0, exp: "'Hear the other side'." },
    { q: "PIL can be filed in:", opts: ["District Court only", "High Court or Supreme Court", "Civil Court only", "Any court"], ans: 1, exp: "PIL in High Court or Supreme Court." },
    { q: "Writ of Habeas Corpus is issued to:", opts: ["Enforce a fundamental right", "Produce detained person before court", "Prohibit inferior court", "Transfer a case"], ans: 1, exp: "Habeas Corpus = produce the detainee before court." },
    { q: "CLAT is conducted by:", opts: ["Bar Council of India", "UPSC", "Consortium of National Law Universities", "Law Commission"], ans: 2, exp: "CLAT by Consortium of NLUs." },
    { q: "Article for SC enforcement of Fundamental Rights:", opts: ["Article 19", "Article 21", "Article 32", "Article 226"], ans: 2, exp: "Article 32: right to move Supreme Court directly." },
  ],
  mca: [
    { q: "HTTP stands for:", opts: ["Hyper Text Transfer Protocol", "High Tech Transfer Protocol", "Hyper Text Transmission Protocol", "High Transfer Text Protocol"], ans: 0, exp: "HTTP = HyperText Transfer Protocol." },
    { q: "Binary of decimal 10:", opts: ["1010", "1001", "1100", "0110"], ans: 0, exp: "10 = 8+2 = 1010" },
    { q: "RAM stands for:", opts: ["Read Access Memory", "Random Access Memory", "Read After Memory", "Rapid Access Module"], ans: 1, exp: "RAM = Random Access Memory." },
    { q: "Which is NOT a programming language?", opts: ["Python", "HTML", "Java", "C++"], ans: 1, exp: "HTML is a markup language." },
    { q: "SQL stands for:", opts: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "System Query Language"], ans: 0, exp: "SQL = Structured Query Language." },
    { q: "CPU stands for:", opts: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Core Processing Unit"], ans: 0, exp: "CPU = Central Processing Unit." },
  ],
  cuet: [
    { q: "CUET is conducted by:", opts: ["UGC", "NTA", "AICTE", "Ministry of Education"], ans: 1, exp: "CUET by NTA (National Testing Agency)." },
    { q: "CUET UG is for admission to:", opts: ["IITs", "Central Universities & participating institutions", "State Universities only", "All universities"], ans: 1, exp: "Mandatory for all 45 Central Universities." },
    { q: "Negative marking in CUET UG per wrong answer:", opts: ["-0.5 marks", "-1 mark", "No negative marking", "-0.25 marks"], ans: 1, exp: "Correct = +5, Wrong = -1." },
    { q: "CUET replaced:", opts: ["CLAT", "Individual university entrance tests", "JEE Main", "GATE"], ans: 1, exp: "Replaced individual university entrance tests." },
    { q: "Questions to ATTEMPT per CUET section (out of 50):", opts: ["40", "45", "35", "50"], ans: 0, exp: "50 questions, attempt 40." },
    { q: "CUET score validity:", opts: ["1 year", "2 years", "3 years", "Lifetime"], ans: 0, exp: "Valid only for the current academic year." },
  ],
}

export const SUBJECT_LABELS: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Logical Reasoning',
  english: 'English Language',
  gk: 'General Knowledge',
  banking: 'Banking & Finance',
  ssc: 'General Studies (SSC)',
  defence: 'Defence Knowledge',
  mba: 'Business & Management',
  law: 'Legal Aptitude',
  mca: 'Computer Science / IT',
  cuet: 'CUET / Domain Knowledge',
}

export const EXAM_SPECIFIC_MAP: Record<string, string> = {
  Banking: 'banking',
  SSC: 'ssc',
  Defence: 'defence',
  MBA: 'mba',
  Law: 'law',
  MCA: 'mca',
  CUET: 'cuet',
  IT: 'mca',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

export function buildQuestionSet(targetExam: string) {
  const examKey = EXAM_SPECIFIC_MAP[targetExam] || 'banking'
  const examPool = QUESTION_BANK[examKey] || QUESTION_BANK.banking
  const qs = [
    ...pickRandom(QUESTION_BANK.quant, 5).map(q => ({ ...q, subject: 'quant' })),
    ...pickRandom(QUESTION_BANK.reasoning, 3).map(q => ({ ...q, subject: 'reasoning' })),
    ...pickRandom(QUESTION_BANK.english, 3).map(q => ({ ...q, subject: 'english' })),
    ...pickRandom(QUESTION_BANK.gk, 2).map(q => ({ ...q, subject: 'gk' })),
    ...pickRandom(examPool, 2).map(q => ({ ...q, subject: examKey })),
  ]
  return shuffle(qs)
}

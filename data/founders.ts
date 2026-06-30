import type { Founder } from '@/types'

const founders: Founder[] = [
  {
    id: 'tanmay-shah',
    name: 'Mr. Tanmay Shah',
    designation: 'Founder & CMD',
    badge: 'Founder & CMD',
    badgeColor: 'blue',
    image: '/images/tanmay-shah.jpg',
    qualification: 'MBA (Sales & Marketing) | Ex-Standard Chartered Bank | 25+ Years Experience',
    bio: 'The visionary founder of ACS Academy, Mr. Tanmay Shah has dedicated over 25 years to mentoring aspirants across competitive and entrance examinations. Before establishing ACS in 2010, he held key leadership roles at Standard Chartered Bank, Kotak Mahindra Bank and Parshwanath Bank. Under his guidance, ACS Academy has mentored over 1,80,000+ students and earned the prestigious India Education Award and the Best Team Manager – PAN India recognition.',
    quote: 'Success is not merely about clearing an examination; it is about developing the right mindset, discipline, and determination to achieve excellence in every sphere of life.',
    stats: [
      { value: '25+', label: 'Years Experience' },
      { value: '1.8L+', label: 'Students Mentored' },
      { value: '15+', label: 'Awards Won' },
    ],
    social: { linkedin: '#', youtube: '#', instagram: '#' },
  },
  {
    id: 'sushmita-shah',
    name: 'Mrs. Sushmita Shah',
    designation: 'Managing Director',
    badge: 'Managing Director',
    badgeColor: 'green',
    image: '/images/sushmita-shah.jpg',
    qualification: 'Commerce Graduate | Ex-Bharti Educational Institute Branch Head | 20+ Years Leadership',
    bio: "The dynamic force behind ACS Academy's brand, marketing and operations, Mrs. Sushmita Shah brings 20+ years of leadership across education, banking and insurance. She spearheads the academy's digital presence on Instagram, Facebook, YouTube and Google. Earlier honoured as Best Branch Head at Bharti Educational Institute and Best Team Leader – PAN India at Standard Chartered Bank and Reliance Capital, she continues to inspire every student and team member at ACS.",
    quote: 'Leadership is not about managing people; it is about inspiring them to believe in their potential and empowering them to achieve excellence.',
    stats: [
      { value: '20+', label: 'Years Experience' },
      { value: '3', label: 'Sectors Mastered' },
      { value: 'PAN India', label: 'Award Winner' },
    ],
    social: { linkedin: '#', youtube: '#', instagram: '#' },
  },
]

export default founders

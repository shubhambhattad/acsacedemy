export interface Course {
  id: string
  name: string
  category: 'banking' | 'ssc' | 'defence' | 'mba' | 'law' | 'mca' | 'cuet'
  duration: string
  fee: string
  badge: string
  icon: string
  description: string
}

export interface Faculty {
  id: string
  name: string
  role: string
  qualification: string
  image: string
  experience: string
  selections: string
  rating: string
  subjects: string[]
  exams: string[]
  quote: string
}

export interface Founder {
  id: string
  name: string
  designation: string
  badge: string
  badgeColor: string
  image: string
  qualification: string
  bio: string
  quote: string
  stats: { value: string; label: string }[]
  social: { linkedin: string; youtube: string; instagram: string }
}

export interface TimelineItem {
  year: string
  side: 'left' | 'right'
  icon: string
  color: string
  milestone: string
  title: string
  description: string
  tags: string[]
  isPresent: boolean
  teamImage?: string
}

export interface BatchTiming {
  id: number
  name: string
  time: string
  icon: string
  color: string
  seats: string
}

export interface Testimonial {
  id: string
  name: string
  exam: string
  batch: string
  rating: number
  text: string
  avatar: string
}

export interface Notification {
  id: string
  title: string
  category: string
  date: string
  badge: string
  badgeColor: string
  link: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  image: string
  author: string
  publishedAt: string
  readTime: string
}

export interface FAQ {
  q: string
  a: string
}

export interface AssessmentQuestion {
  id: number
  subject: string
  question: string
  options: string[]
  correct: number
}

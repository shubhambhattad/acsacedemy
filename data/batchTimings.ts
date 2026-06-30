import type { BatchTiming } from '@/types'

const batchTimings: BatchTiming[] = [
  { id: 1, name: 'Morning Batch', time: '8:00 AM – 10:30 AM', icon: 'fa-sun', color: 'blue', seats: 'Limited Seats' },
  { id: 2, name: 'Forenoon Batch', time: '10:30 AM – 1:00 PM', icon: 'fa-cloud-sun', color: 'green', seats: 'Available' },
  { id: 3, name: 'Afternoon Batch', time: '1:00 PM – 3:30 PM', icon: 'fa-cloud', color: 'blue', seats: 'Available' },
  { id: 4, name: 'Evening Batch', time: '4:00 PM – 6:30 PM', icon: 'fa-cloud-moon', color: 'green', seats: 'Most Popular' },
  { id: 5, name: 'Late Evening Batch', time: '6:30 PM – 9:00 PM', icon: 'fa-moon', color: 'blue', seats: 'For Working Professionals' },
  { id: 6, name: 'Sunday Special Batch', time: '9:00 AM – 1:00 PM', icon: 'fa-calendar-star', color: 'green', seats: 'Weekend Only' },
]

export default batchTimings

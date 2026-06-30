import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source)

export async function getCourses() {
  return sanityClient.fetch(`*[_type == "course"] | order(order asc)`)
}

export async function getFaculty() {
  return sanityClient.fetch(`*[_type == "faculty"] | order(order asc)`)
}

export async function getFounders() {
  return sanityClient.fetch(`*[_type == "founder"] | order(order asc)`)
}

export async function getTimeline() {
  return sanityClient.fetch(`*[_type == "timeline"] | order(year asc)`)
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`)
}

export async function getNotifications() {
  return sanityClient.fetch(`*[_type == "notification"] | order(date desc)`)
}

export async function getBlogPosts() {
  return sanityClient.fetch(`*[_type == "blogPost"] | order(publishedAt desc)[0...6]`)
}

export async function getFAQ() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc)`)
}

export async function getBatchTimings() {
  return sanityClient.fetch(`*[_type == "batchTiming"] | order(order asc)`)
}

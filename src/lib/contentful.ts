import { createClient } from 'contentful'
import type { Project, Blog, Research, ContentfulResponse } from '@/types/contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries<Project['fields']>({
      content_type: 'project',
      order: ['-sys.createdAt'],
      include: 2,
    })

    return response.items as Project[]
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries<Project['fields']>({
      content_type: 'project',
      'fields.featured': true,
      order: ['-sys.createdAt'],
      limit: 6,
      include: 2,
    })

    return response.items as Project[]
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await client.getEntries<Project['fields']>({
      content_type: 'project',
      'fields.slug': slug,
      include: 2,
    })

    return response.items[0] as Project || null
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await client.getEntries<Blog['fields']>({
      content_type: 'blog',
      order: ['-sys.createdAt'],
      include: 2,
    })

    return response.items as Blog[]
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  try {
    const response = await client.getEntries<Blog['fields']>({
      content_type: 'blog',
      order: ['-sys.createdAt'],
      limit: 3,
      include: 2,
    })

    return response.items as Blog[]
  } catch (error) {
    console.error('Error fetching featured blogs:', error)
    return []
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await client.getEntries<Blog['fields']>({
      content_type: 'blog',
      'fields.slug': slug,
      include: 2,
    })

    return response.items[0] as Blog || null
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    return null
  }
}

export async function getResearch(): Promise<Research[]> {
  try {
    const response = await client.getEntries<Research['fields']>({
      content_type: 'research',
      order: ['-sys.createdAt'],
      include: 2,
    })

    return response.items as Research[]
  } catch (error) {
    console.error('Error fetching research:', error)
    return []
  }
}

export async function getResearchBySlug(slug: string): Promise<Research | null> {
  try {
    const response = await client.getEntries<Research['fields']>({
      content_type: 'research',
      'fields.slug': slug,
      include: 2,
    })

    return response.items[0] as Research || null
  } catch (error) {
    console.error('Error fetching research by slug:', error)
    return null
  }
}

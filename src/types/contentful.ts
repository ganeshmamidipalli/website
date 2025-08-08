export interface Asset {
  sys: {
    id: string
    type: string
  }
  fields: {
    title: string
    description?: string
    file: {
      url: string
      contentType: string
      fileName: string
      details: {
        size: number
        image?: {
          width: number
          height: number
        }
      }
    }
  }
}

export interface Project {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    description: string
    content: string
    techStack: string[]
    githubUrl?: string
    demoUrl?: string
    featuredImage?: Asset
    featured: boolean
    publishedAt: string
  }
}

export interface Blog {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    content: string
    featuredImage?: Asset
    author: string
    tags: string[]
    publishedAt: string
  }
}

export interface Research {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    abstract: string
    content: string
    authors: string[]
    publicationUrl?: string
    journal?: string
    publishedAt: string
    featuredImage?: Asset
  }
}

export interface ContentfulResponse<T> {
  sys: {
    type: string
  }
  total: number
  skip: number
  limit: number
  items: T[]
  includes?: {
    Asset?: Asset[]
  }
}

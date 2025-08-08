"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ExternalLink, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getResearch } from '@/lib/contentful'
import { useEffect, useState } from 'react'
import { formatDate } from '@/lib/utils'
import type { Research } from '@/types/contentful'

export function Research() {
  const [research, setResearch] = useState<Research[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResearch() {
      try {
        const researchData = await getResearch()
        setResearch(researchData)
      } catch (error) {
        console.error('Error fetching research:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResearch()
  }, [])

  if (loading) {
    return (
      <section id="research" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research & Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic papers, research contributions, and publications in AI and machine learning.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted h-64 rounded-lg mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="research" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic papers, research contributions, and publications in AI and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {research.map((paper, index) => (
            <motion.div
              key={paper.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group">
                {paper.fields.featuredImage && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={`https:${paper.fields.featuredImage.fields.file.url}`}
                      alt={paper.fields.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(paper.fields.publishedAt)}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {paper.fields.title}
                  </CardTitle>
                  {paper.fields.journal && (
                    <p className="text-sm text-muted-foreground font-medium">
                      {paper.fields.journal}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-4">
                    {paper.fields.abstract}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="line-clamp-1">
                      {paper.fields.authors.join(', ')}
                    </span>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  {paper.fields.publicationUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={paper.fields.publicationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Paper
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {research.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No research papers available at the moment.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

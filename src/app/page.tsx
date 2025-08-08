import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Blogs } from '@/components/sections/blogs'
import { Research } from '@/components/sections/research'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Projects />
      <Blogs />
      <Research />
      <About />
      <Contact />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { projects, posts } from '@/lib/data'
import ProjectCard from '@/components/shared/project-card'
import BlogPostCard from '@/components/shared/blog-post-card'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero')

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const recentPosts = posts.slice(0, 2)

  return (
    <div className="flex flex-col">
      <section className="container grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-medium text-primary">
              John Doe
            </span>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              Welcome to My Portfolio
            </h1>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            I design and build beautiful, functional, and user-centric digital
            experiences. Explore my work and thoughts on technology, design, and
            creativity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <span className="text-sm text-muted-foreground">
              Connect with me:
            </span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="#"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="#"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-96">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </section>

      <section id="projects" className="w-full bg-accent/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Selected Projects
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Here are a few projects I&apos;ve worked on recently, showcasing my
              skills in design and development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="blog" className="w-full py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Recent Posts
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              I write about web development, design systems, and tech industry
              trends.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                Read More Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

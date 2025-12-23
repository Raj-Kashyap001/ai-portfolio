import ProjectCard from '@/components/shared/project-card'
import { projects } from '@/lib/data'

export const metadata = {
  title: 'Projects | Digital Oasis',
  description: 'A collection of my projects and work.',
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          My Work
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Explore a selection of my projects, ranging from web applications to
          mobile experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

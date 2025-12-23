import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'

import type { Project } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === project.image)

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        {image && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 min-h-[3.75rem]">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

import type { Post } from '@/lib/data'
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

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.image)
  const postSummary =
    post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '')

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:shadow-lg">
        <CardHeader>
          {image && (
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          <CardTitle className="group-hover:text-primary">{post.title}</CardTitle>
          <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
          </div>
          <CardDescription className="line-clamp-3 pt-2 min-h-[3.75rem]">
            {postSummary}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm font-medium text-primary">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

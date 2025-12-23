import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Tag } from 'lucide-react'

import { posts } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return {}
  }
  return {
    title: `${post.title} | Digital Oasis`,
    description: post.content.substring(0, 150),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const image = PlaceHolderImages.find((img) => img.id === post.image)

  return (
    <article className="container max-w-4xl py-12 md:py-16">
      <header className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>
      {image && (
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl md:h-96">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            sizes="100vw"
            data-ai-hint={image.imageHint}
            priority
          />
        </div>
      )}
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary hover:prose-a:underline">
        {post.content.split('\\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

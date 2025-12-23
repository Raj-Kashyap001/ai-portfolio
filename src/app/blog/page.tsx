import BlogPostCard from '@/components/shared/blog-post-card'
import { posts } from '@/lib/data'

export const metadata = {
  title: 'Blog | Digital Oasis',
  description: 'Thoughts and articles on technology, design, and creativity.',
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          From the Blog
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Welcome to my corner of the internet. Here are my thoughts on
          technology, design, and everything in between.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Chat",
    slug: "future-of-ai-chat",
    description: "Stay up-to-date with the latest developments in AI chat technology. Explore exciting new features and improvements!",
    date: "June 14, 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Understanding Natural Language Processing",
    slug: "understanding-nlp",
    description: "Dive deep into how AI understands and processes human language. Learn about the technology behind our chat system.",
    date: "June 12, 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "AI Chat Best Practices Guide",
    slug: "ai-chat-guide",
    description: "Master the art of AI conversation with our comprehensive guide. Learn tips, tricks, and best practices.",
    date: "June 10, 2024",
    image: "/placeholder.svg?height=200&width=300",
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Perchance AI Blog</h1>
        <p className="text-lg text-muted-foreground">
          Explore the latest updates, guides, and insights about AI chat technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="relative">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 transform rotate-45 translate-x-8 -translate-y-8" />
                
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-4">
                {/* Date */}
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


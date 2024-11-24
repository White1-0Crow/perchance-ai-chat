"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "5 Reasons Why Perchance AI Chat is Better Than Other AI Platforms",
    description: "A detailed comparison of how Perchance AI Chat excels in customization, privacy, and accessibility.",
    date: "May 15, 2024",
    readTime: "5 min read",
    slug: "intro-to-ai-chatbots",
  },
  {
    title: "How to Create a Perfect AI Character for Storytelling",
    description: "Step-by-step guidance on using Perchance AI Chat to design characters that enhance your creative writing.",
    date: "June 2, 2024",
    readTime: "7 min read",
    slug: "future-of-conversational-ai",
  },
  {
    title: "The Future of Privacy in AI Chat Platforms",
    description: "An in-depth look at why local storage and user control are the next big trends in AI development.",
    date: "June 20, 2024",
    readTime: "10 min read",
    slug: "ai-transforming-customer-service",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Latest from Our Blog
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Stay updated with the latest trends and insights in AI and chatbot technology
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.date} • {post.readTime}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </section>
  )
}


"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "The Future of AI in Customer Service",
    description: "Explore how AI is revolutionizing customer support and engagement.",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  {
    title: "5 Ways to Optimize Your AI Chatbot",
    description: "Learn the best practices to enhance your AI chatbot's performance.",
    date: "June 2, 2023",
    readTime: "7 min read",
  },
  {
    title: "Understanding Natural Language Processing",
    description: "A deep dive into the technology behind modern AI chatbots.",
    date: "June 20, 2023",
    readTime: "10 min read",
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
                <Button variant="outline" className="w-full">Read More</Button>
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


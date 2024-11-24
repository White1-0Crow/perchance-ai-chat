import Link from 'next/link'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const blogPosts = [
 {
   id: 1,
   title: "Introduction to AI Chatbots",
   slug: "intro-to-ai-chatbots",
   description: "Explore the basics of AI chatbots and their growing impact on various industries.",
   date: "June 1, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 2,
   title: "The Future of Conversational AI",
   slug: "future-of-conversational-ai",
   description: "Discover what the future holds for conversational AI and its potential applications.",
   date: "June 15, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 3,
   title: "How AI is Transforming Customer Service",
   slug: "ai-transforming-customer-service",
   description: "Learn about the revolutionary impact of AI on customer service and support.",
   date: "July 1, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 4,
   title: "The Ethics of AI in Daily Life",
   slug: "ethics-of-ai-in-daily-life",
   description: "Explore the ethical considerations surrounding AI as it becomes more integrated into our daily lives.",
   date: "July 15, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 5,
   title: "Getting Started with Perchance AI Chat",
   slug: "getting-started-with-perchance-ai",
   description: "A comprehensive guide to getting started with Perchance AI Chat and making the most of its features.",
   date: "August 1, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 6,
   title: "AI's Growing Role in Healthcare",
   slug: "ai-in-healthcare",
   description: "Explore how AI is transforming the healthcare industry, from diagnosis to treatment planning.",
   date: "August 20, 2023",
   image: "/placeholder.svg?height=200&width=300",
 },
  {
    id: 7,
    title: "AI and the Future of Work",
    slug: "ai-future-of-work",
    description: "Explore how AI is reshaping the job market and what skills will be in demand.",
    date: "September 5, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
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


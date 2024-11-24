import Link from 'next/link'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const blogPosts = [
 {
   id: 1,
   title: "5 Reasons Why Perchance AI Chat is Better Than Other AI Platforms",
   slug: "intro-to-ai-chatbots",
   description: "A detailed comparison of how Perchance AI Chat excels in customization, privacy, and accessibility.",
   date: "June 1, 2024",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 2,
   title: "How to Create a Perfect AI Character for Storytelling",
   slug: "future-of-conversational-ai",
   description: "Step-by-step guidance on using Perchance AI Chat to design characters that enhance your creative writing.",
   date: "June 15, 2024",
   image: "/placeholder.svg?height=200&width=300",
 },
 {
   id: 3,
   title: "The Future of Privacy in AI Chat Platforms",
   slug: "ai-transforming-customer-service",
   description: "An in-depth look at why local storage and user control are the next big trends in AI development.",
   date: "July 1, 2024",
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


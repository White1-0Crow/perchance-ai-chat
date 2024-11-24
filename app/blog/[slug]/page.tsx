import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// This type represents the structure of our blog post data
type BlogPost = {
 title: string;
 content: string;
 date: string;
}

// This type represents our collection of blog posts
type BlogPosts = {
 [key: string]: BlogPost;
}

const blogPosts: BlogPosts = {
 "intro-to-ai-chatbots": {
   title: "5 Reasons Why Perchance AI Chat is Better Than Other AI Platforms",
   content: "Artificial Intelligence is revolutionizing the customer service industry. AI-powered chatbots and virtual assistants are providing instant, 24/7 support to customers, handling routine queries efficiently and freeing up human agents to focus on more complex issues. These AI systems can analyze customer data to provide personalized recommendations and solutions, improving customer satisfaction and loyalty. As AI continues to evolve, we can expect even more seamless and intuitive customer service experiences in the future.",
   date: "May 15, 2024"
 },
 "future-of-conversational-ai": {
   title: "How to Create a Perfect AI Character for Storytelling",
   content: "AI chatbots have become an integral part of many businesses' customer service strategies. To ensure your chatbot is performing at its best, consider these optimization techniques: 1) Continuously train your AI model with new data, 2) Implement context awareness for more natural conversations, 3) Use sentiment analysis to better understand user emotions, 4) Integrate with other systems for a seamless user experience, and 5) Regularly analyze chatbot performance metrics and user feedback for ongoing improvements.",
   date: "June 2, 2024"
 },
 "ai-transforming-customer-service": {
   title: "The Future of Privacy in AI Chat Platforms",
   content: "Natural Language Processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and humans using natural language. It's the technology that powers modern AI chatbots, allowing them to understand, interpret, and generate human language. Key components of NLP include tokenization, part-of-speech tagging, named entity recognition, sentiment analysis, and machine translation. As NLP continues to advance, we can expect even more sophisticated and human-like interactions with AI systems.",
   date: "June 20, 2024"
 },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
 const post = blogPosts[params.slug]
 if (!post) {
   return {
     title: 'Post Not Found'
   }
 }
 return {
   title: post.title,
   description: post.content.substring(0, 160) + '...'
 }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
 const post = blogPosts[params.slug]

 if (!post) {
   notFound()
 }

 return (
   <div className="container mx-auto px-4 py-8">
     <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
     <p className="text-sm text-gray-500 mb-4">{post.date}</p>
     <div className="prose max-w-none">
       <p>{post.content}</p>
     </div>
   </div>
 )
}


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
   title: "Introduction to AI Chatbots",
   content: "AI chatbots are revolutionizing the way we interact with technology. These intelligent conversational agents use natural language processing and machine learning algorithms to understand and respond to user queries in a human-like manner. From customer service to personal assistants, AI chatbots are finding applications in various industries, enhancing efficiency and user experience. As the technology continues to evolve, we can expect even more sophisticated and capable chatbots in the future.",
   date: "June 1, 2023"
 },
 "future-of-conversational-ai": {
   title: "The Future of Conversational AI",
   content: "As we look to the future, conversational AI is set to become even more sophisticated and integrated into our daily lives. Advancements in natural language understanding and generation will lead to more nuanced and context-aware interactions. We can expect to see AI assistants that can handle complex tasks, engage in meaningful conversations, and even show empathy. The line between human and AI communication will continue to blur, opening up new possibilities in fields like education, healthcare, and personal productivity.",
   date: "June 15, 2023"
 },
 "ai-transforming-customer-service": {
   title: "How AI is Transforming Customer Service",
   content: "Artificial Intelligence is revolutionizing the customer service industry. AI-powered chatbots and virtual assistants are providing instant, 24/7 support to customers, handling routine queries efficiently and freeing up human agents to focus on more complex issues. These AI systems can analyze customer data to provide personalized recommendations and solutions, improving customer satisfaction and loyalty. As AI continues to evolve, we can expect even more seamless and intuitive customer service experiences in the future.",
   date: "July 1, 2023"
 },
 "ethics-of-ai-in-daily-life": {
   title: "The Ethics of AI in Daily Life",
   content: "As AI becomes increasingly prevalent in our daily lives, it's crucial to consider the ethical implications of this technology. Issues such as data privacy, algorithmic bias, and the potential for job displacement are at the forefront of discussions. It's important to develop AI systems that are transparent, fair, and accountable. As users and developers of AI, we have a responsibility to engage in these ethical discussions and work towards creating AI that benefits society as a whole.",
   date: "July 15, 2023"
 },
 "getting-started-with-perchance-ai": {
   title: "Getting Started with Perchance AI Chat",
   content: "Perchance AI Chat offers a user-friendly interface for engaging with advanced AI. To get started, simply visit our website and create an account. Once logged in, you can immediately begin chatting with our AI. Whether you're looking for information, creative inspiration, or just casual conversation, Perchance AI is here to assist. Remember to provide clear context in your queries for the best results, and don't hesitate to ask follow-up questions to dive deeper into topics.",
   date: "August 1, 2023"
 },
 "ai-in-healthcare": {
   title: "AI's Growing Role in Healthcare",
   content: "Artificial Intelligence is revolutionizing the healthcare industry. From diagnosis to treatment planning, AI is enhancing the capabilities of healthcare professionals and improving patient outcomes. This article explores the current applications of AI in healthcare and its potential future impacts.",
   date: "August 20, 2023"
 },
  "ai-future-of-work": {
    title: "AI and the Future of Work",
    content: "Artificial Intelligence is rapidly changing the landscape of work. As AI technologies advance, they are automating many tasks that were once performed by humans. This shift is creating new job opportunities in AI development, data analysis, and human-AI collaboration. However, it also means that many traditional roles are being redefined or becoming obsolete. To thrive in this new era, workers will need to develop skills that complement AI, such as critical thinking, creativity, and emotional intelligence. The future of work will likely involve a symbiotic relationship between humans and AI, where each leverages their unique strengths.",
    date: "September 5, 2023"
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


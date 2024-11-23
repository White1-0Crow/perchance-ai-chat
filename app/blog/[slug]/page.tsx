import { notFound } from 'next/navigation'

const blogPosts = {
  "intro-to-ai-chatbots": {
    title: "5 Reasons Why Perchance AI Chat is Better Than Other AI Platforms",
    content: "A detailed comparison of how Perchance AI Chat excels in customization, privacy, and accessibility."
  },
  "future-of-conversational-ai": {
    title: "How to Create a Perfect AI Character for Storytelling",
    content: " Step-by-step guidance on using Perchance AI Chat to design characters that enhance your creative writing."
  },
  "ai-transforming-customer-service": {
    title: "How AI is Transforming Customer Service",
    content: "Artificial Intelligence is revolutionizing the customer service industry. AI-powered chatbots and virtual assistants are providing instant, 24/7 support to customers, handling routine queries efficiently and freeing up human agents to focus on more complex issues. These AI systems can analyze customer data to provide personalized recommendations and solutions, improving customer satisfaction and loyalty. As AI continues to evolve, we can expect even more seamless and intuitive customer service experiences in the future."
  },
  "ethics-of-ai-in-daily-life": {
    title: "The Future of Privacy in AI Chat Platforms",
    content: "An in-depth look at why local storage and user control are the next big trends in AI development."
  },
  "getting-started-with-perchance-ai": {
    title: "Getting Started with Perchance AI Chat",
    content: "Perchance AI Chat offers a user-friendly interface for engaging with advanced AI. To get started, simply visit our website and create an account. Once logged in, you can immediately begin chatting with our AI. Whether you're looking for information, creative inspiration, or just casual conversation, Perchance AI is here to assist. Remember to provide clear context in your queries for the best results, and don't hesitate to ask follow-up questions to dive deeper into topics."
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  )
}


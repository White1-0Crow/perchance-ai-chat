"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Globe } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: "True Customization",
    description: "Unlike most AI platforms, Perchance AI Chat allows you to create fully customized AI characters. Define their name, personality traits, and even their profile image to craft a virtual companion that’s uniquely yours. Whether you want a friendly conversationalist, a witty assistant, or a fictional character for storytelling, the possibilities are endless.."
  },
  {
    icon: Zap,
    title: "Privacy-First Design",
    description: "In a world where privacy is often overlooked, Perchance AI Chat gives you complete control. Your conversations and data are stored locally in your browser, ensuring that nothing is uploaded to the cloud. This commitment to privacy means you can explore ideas and share information without worry."
  },
  {
    icon: Shield,
    title: "Effortless Accessibility",
    description: "No registrations, no subscriptions, no hidden fees—just instant access. With Perchance AI Chat, you don’t have to create an account or pay for premium features. Visit the platform and start chatting immediately. It’s as simple as that."
  },
  {
    icon: Globe,
    title: "Seamless Integration and Import",
    description: "Already have characters you’ve developed on other platforms like Character AI? Perchance AI Chat makes it easy to import and enhance them. Copy and paste their descriptions into our system to continue your creative journey without missing a beat."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        What Makes Perchance AI Chat Unique?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Perchance AI Chat isn’t just another chatbot—it’s a game-changer in the world of AI communication. Here’s what sets us apart:
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


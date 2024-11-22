"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from 'framer-motion'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Immerse yourself in the world of Perchance AI
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Experience the next generation of AI chat with our powerful, intuitive, and context-aware platform
        </p>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold sm:text-3xl">Natural Conversations</h3>
          <p className="text-muted-foreground text-lg">
            Our AI maintains context throughout the conversation, understanding nuances and providing relevant, meaningful responses that feel natural and engaging.
          </p>
          <Button size="lg" className="text-lg">
            Try Perchance AI Now →
          </Button>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Natural conversation demo"
            width={400}
            height={300}
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative aspect-video md:order-last">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Knowledge base demo"
            width={400}
            height={300}
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold sm:text-3xl">Vast Knowledge Base</h3>
          <p className="text-muted-foreground text-lg">
            Access a comprehensive knowledge base covering various topics, from technical subjects to creative writing, all while maintaining accuracy and relevance.
          </p>
          <Button size="lg" className="text-lg">
            Explore Knowledge Base →
          </Button>
        </div>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold sm:text-3xl">Advanced Learning</h3>
          <p className="text-muted-foreground text-lg">
            Our AI continuously learns and adapts to provide increasingly accurate and personalized responses, making each interaction more valuable than the last.
          </p>
          <Button size="lg" className="text-lg">
            Start Learning Now →
          </Button>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Advanced learning demo"
            width={400}
            height={300}
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  )
}


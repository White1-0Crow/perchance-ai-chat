"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from 'framer-motion'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        How Does Perchance AI Chat Work?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Getting started with Perchance AI Chat is effortless. Here’s a breakdown of how it works:
        </p>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold sm:text-3xl">Start Chatting Instantly</h3>
          <p className="text-muted-foreground text-lg">
          Perchance AI Chat eliminates the barriers to entry. Visit the website, choose the default AI persona, or start building your own character. With no registration required, you can dive into meaningful conversations within seconds.
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
        <div className="space-y-4 md:order-last">
          <h3 className="text-2xl font-bold sm:text-3xl">Create and Customize Characters</h3>
          <p className="text-muted-foreground text-lg">
          Unleash your creativity by designing characters that fit your needs:
            Name Your Character: Give your AI a unique identity.
            Set Personality Traits: Define how your character responds, thinks, and interacts.
            Add Visuals: Upload or link a profile picture to bring your character to life.
          </p>
          <Button size="lg" className="text-lg">
            Explore Knowledge Base →
          </Button>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/images/feature-2.png"
            alt="Knowledge base demo"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold sm:text-3xl">Save, Load, and Import Data</h3>
          <p className="text-muted-foreground text-lg">
          With local data storage, Perchance AI Chat ensures that your creations are secure and easily accessible:
            Save and revisit conversations directly from your browser.
            Load previously created characters and continue your sessions.
            Import characters from other platforms and integrate them seamlessly.
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


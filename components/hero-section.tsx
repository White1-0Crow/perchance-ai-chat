"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-16 h-16 bg-accent rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Experience AI Chat Like Never Before, For Free
          </h1>
          <p className="mx-auto md:mx-0 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Unlock the power of intelligent conversations with Perchance AI Chat. Our advanced AI understands context, learns from interactions, and provides meaningful responses in real-time, all at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="text-lg font-semibold transition-all hover:scale-105">
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src="/placeholder.svg?height=512&width=512"
              alt="Perchance AI Chat Interface"
              width={512}
              height={512}
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


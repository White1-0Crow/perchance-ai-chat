"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Experience AI Chat Like Never Before, For Free
          </h1>
          <p className="mx-auto md:mx-0 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Unlock the power of intelligent conversations with Perchance AI Chat. Our advanced AI understands context, learns from interactions, and provides meaningful responses in real-time, all at no cost to you.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button size="lg" className="text-lg font-semibold transition-all hover:scale-105">
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5" />
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


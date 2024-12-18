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
            Welcome to Perchance AI Chat – Revolutionizing the Way You Interact with AI, For Free
          </h1>
          <p className="mx-auto md:mx-0 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          If you're looking for an AI chat platform that stands out from the crowd, Perchance AI Chat is the answer. Designed for creativity, personalization, and privacy, Perchance AI Chat redefines what AI conversations can be. Whether you're a storyteller, a professional, or just someone who loves engaging with AI, our platform offers unparalleled features that leave competitors in the dust.
          </p>
          <div className="flex justify-center md:justify-start">
          <Button size="lg" asChild className="text-lg font-semibold transition-all hover:scale-105">
            <a href="https://perchance.org/ai-chat" target="_blank" rel="noopener noreferrer">
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src="/images/hero-image.png"
              alt="Perchance AI Chat Interface"
              fill
              className="object-contain rounded-lg shadow-2xl"
             />
          </div>
        </div>
      </div>
    </section>
  )
}


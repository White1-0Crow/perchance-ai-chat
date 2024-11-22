"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from 'framer-motion'

const testimonials = [
  {
    rating: 5,
    quote: "This AI chat is incredibly intuitive! It understands context perfectly and provides meaningful responses every time.",
    author: "Sarah K.",
    emoji: "🤯"
  },
  {
    rating: 5,
    quote: "I can't believe this is free. The quality of conversations and responses is outstanding. Highly recommended!",
    author: "Michael R.",
    emoji: "🎉"
  },
  {
    rating: 5,
    quote: "Been using this for my daily work and research. It's become an indispensable tool for brainstorming and problem-solving.",
    author: "David L.",
    emoji: "💡"
  },
  {
    rating: 5,
    quote: "The response speed and accuracy are amazing. This is exactly what I've been looking for in an AI chat service.",
    author: "Emily W.",
    emoji: "⚡"
  },
  {
    rating: 5,
    quote: "Simply amazing! The AI understands complex queries and provides detailed, relevant answers. A game-changer!",
    author: "James T.",
    emoji: "🚀"
  },
  {
    rating: 5,
    quote: "I use this every day for various tasks. The AI's ability to maintain context throughout conversations is impressive.",
    author: "Lisa M.",
    emoji: "🌟"
  }
]

export function TestimonialsSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Perchance AI Loved by Users Worldwide 🌍
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of satisfied users who are experiencing the power of intelligent conversations with our AI chat platform
        </p>
        <div className="text-3xl">⭐⭐⭐⭐⭐</div>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex mb-4 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < testimonial.rating ? "⭐" : "☆"}</span>
                  ))}
                </div>
                <blockquote className="text-lg">
                  <span className="text-2xl mr-2">{testimonial.emoji}</span>
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  — {testimonial.author}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from 'framer-motion'

const testimonials = [
  {
    rating: 5,
    quote: "Perchance AI Chat’s customization is unmatched. I’ve created an entire cast of characters for my creative projects, and they feel so alive!",
    author: "Sarah K.",
    emoji: "🤯"
  },
  {
    rating: 5,
    quote: "I love how I can just open the site and start chatting without needing to register. It’s fast, efficient, and respects my privacy.",
    author: "Michael R.",
    emoji: "🎉"
  },
  {
    rating: 5,
    quote: "The ability to store everything locally is a game-changer. I know my data is safe, and that gives me peace of mind.",
    author: "David L.",
    emoji: "💡"
  },
  {
    rating: 5,
    quote: "Perchance AI Chat is so versatile. I use it for brainstorming at work and then switch to creative storytelling in my free time.",
    author: "Emily W.",
    emoji: "⚡"
  },
  {
    rating: 5,
    quote: "Importing characters from other platforms was incredibly easy. It’s amazing to see how much better they perform here.",
    author: "James T.",
    emoji: "🚀"
  },
  {
    rating: 5,
    quote: "This platform is free, private, and incredibly smart. What’s not to love? Perchance AI Chat has become my go-to AI tool.",
    author: "Lisa M.",
    emoji: "🌟"
  }
]

export function TestimonialsSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Why Users Love Perchance AI Chat 🌍
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Don’t just take our word for it—here’s what our users have to say:
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


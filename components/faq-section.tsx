"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "Is Perchance AI Chat really free?",
    answer: "Yes! Perchance AI Chat is completely free to use with no hidden fees or subscriptions. You can access all features without any payment."
  },
  {
    question: "Do I need to create an account to use Perchance AI Chat?",
    answer: "No, there’s no need to register or log in. Simply visit the website and start chatting immediately—fast and hassle-free."
  },
  {
    question: "How does Perchance AI Chat protect my privacy?",
    answer: "Perchance AI Chat prioritizes your privacy. All your data, including conversations and custom characters, is stored locally in your browser. This ensures complete control and prevents any data from being uploaded to the cloud."
  },
  {
    question: "Can I create custom AI characters?",
    answer: "Absolutely! You can fully customize AI characters by naming them, defining their personality traits, and even adding profile pictures. This feature is perfect for creative projects or tailored interactions."
  },
  {
    question: "Can I import characters from other platforms?",
    answer: "Yes, Perchance AI Chat allows you to easily import characters from platforms like Character AI. Simply copy the character description and paste it into Perchance AI Chat to continue your creative journey."
  }
]

export function FAQSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <motion.div 
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Find answers to common questions about Perchance AI Chat
        </p>
      </motion.div>
      <motion.div 
        className="mx-auto max-w-[58rem] mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}


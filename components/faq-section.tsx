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
    question: "What is Perchance AI Chat?",
    answer: "Perchance AI Chat is a free, advanced artificial intelligence chatbot that uses natural language processing to engage in human-like conversations on a wide range of topics."
  },
  {
    question: "Is Perchance AI Chat really free?",
    answer: "Yes, Perchance AI Chat is completely free to use. We believe in making advanced AI technology accessible to everyone."
  },
  {
    question: "How accurate are the AI's responses?",
    answer: "Our AI is trained on a vast amount of data and uses advanced algorithms to generate accurate and contextually relevant responses. However, as with any AI, it's important to verify critical information."
  },
  {
    question: "Can I use Perchance AI Chat for commercial purposes?",
    answer: "Yes, you can use Perchance AI Chat for both personal and commercial purposes. However, please refer to our terms of service for specific guidelines and limitations."
  },
  {
    question: "How does Perchance AI Chat handle my privacy?",
    answer: "We take your privacy seriously. All conversations are encrypted, and we do not store personal information. For more details, please check our privacy policy."
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


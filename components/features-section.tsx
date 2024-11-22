"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Globe } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: "智能对话",
    description: "我们的AI模型理解上下文和细微差别，为复杂查询提供类人的回应。"
  },
  {
    icon: Zap,
    title: "实时处理",
    description: "由尖端技术支持的闪电般快速响应，延迟最小化。"
  },
  {
    icon: Shield,
    title: "安全私密",
    description: "企业级安全性，为您的所有对话提供端到端加密。"
  },
  {
    icon: Globe,
    title: "多语言支持",
    description: "以50多种语言进行准确翻译和文化理解的交流。"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features that Set Us Apart
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Discover why Perchance AI is the preferred choice for intelligent conversations
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


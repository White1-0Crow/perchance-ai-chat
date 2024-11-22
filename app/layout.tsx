import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Perchance AI Chat - Intelligent Conversations Made Simple',
  description: 'Experience natural conversations with Perchance AI Chat. Advanced language understanding, real-time responses, and seamless integration for all your AI chat needs.',
  keywords: 'AI chat, artificial intelligence, chatbot, natural language processing, machine learning, conversation AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
              src="/logo.svg"
              alt="Perchance AI Chat Logo"
              width={32}
              height={32}
              className="mr-2"
            />         
            <span className="hidden font-bold sm:inline-block">Perchance AI Chat</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#blog">Blog</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="https://perchance.org/ai-chat" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}


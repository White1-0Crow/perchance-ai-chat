import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Perchance AI Chat</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#blog">Blog</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="w-full md:w-auto">
              Try Now
            </Button>
          </div>
          <Button>Get Started</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}


import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Get Started with Perchance AI Chat Today
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Why settle for less when you can have an AI platform that’s creative, secure, and completely free? Perchance AI Chat is redefining the way we interact with technology, offering an experience that’s as unique as you are. Join thousands of users who have already discovered the difference.
        </p>
        <Button size="lg" className="mt-4">
          Start Chatting Now
        </Button>
      </div>
    </section>
  )
}


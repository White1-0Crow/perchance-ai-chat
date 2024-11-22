import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Ready to Experience AI-Powered Conversations?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of users and start chatting with our advanced AI for free today.
        </p>
        <Button size="lg" className="mt-4">
          Start Chatting Now
        </Button>
      </div>
    </section>
  )
}


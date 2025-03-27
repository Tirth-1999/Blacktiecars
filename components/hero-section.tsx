import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Premium Transportation Services</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Luxury vehicles with professional drivers for airport transfers, events, and custom bookings in College
          Station and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Book Now
            </Button>
          </Link>
          <Link href="/vehicles">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


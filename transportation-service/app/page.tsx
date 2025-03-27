import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Car, MapPin } from "lucide-react"
import VehicleShowcase from "@/components/vehicle-showcase"
import ServiceHighlights from "@/components/service-highlights"
import TestimonialSection from "@/components/testimonial-section"
import HeroSection from "@/components/hero-section"
import LiveChatButton from "@/components/live-chat-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Premium Transportation Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Airport Transfers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Reliable pickup and drop-off services to all major airports in Texas, including flight tracking and
                waiting time.
              </p>
              <Link href="/booking?service=airport">
                <Button variant="outline" className="w-full">
                  Book Airport Transfer
                </Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Event Transportation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Premium transportation for A&M matches, corporate events, weddings, and special occasions.
              </p>
              <Link href="/booking?service=event">
                <Button variant="outline" className="w-full">
                  Book Event Service
                </Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Custom Bookings</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Flexible transportation solutions from 2-hour to 24-hour durations, tailored to your specific needs.
              </p>
              <Link href="/booking?service=custom">
                <Button variant="outline" className="w-full">
                  Create Custom Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Service Coverage</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Based in College Station, we provide premium transportation services throughout major Texas cities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">College Station</h3>
              <p className="text-gray-600 text-sm">Primary Service Area</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Houston</h3>
              <p className="text-gray-600 text-sm">Extended Coverage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Dallas</h3>
              <p className="text-gray-600 text-sm">Extended Coverage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Austin</h3>
              <p className="text-gray-600 text-sm">Extended Coverage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">San Antonio</h3>
              <p className="text-gray-600 text-sm">Extended Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <VehicleShowcase />

      {/* Service Highlights */}
      <ServiceHighlights />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Transportation?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Book your premium vehicle today and enjoy a comfortable, reliable, and luxurious transportation experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Book Now
              </Button>
            </Link>
            <Link href="/vehicles">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LiveChatButton />
    </main>
  )
}


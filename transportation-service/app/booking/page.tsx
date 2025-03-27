import type { Metadata } from "next"
import BookingForm from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book Your Transportation | Premium Transportation Services",
  description:
    "Book your premium transportation service for airport transfers, events, or custom bookings in College Station and beyond.",
}

export default function BookingPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Transportation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the form below to book your premium transportation service. Our booking manager will confirm your
            reservation shortly.
          </p>
        </div>

        <BookingForm />
      </div>
    </main>
  )
}


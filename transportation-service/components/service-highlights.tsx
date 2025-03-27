import { CheckCircle, Clock, CreditCard, HeadphonesIcon, Shield, Users } from "lucide-react"

export default function ServiceHighlights() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Service</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a premium transportation experience with attention to every detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Punctual Service</h3>
            <p className="text-gray-600">
              Our drivers are always on time, ensuring you never miss a flight or appointment.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">
              All our vehicles are regularly maintained and our drivers are professionally trained.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Easy online payment system with automatic invoice generation for your records.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Bookings</h3>
            <p className="text-gray-600">
              Flexible booking options from 2-hour to 24-hour durations to meet your specific needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <HeadphonesIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Support</h3>
            <p className="text-gray-600">
              Connect with a real person through our live chat for immediate assistance with your booking.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
            <p className="text-gray-600">
              Our experienced chauffeurs provide courteous and professional service for all your transportation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


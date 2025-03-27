import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Calendar, MapPin, Users, Clock, Car, CreditCard } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your transportation has been booked successfully. A confirmation email has been sent to your email address.
          </p>
        </div>

        <Card className="shadow-md border-0 mb-8">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Date & Time</h3>
                  <p className="text-gray-600">May 15, 2024 at 10:00 AM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Pickup Location</h3>
                  <p className="text-gray-600">123 Main St, College Station, TX</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Car className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Vehicle</h3>
                  <p className="text-gray-600">Lincoln Navigator</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Passengers</h3>
                  <p className="text-gray-600">4 passengers, 3 luggage items</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Service Type</h3>
                  <p className="text-gray-600">Airport Transfer</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Payment Status</h3>
                  <p className="text-green-600 font-medium">Paid</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-medium mb-2">Booking Reference</h3>
              <p className="text-gray-800 font-mono bg-gray-100 p-2 rounded">TXCS-24051-8976</p>
              <p className="text-sm text-gray-500 mt-2">
                Please keep this reference number for your records. You'll need it if you need to modify or cancel your
                booking.
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-6">
            <div className="w-full text-center">
              <p className="text-gray-600 mb-4">
                Our booking manager, Amanda, will contact you shortly to confirm all details.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/booking">Book Another Trip</Link>
                </Button>
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium text-sm">1</span>
              </div>
              <p className="text-gray-600">You'll receive a confirmation email with your booking details.</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium text-sm">2</span>
              </div>
              <p className="text-gray-600">
                Amanda, our booking manager, will call you to confirm all details and address any special requirements.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium text-sm">3</span>
              </div>
              <p className="text-gray-600">
                Your driver will contact you 24 hours before your scheduled pickup to introduce themselves.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium text-sm">4</span>
              </div>
              <p className="text-gray-600">
                On the day of service, your driver will arrive 10 minutes early at the pickup location.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}


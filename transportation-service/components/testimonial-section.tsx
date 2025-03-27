import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Business Executive",
    content:
      "The service was impeccable. The driver was on time, professional, and the vehicle was immaculate. Perfect for my business trip to Houston.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Event Planner",
    content:
      "We used their services for a corporate event in College Station. The Sprinter van was perfect for our team, and the booking process was seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Thompson",
    role: "A&M Alumni",
    content:
      "Booked a Lincoln Navigator for our family to attend an A&M game. The experience was fantastic from start to finish. Will definitely use again!",
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about our premium transportation
          services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


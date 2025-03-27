import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Luggage, Users } from "lucide-react"

const vehicles = [
  {
    id: "maserati",
    name: "Maserati Quattroporte",
    image: "/placeholder.svg?height=300&width=500",
    passengers: 3,
    luggage: 2,
    description: "Luxury sedan with premium leather interior and advanced entertainment system.",
  },
  {
    id: "lincoln",
    name: "Lincoln Navigator",
    image: "/placeholder.svg?height=300&width=500",
    passengers: 6,
    luggage: 4,
    description: "Spacious SUV with ample legroom and luggage space for group travel.",
  },
  {
    id: "escalade",
    name: "Cadillac Escalade",
    image: "/placeholder.svg?height=300&width=500",
    passengers: 6,
    luggage: 4,
    description: "Iconic luxury SUV with premium features and commanding presence.",
  },
  {
    id: "sprinter",
    name: "Mercedes Sprinter",
    image: "/placeholder.svg?height=300&width=500",
    passengers: 12,
    luggage: 12,
    description: "Spacious van perfect for larger groups and corporate outings.",
  },
]

export default function VehicleShowcase() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Premium Fleet</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose from our selection of luxury vehicles, each maintained to the highest standards and driven by
          professional chauffeurs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{vehicle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{vehicle.passengers} passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Luggage className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{vehicle.luggage} luggage</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/booking?vehicle=${vehicle.id}`} className="w-full">
                  <Button className="w-full">Book This Vehicle</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/vehicles">
            <Button variant="outline">View All Vehicles</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


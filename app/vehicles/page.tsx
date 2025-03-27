import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Luggage, Users } from "lucide-react"

export default function VehiclesPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Fleet</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of luxury vehicles, each maintained to the highest standards and driven by
            professional chauffeurs.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px] mx-auto">
            <TabsTrigger value="all">All Vehicles</TabsTrigger>
            <TabsTrigger value="sedan">Sedans</TabsTrigger>
            <TabsTrigger value="suv">SUVs</TabsTrigger>
            <TabsTrigger value="van">Vans</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Maserati */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Maserati Quattroporte"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Maserati Quattroporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Luxury sedan with premium leather interior and advanced entertainment system. Perfect for
                      executive travel and special occasions.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 3 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>2 luggage items</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Features</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Premium leather interior</li>
                        <li>• Advanced climate control</li>
                        <li>• Wi-Fi connectivity</li>
                        <li>• Premium sound system</li>
                        <li>• Complimentary bottled water</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=maserati" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Lincoln */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Lincoln Navigator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Lincoln Navigator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Spacious SUV with ample legroom and luggage space for group travel. Ideal for families and small
                      groups.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 6 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>4 luggage items</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Features</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Spacious leather seating</li>
                        <li>• Third-row seating</li>
                        <li>• USB charging ports</li>
                        <li>• Entertainment system</li>
                        <li>• Complimentary refreshments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=lincoln" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Escalade */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cadillac Escalade"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Cadillac Escalade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Iconic luxury SUV with premium features and commanding presence. Perfect for business travel and
                      special events.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 6 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>4 luggage items</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Features</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Premium leather interior</li>
                        <li>• Heated and cooled seats</li>
                        <li>• Wi-Fi connectivity</li>
                        <li>• Premium sound system</li>
                        <li>• Complimentary refreshments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=escalade" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Sprinter */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mercedes Sprinter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Mercedes Sprinter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Spacious van perfect for larger groups and corporate outings. Comfortable seating with ample
                      luggage space.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 12 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>12 luggage items</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Features</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Comfortable seating</li>
                        <li>• High ceiling for easy entry</li>
                        <li>• USB charging ports</li>
                        <li>• Entertainment system</li>
                        <li>• Complimentary refreshments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=sprinter" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sedan" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Maserati */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Maserati Quattroporte"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Maserati Quattroporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Luxury sedan with premium leather interior and advanced entertainment system. Perfect for
                      executive travel and special occasions.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 3 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>2 luggage items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=maserati" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="suv" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lincoln */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Lincoln Navigator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Lincoln Navigator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Spacious SUV with ample legroom and luggage space for group travel. Ideal for families and small
                      groups.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 6 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>4 luggage items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=lincoln" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Escalade */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cadillac Escalade"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Cadillac Escalade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Iconic luxury SUV with premium features and commanding presence. Perfect for business travel and
                      special events.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 6 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>4 luggage items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=escalade" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="van" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sprinter */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mercedes Sprinter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Mercedes Sprinter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Spacious van perfect for larger groups and corporate outings. Comfortable seating with ample
                      luggage space.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Up to 12 passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>12 luggage items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking?vehicle=sprinter" className="w-full">
                    <Button className="w-full">Book This Vehicle</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="bg-primary/5 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Vehicle Booking Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Chauffeur Services</h3>
                <p className="text-gray-600">
                  All our vehicles come with professional, uniformed chauffeurs who are experienced, licensed, and
                  trained to provide exceptional service. Our chauffeurs are knowledgeable about the local area and
                  committed to ensuring your comfort and safety.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Vehicle Amenities</h3>
                <p className="text-gray-600">
                  Our premium fleet vehicles include complimentary bottled water, Wi-Fi connectivity (where available),
                  charging ports for your devices, and climate control for your comfort. Special requests can be
                  accommodated with advance notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Special Requirements</h3>
                <p className="text-gray-600">
                  We can accommodate special requirements such as child seats, wheelchair accessibility, or additional
                  luggage space. Please specify your needs during the booking process or contact our booking manager
                  directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Book Your Premium Transportation?</h2>
          <Link href="/booking">
            <Button size="lg">Book Now</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}


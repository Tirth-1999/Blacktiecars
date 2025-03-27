"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Loader2 } from "lucide-react"

const vehicles = [
  { id: "maserati", name: "Maserati Quattroporte", passengers: 3, luggage: 2 },
  { id: "lincoln", name: "Lincoln Navigator", passengers: 6, luggage: 4 },
  { id: "escalade", name: "Cadillac Escalade", passengers: 6, luggage: 4 },
  { id: "sprinter", name: "Mercedes Sprinter", passengers: 12, luggage: 12 },
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialService = searchParams.get("service") || "airport"
  const initialVehicle = searchParams.get("vehicle") || ""

  const [service, setService] = useState(initialService)
  const [vehicle, setVehicle] = useState(initialVehicle)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const [passengers, setPassengers] = useState("1")
  const [luggage, setLuggage] = useState("1")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to confirmation page
    router.push("/booking/confirmation")
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <Card className="shadow-md border-0">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">1. Select Service Type</h2>
                <p className="text-gray-500 text-sm">Choose the type of transportation service you need</p>
              </div>

              <Tabs defaultValue={service} onValueChange={setService} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="airport">Airport Transfer</TabsTrigger>
                  <TabsTrigger value="event">Event Transportation</TabsTrigger>
                  <TabsTrigger value="custom">Custom Booking</TabsTrigger>
                </TabsList>

                <TabsContent value="airport" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <Input id="pickup" placeholder="Enter address or location" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dropoff">Dropoff Location</Label>
                      <Input id="dropoff" placeholder="Enter address or location" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flight">Flight Information (optional)</Label>
                    <Input id="flight" placeholder="Flight number (e.g., AA1234)" />
                    <p className="text-xs text-gray-500">
                      Providing your flight information allows us to track your flight and adjust for any delays.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="event" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-event">Pickup Location</Label>
                      <Input id="pickup-event" placeholder="Enter address or location" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-location">Event Location</Label>
                      <Input id="event-location" placeholder="Enter event address" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select required>
                      <SelectTrigger id="event-type">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sports">Sports Event (A&M Game)</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="concert">Concert</SelectItem>
                        <SelectItem value="other">Other Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-notes">Special Requirements</Label>
                    <Textarea
                      id="event-notes"
                      placeholder="Any special requirements or information about the event"
                      className="min-h-[100px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="custom" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-custom">Initial Pickup Location</Label>
                      <Input id="pickup-custom" placeholder="Enter address or location" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Booking Duration</Label>
                      <Select required>
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 Hours</SelectItem>
                          <SelectItem value="4">4 Hours</SelectItem>
                          <SelectItem value="6">6 Hours</SelectItem>
                          <SelectItem value="8">8 Hours</SelectItem>
                          <SelectItem value="12">12 Hours</SelectItem>
                          <SelectItem value="24">24 Hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="itinerary">Itinerary Details</Label>
                    <Textarea
                      id="itinerary"
                      placeholder="Please provide details of your planned stops and schedule"
                      className="min-h-[100px]"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button type="button" onClick={nextStep}>
                  Continue to Vehicle Selection
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">2. Select Vehicle & Date</h2>
                <p className="text-gray-500 text-sm">Choose your preferred vehicle and booking date</p>
              </div>

              <div className="space-y-4">
                <Label>Select Vehicle</Label>
                <RadioGroup
                  defaultValue={vehicle}
                  onValueChange={setVehicle}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {vehicles.map((v) => (
                    <div key={v.id} className="relative">
                      <RadioGroupItem value={v.id} id={`vehicle-${v.id}`} className="peer sr-only" />
                      <Label
                        htmlFor={`vehicle-${v.id}`}
                        className="flex flex-col h-full p-4 border rounded-md cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className="aspect-video w-full overflow-hidden rounded-md mb-3">
                          <img
                            src={`/placeholder.svg?height=150&width=300`}
                            alt={v.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{v.name}</span>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                          <span>Up to {v.passengers} passengers</span>
                          <span>{v.luggage} luggage</span>
                        </div>
                        <div className="absolute top-2 right-2 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-white opacity-0 peer-data-[state=checked]:opacity-100">
                          <Check className="h-3 w-3" />
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Pickup Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Pickup Time</Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, hour) => (
                        <>
                          <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                            {hour === 0
                              ? "12:00 AM"
                              : hour < 12
                                ? `${hour}:00 AM`
                                : hour === 12
                                  ? "12:00 PM"
                                  : `${hour - 12}:00 PM`}
                          </SelectItem>
                          <SelectItem key={`${hour}:30`} value={`${hour}:30`}>
                            {hour === 0
                              ? "12:30 AM"
                              : hour < 12
                                ? `${hour}:30 AM`
                                : hour === 12
                                  ? "12:30 PM"
                                  : `${hour - 12}:30 PM`}
                          </SelectItem>
                        </>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <Select value={passengers} onValueChange={setPassengers} required>
                    <SelectTrigger id="passengers">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i === 0 ? "passenger" : "passengers"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="luggage">Luggage Items</Label>
                  <Select value={luggage} onValueChange={setLuggage} required>
                    <SelectTrigger id="luggage">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i === 0 ? "item" : "items"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button type="button" onClick={nextStep}>
                  Continue to Contact Information
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">3. Contact Information</h2>
                <p className="text-gray-500 text-sm">Provide your details to complete the booking</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                <Textarea
                  id="specialRequirements"
                  placeholder="Any special requirements (e.g., baby seat, wheelchair accessibility)"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded border-gray-300" required />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    "Complete Booking"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}


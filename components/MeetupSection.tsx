'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Search } from "lucide-react"

interface Event {
  title: string;
  date: string;
  location: string;
}

export default function MeetupSection() {
  const [zipcode, setZipcode] = useState('')
  const [localEvents, setLocalEvents] = useState<Event[]>([])

  const handleZipcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const dummyLocalEvents: Event[] = [
      { title: 'Local Park Cleanup', date: 'June 22, 2024', location: 'Community Park' },
      { title: 'Neighborhood Hike', date: 'July 5, 2024', location: 'Local Trail' },
      { title: 'Urban Garden Volunteer Day', date: 'July 15, 2024', location: 'Downtown Garden' },
    ]
    setLocalEvents(dummyLocalEvents)
  }

  return (
    <section id="meetups" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Community Meetups</h2>
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleZipcodeSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter your zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-400">
              <Search className="h-4 w-4 mr-2" />
              Find Local Events
            </Button>
          </form>
        </div>
        <Tabs defaultValue="upcoming" className="max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="local">Local Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { title: 'Mountain Trail Hike', date: 'June 15, 2024', location: 'Rocky Mountains' },
                    { title: 'Beach Cleanup Walk', date: 'July 2, 2024', location: 'Pacific Coast' },
                    { title: 'Urban Nature Photography', date: 'July 20, 2024', location: 'Central Park' },
                  ].map((event, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Calendar className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-stone-600">{event.date}</p>
                        <p className="text-sm text-stone-600">{event.location}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="local">
            <Card>
              <CardHeader>
                <CardTitle>Local Events</CardTitle>
              </CardHeader>
              <CardContent>
                {localEvents.length > 0 ? (
                  <ul className="space-y-4">
                    {localEvents.map((event, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <MapPin className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-stone-600">{event.date}</p>
                          <p className="text-sm text-stone-600">{event.location}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-stone-600">Enter your zipcode to find local events.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
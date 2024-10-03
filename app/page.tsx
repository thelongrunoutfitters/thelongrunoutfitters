'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Leaf, ShieldAlert, Search, LogIn } from "lucide-react"
import Link from 'next/link'

interface Event {
  title: string;
  date: string;
  location: string;
}

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [localEvents, setLocalEvents] = useState<Event[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signed up with email:', email)
    setEmail('')
  }

  const handleZipcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const dummyLocalEvents: Event[] = [
      { title: 'Local Park Cleanup', date: 'June 22, 2024', location: 'Community Park' },
      { title: 'Neighborhood Hike', date: 'July 5, 2024', location: 'Local Trail' },
      { title: 'Urban Garden Volunteer Day', date: 'July 15, 2024', location: 'Downtown Garden' },
    ]
    setLocalEvents(dummyLocalEvents)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <header className="bg-stone-800 text-stone-100">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">The Long Run</Link>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><Link href="#products" className="hover:text-green-400 transition-colors">Products</Link></li>
              <li><Link href="#meetups" className="hover:text-green-400 transition-colors">Meetups</Link></li>
              <li><Link href="#volunteer" className="hover:text-green-400 transition-colors">Volunteer</Link></li>
              <li><Link href="#about" className="hover:text-green-400 transition-colors">About</Link></li>
            </ul>
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="outline" className="text-stone-100 border-stone-100 hover:bg-stone-700">
                Log Out
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline" className="text-stone-100 border-stone-100 hover:bg-stone-700">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gear Up for Good</h1>
            <p className="text-xl mb-8">Sustainable outdoor apparel and equipment for the conscious adventurer</p>
            <Button className="bg-yellow-500 text-stone-800 hover:bg-yellow-400">Shop Now</Button>
          </div>
        </section>

        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Eco-Friendly Jackets', 'Sustainable Backpacks', 'Recycled Footwear'].map((product) => (
                <Card key={product}>
                  <CardHeader>
                    <CardTitle>{product}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-stone-200 mb-4"></div>
                    <p className="text-sm text-stone-600">Made from recycled materials, built to last</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="meetups" className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Outdoor Meetups</h2>
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
                            {isLoggedIn ? (
                              <p className="text-sm text-stone-600">{event.location}</p>
                            ) : (
                              <p className="text-sm text-stone-600 italic">Log in to see location</p>
                            )}
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
                              {isLoggedIn ? (
                                <p className="text-sm text-stone-600">{event.location}</p>
                              ) : (
                                <p className="text-sm text-stone-600 italic">Log in to see location</p>
                              )}
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

        <section id="volunteer" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShieldAlert className="h-6 w-6 text-red-500" />
                    <span>Disaster Relief</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Join our efforts to support communities affected by natural disasters.</p>
                  <Button className="w-full">Sign Up to Volunteer</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-green-500" />
                    <span>Environmental Conservation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Help preserve our natural environments through various conservation projects.</p>
                  <Button className="w-full">Find Local Projects</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-stone-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">About The Long Run</h2>
            <p className="max-w-2xl mx-auto mb-8">
              We're committed to creating sustainable outdoor gear while fostering a community of environmentally conscious adventurers. Our mission is to inspire people to connect with nature and protect our planet for the long run.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-stone-700 text-white border-stone-600 focus:border-green-500"
                required
              />
              <Button type="submit" className="bg-green-500 hover:bg-green-400">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Jackets</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Backpacks</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Footwear</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Meetups</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Volunteer</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Forum</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Facebook</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-green-400 transition-colors">Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-center">
            <p>&copy; 2024 The Long Run. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
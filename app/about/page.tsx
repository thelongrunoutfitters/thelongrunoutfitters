import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Mountain, Recycle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
        <Navbar />
      <header className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Long Run</h1>
          <p className="text-xl mb-8">Sustainable outdoor gear for conscious adventurers</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            At The Long Run, we're committed to creating high-quality, sustainable outdoor clothing 
            while creating a community of environmentally conscious adventurers. Our mission is 
            to inspire people to connect with nature, protect our planet, and make a positive 
            impact for the long run.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", description: "We use eco-friendly materials and processes in all our products." },
              { icon: Users, title: "Community", description: "We build and support a community of like-minded outdoor enthusiasts." },
              { icon: Mountain, title: "Adventure", description: "We encourage exploration and connection with nature." },
              { icon: Recycle, title: "Circular Economy", description: "We design for durability and offer repair and recycling programs." },
            ].map((value, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <value.icon className="w-12 h-12 text-green-600 mb-4" />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Sustainable Fabrics</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Recycled polyester from post-consumer plastic bottles</li>
                <li>Organic cotton grown without harmful pesticides</li>
                <li>Hemp wool for natural insulation</li>
                <li>Tencel lyocell from sustainably harvested wood</li>
              </ul>
            </div>
            <div className="relative h-128 md:h-full">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute w-full h-full object-cover"
                style={{ filter: `brightness(${70}%)` }}
                aria-hidden="true"
            >
                <source src="/assets/videos/cotton.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of The Long Run community. Join us for local events, sustainability 
            initiatives, and exclusive offers on our eco-friendly products.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-2 px-8">
            Sign Up Now
          </Button>
        </section>
      </main>
    </div>
  )
}
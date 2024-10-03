'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AboutSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signed up with email:', email)
    setEmail('')
  }

  return (
    <section id="about" className="py-16 bg-stone-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">About The Long Run</h2>
        <p className="max-w-2xl mx-auto mb-8">
          At The Long Run, we're committed to creating sustainable outdoor gear while fostering a community of environmentally conscious adventurers. Our products are crafted from eco-friendly materials like recycled wool, hemp wool, and full-grain leather, ensuring durability and minimal environmental impact.
        </p>
        <p className="max-w-2xl mx-auto mb-8">
          Our mission extends beyond providing high-quality gear. We aim to inspire people to connect with nature, protect our planet, and make a positive impact for the long run. Join our community events, earn points, and be part of the change.
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
  )
}
'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { id: 1, text: "The quality of The Long Run's products is unmatched. I love knowing my purchase supports sustainability.", author: "Alex M." },
  { id: 2, text: "Not only are their clothes comfortable, but I feel good wearing them knowing they're eco-friendly.", author: "Sam K." },
  { id: 3, text: "The community events are a great bonus. I've met so many like-minded individuals!", author: "Jamie L." },
]

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="flex items-center justify-center">
          <Button variant="ghost" onClick={prevReview} className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Card className="w-full max-w-2xl">
            <CardContent className="p-6 text-center">
              <p className="text-lg mb-4">"{reviews[currentReview].text}"</p>
              <p className="font-semibold">- {reviews[currentReview].author}</p>
            </CardContent>
          </Card>
          <Button variant="ghost" onClick={nextReview} className="ml-4">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
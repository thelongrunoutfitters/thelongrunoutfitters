'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Review from './Review'

const reviews = [
  { id: 1, text: "The quality of The Long Run's products is unmatched. I love knowing my purchase supports sustainability.", author: "Alex M.", stars: 5 },
  { id: 2, text: "Not only are their clothes comfortable, but I feel good wearing them knowing they're eco-friendly.", author: "Sam K.", stars: 4 },
  { id: 3, text: "The community events are a great bonus. I've met so many like-minded individuals!", author: "Jamie L.", stars: 5 },
]

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextReview = () => {
    setDirection(1)
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setDirection(-1)
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        nextReview()
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      nextReview()
    } else if (swipe > swipeConfidenceThreshold) {
      prevReview()
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="flex items-center justify-center">
          <Button 
            variant="ghost" 
            onClick={prevReview} 
            className="mr-4"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div 
            className="w-full max-w-2xl overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-80 flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentReview}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <Review
                    text={reviews[currentReview].text}
                    author={reviews[currentReview].author}
                    stars={reviews[currentReview].stars}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <Button 
            variant="ghost" 
            onClick={nextReview} 
            className="ml-4"
            aria-label="Next review"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentReview ? 'bg-gray-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
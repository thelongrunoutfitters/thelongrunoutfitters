import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Gear Up for Good</h1>
        <p className="text-xl mb-8">Sustainable outdoor apparel and equipment for the conscious adventurer</p>
        <Button className="bg-yellow-500 text-stone-800 hover:bg-yellow-400">Shop Now</Button>
      </div>
    </section>
  )
}
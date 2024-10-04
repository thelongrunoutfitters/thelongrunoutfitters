import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function SustainabilityCallout() {
  return (
    <section className="bg-white py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="The Long Run Sustainability Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">TAKING ACTION, TOGETHER</h2>
        <p className="text-lg mb-8">
          At The Long Run, our logo represents our commitment to sustainability. 
          Each product you see with this symbol is a step in our journey towards 
          zero environmental impact. Together, we're making strides for a 
          better future.
        </p>
        <p className="text-lg mb-8">
          Get the latest sustainability news from The Long Run and discover how 
          we're working to protect the future of outdoor adventures together.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 text-lg py-2 px-8">
          Join Us
        </Button>
      </div>
    </section>
  )
}
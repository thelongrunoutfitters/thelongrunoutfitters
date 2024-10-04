import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: `brightness(${50}%)` }}
        aria-hidden="true"
      >
        <source src="/assets/videos/arial-forest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 shadow-text">
          Powered by Nature. Driven by Strength.
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto shadow-text">
          Sustainable outdoor apparel and essentials for the conscious adventurer
        </p>
        <Button className="bg-white text-green-700 hover:bg-green-100 text-lg py-2 px-8">
          Shop Now
        </Button>
      </div>
    </section>
  )
}
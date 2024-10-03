import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductSection() {
  const products = [
    { name: 'Eco-Friendly Jackets', description: 'Made from recycled materials, built to last' },
    { name: 'Sustainable Backpacks', description: 'Durable and eco-conscious design' },
    { name: 'Recycled Footwear', description: 'Comfortable and planet-friendly' },
    { name: 'Hemp Wool Sweaters', description: 'Warm, sustainable, and stylish' },
  ]

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-stone-200 mb-4"></div>
                <p className="text-sm text-stone-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
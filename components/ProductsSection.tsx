import ProductCard from './ProductCard'

export default function ProductsSection() {
  const products = [
    {
      name: 'Eco-Friendly Jackets',
      description: 'Made from recycled materials, built to last',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Sustainable Backpacks',
      description: 'Durable and eco-conscious design',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Recycled Footwear',
      description: 'Comfortable and planet-friendly',
      imageUrl: '/placeholder.svg?height=200&width=200'
    }
  ]

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
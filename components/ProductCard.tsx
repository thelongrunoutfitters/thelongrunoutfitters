import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export default function ProductCard({ name, description, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-square bg-stone-200 mb-4">
          <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="mb-2">{name}</CardTitle>
        <p className="text-sm text-stone-600 mb-4 flex-grow">{description}</p>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
          Shop Now
        </Button>
      </CardContent>
    </Card>
  )
}
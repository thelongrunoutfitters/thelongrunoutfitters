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
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full pt-[100%]">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-4">
        <CardTitle className="mb-2">{name}</CardTitle>
        <p className="text-sm text-stone-600 mb-4 flex-grow">{description}</p>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
          Shop Now
        </Button>
      </CardContent>
    </Card>
  )
}
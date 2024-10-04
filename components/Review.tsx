import { Star } from 'lucide-react'

interface ReviewProps {
  text: string;
  author: string;
  stars: number;
}

export default function Review({ text, author, stars }: ReviewProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{author}</h3>
      <p className="text-lg mb-4 text-gray-700">"{text}"</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 ${
              index < stars ? 'text-yellow-400 fill-current' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
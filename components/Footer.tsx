import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/men" className="hover:text-green-400 transition-colors">Men</Link></li>
              <li><Link href="/women" className="hover:text-green-400 transition-colors">Women</Link></li>
              <li><Link href="/gear" className="hover:text-green-400 transition-colors">Gear</Link></li>
              <li><Link href="/accessories" className="hover:text-green-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="hover:text-green-400 transition-colors">Events</Link></li>
              <li><Link href="/volunteer" className="hover:text-green-400 transition-colors">Volunteer</Link></li>
              <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/forum" className="hover:text-green-400 transition-colors">Forum</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-green-400 transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-green-400 transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-green-400 transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 text-center">
          <p>&copy; 2024 The Long Run. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
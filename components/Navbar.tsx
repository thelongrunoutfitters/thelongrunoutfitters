'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ShoppingCart, LogIn, User } from 'lucide-react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="bg-stone-800 text-stone-100">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">The Long Run</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/men" className="hover:text-green-400 transition-colors">Men</Link>
          <Link href="/women" className="hover:text-green-400 transition-colors">Women</Link>
          <Link href="/gear" className="hover:text-green-400 transition-colors">Gear</Link>
          <Link href="/accessories" className="hover:text-green-400 transition-colors">Accessories</Link>
          <Link href="/events" className="hover:text-green-400 transition-colors">Events</Link>
          <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="text-stone-100 hover:bg-stone-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          {isLoggedIn ? (
            <Link href="/account">
              <Button variant="ghost" size="icon" className="text-stone-100 hover:bg-stone-700">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="bg-black text-white hover:bg-gray-800">
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
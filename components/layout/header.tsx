"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            {/* <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div> */}
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MailPackr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Terms
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-primary text-primary-foreground px-10 py-4 text-lg font-semibold shadow-lg">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
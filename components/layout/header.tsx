"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 text-primary-foreground bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="MailPackr"
              width={300}
              height={100}
              className="pt-5 pb-5 mt-7 mb-7"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#courses"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              SEO Resources
            </Link>
            <Link
              href="#programs"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              SEO Programs
            </Link>
            <Link
              href="/contact"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground hover:text-accent font-medium transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:flex">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-semibold shadow-lg"
              asChild
            >
              <Link href="https://app.mailpackr.com">Start Learning</Link>
            </Button>
          </div> */}

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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#courses"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SEO Resources
              </Link>
              <Link
                href="#programs"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SEO Programs
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link href="https://app.mailpackr.com">Start Learning</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
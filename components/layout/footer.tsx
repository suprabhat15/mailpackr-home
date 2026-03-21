import Link from "next/link";
import { MailsIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#101828] text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-1 rounded-lg">
                <MailsIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                MailPackr
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-6 max-w-xs">
              Reliable and Scalable. <br></br>Modern Email Marketing platform
              for your teams.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          {/* <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} MailPackr Inc. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-white/60">
              All systems operational
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

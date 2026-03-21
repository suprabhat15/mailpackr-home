"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react"

export function WaitlistSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage("Welcome aboard! Check your inbox soon.")
        setEmail("")
      } else {
        setStatus('error')
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus('error')
      setMessage("Network error. Please try again.")
      console.log(error);
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg border border-green-200 animate-in fade-in slide-in-from-bottom-2">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">{message}</span>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-12 text-base shadow-sm border-muted-foreground/20 focus-visible:ring-primary"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          disabled={status === "loading" || !email}
          size="lg"
          className="h-12 px-8 font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          {status === "loading" ? (
             <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <>
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>

      {status === "error" && (
        <p className="text-destructive text-sm mt-2 font-medium animate-in fade-in">{message}</p>
      )}

      <p className="text-xs text-muted-foreground mt-3 pl-1">
        Start your free trial. No credit card required.
      </p>
    </div>
  );
}

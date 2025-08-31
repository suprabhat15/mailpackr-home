"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail } from "lucide-react"

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
        setMessage("Thanks for joining! You'll receive updates from our end.")
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
      <div className="flex items-center justify-center gap-3 text-green-600 mb-6">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">{message}</span>
      </div>
    )
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-muted-foreground" />
        <span className="text-lg font-semibold text-foreground">
          Join our waitlist for upcoming updates
        </span>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={status === 'loading'}
        />
        <Button 
          type="submit" 
          disabled={status === 'loading' || !email}
          className="px-6"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
      
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2 text-center">{message}</p>
      )}
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        You can{" "}
        <button
          type="button"
          onClick={() => window.open('/api/unsubscribe', '_blank')}
          className="underline hover:no-underline"
        >
          unsubscribe
        </button>{" "}
        at any time.
      </p>
    </div>
  )
}
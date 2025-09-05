'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Mail, MapPin, Clock, CheckCircle, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSubmitted(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for contacting us, {formData.name}! We have received your message and will get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              
              <div className="text-sm text-muted-foreground">
                Need immediate assistance? Call us at (555) 123-4567
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground mb-8">
              Have questions about our courses or training programs? <br />{" "}
              We&apos;re here to help you succeed in SEO optimization.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Let&apos;s start your learning journey
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to help you master SEO optimization. Reach out
                to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    {/* <p className="text-muted-foreground">hello@mailpackr.com</p> */}
                    <p className="text-muted-foreground">learn@mailpackr.com</p>
                    <p className="text-muted-foreground">
                      support@mailpackr.com
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">91 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      E-516, Sector 7, Dwarka
                    </p>
                    <p className="text-muted-foreground">
                      New Delhi, 110077, India
                    </p>
                    <p className="text-muted-foreground">
                      Phone: (+91) 9700129000
                    </p>
                    <p className="text-muted-foreground">
                      Support Hours: <br />
                      <strong>Mon-Fri, 10:00AM–6:00PM</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                    <p className="text-sm text-muted-foreground">
                      Usually much faster!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-foreground" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={
                          errors.name
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={
                          errors.email
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="MailPackr"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className={
                          errors.subject
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your learning goals or questions about our courses..."
                      className={
                        errors.message
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-primary text-primary-foreground px-8"
                    >
                      Send Message
                      <Mail className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground mt-3">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:text-primary underline"
                      >
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:text-primary underline"
                      >
                        terms of service
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
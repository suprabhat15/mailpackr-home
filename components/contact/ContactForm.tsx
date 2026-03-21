'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [submitted, _setSubmitted] = useState(false)
  const [formData, _setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  // Suppress unused variable warnings - these will be used when form is uncommented
  void _setSubmitted
  void _setFormData


  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="mb-8">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for contacting us, {formData.name}! We have received your
            message and will get back to you within 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          {/* <div className="text-sm text-muted-foreground">
            Need immediate assistance? Call us at (555) 123-4567
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      {/* <CardHeader>
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
      </CardContent> */}
    </Card>
  );
}

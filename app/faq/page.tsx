"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="p-6">
      <button
        className="w-full text-left flex justify-between items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-muted-foreground">
          <p>{answer}</p>
        </div>
      )}
    </Card>
  )
}

export default function FAQ() {
  const faqData = [
    {
      question: "What is MailPackr and what do you offer?",
      answer: "MailPackr is your trusted partner for digital marketing education and resources. We provide comprehensive courses, training programs, and educational resources to help you master email marketing, sales funnels, automation, analytics, and conversion optimization."
    },
    {
      question: "Who are your courses designed for?",
      answer: "Our courses are designed for digital marketing newcomers, intermediate marketers looking to advance their skills, and professionals seeking specialized knowledge. We offer beginner-friendly fundamentals as well as advanced strategies for experienced marketers."
    },
    {
      question: "What learning programs do you offer?",
      answer: "We offer three main learning paths: Beginner Path ($199) with 3 foundation courses and 20+ hours of content, Professional Path ($399) with 6 advanced courses and 40+ hours of content including 1-on-1 mentorship, and Custom Corporate Training for teams and organizations."
    },
    {
      question: "What topics are covered in your courses?",
      answer: "Our comprehensive curriculum covers Digital Marketing Fundamentals, Sales Funnel & Automation Mastery, Marketing Analytics & Optimization, Customer Journey & Sales Psychology, and Conversion Copywriting & Design. Each course includes practical projects and real-world case studies."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes! All our courses include certificates upon completion. Professional Path participants receive professional certificates, while Beginner Path includes course certificates. These can help demonstrate your expertise to employers or clients."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including community access, marketing templates library, and for Professional Path students, 1-on-1 mentorship sessions and live workshops. Corporate training includes dedicated account managers."
    },
    {
      question: "How long do I have access to the content?",
      answer: "Beginner Path includes 6 months of access, while Professional Path includes lifetime access to all content. This means you can learn at your own pace and revisit materials whenever needed."
    },
    {
      question: "What results can I expect?",
      answer: "Our students typically see a 40% average increase in email open rates and 25% boost in conversions within 30 days of completing our courses. However, results depend on implementation and your specific business context."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes! We offer custom corporate training with curriculum design tailored to your team's needs, on-site training options, team progress tracking, dedicated account managers, and volume pricing discounts. Contact us for a custom quote."
    },
    {
      question: "How do I get started?",
      answer: "You can join our waitlist to be notified when enrollment opens. We'll provide you with free educational resources, industry case studies, and practical tutorials while you wait. Simply sign up on our homepage to begin your learning journey."
    },
    {
      question: "What makes MailPackr different from other marketing education platforms?",
      answer: "We focus on practical, results-driven education taught by industry experts who have generated millions in revenue. Our courses combine hands-on projects, real-world case studies, and proven strategies that you can implement immediately in your business."
    },
    {
      question: "Is there any free content available?",
      answer: "Yes! We provide free educational resources, industry case studies, and practical tutorials. These are available to help you start learning digital marketing fundamentals before enrolling in our comprehensive programs."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our digital marketing courses, programs, and educational resources.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help! Reach out to our team for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
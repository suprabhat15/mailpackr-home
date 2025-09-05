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
      question: "What is MailPackr and what SEO services do you offer?",
      answer: "MailPackr is your trusted partner for SEO education and optimization resources. We provide comprehensive courses, training programs, and educational resources to help you master search engine optimization, keyword research, technical SEO, content optimization, and link building strategies."
    },
    {
      question: "Who are your SEO courses designed for?",
      answer: "Our SEO courses are designed for beginners new to search engine optimization, intermediate marketers looking to advance their SEO skills, and professionals seeking specialized knowledge in technical SEO, content optimization, and advanced ranking strategies."
    },
    {
      question: "What SEO learning programs do you offer?",
      answer: "We offer three main learning paths: Beginner Path ($199) with 3 foundation SEO courses and 20+ hours of content, Professional Path ($399) with 6 advanced SEO courses and 40+ hours of content including 1-on-1 mentorship, and Custom Corporate Training for teams and organizations."
    },
    {
      question: "What SEO topics are covered in your courses?",
      answer: "Our comprehensive SEO curriculum covers SEO Fundamentals, Technical SEO & Site Optimization, SEO Analytics & Performance Optimization, Content SEO & User Experience, and Link Building & Authority Development. Each course includes practical projects and real-world SEO case studies."
    },
    {
      question: "Do you offer SEO certificates?",
      answer: "Yes! All our SEO courses include certificates upon completion. Professional Path participants receive professional SEO certificates, while Beginner Path includes course certificates. These can help demonstrate your SEO expertise to employers or clients."
    },
    {
      question: "What kind of SEO support do you provide?",
      answer: "We provide comprehensive SEO support including community access, SEO templates library, and for Professional Path students, 1-on-1 SEO mentorship sessions and live workshops. Corporate training includes dedicated account managers for SEO implementation guidance."
    },
    {
      question: "How long do I have access to the SEO content?",
      answer: "Beginner Path includes 6 months of access to all SEO materials, while Professional Path includes lifetime access to all SEO content and updates. This means you can learn SEO at your own pace and revisit materials whenever needed."
    },
    {
      question: "What SEO results can I expect?",
      answer: "Our SEO students typically see a 150% average increase in organic traffic and 80% improvement in search rankings within 90 days of completing our courses. However, SEO results depend on implementation, competition, and your specific business context."
    },
    {
      question: "Do you offer corporate SEO training?",
      answer: "Yes! We offer custom corporate SEO training with curriculum design tailored to your team&apos;s SEO needs, on-site SEO training options, team progress tracking, dedicated SEO account managers, and volume pricing discounts. Contact us for a custom SEO training quote."
    },
    {
      question: "How do I get started with SEO learning?",
      answer: "You can join our waitlist to be notified when SEO enrollment opens. We&apos;ll provide you with free SEO educational resources, industry case studies, and practical optimization tutorials while you wait. Simply sign up on our homepage to begin your SEO learning journey."
    },
    {
      question: "What makes MailPackr different from other SEO education platforms?",
      answer: "We focus on practical, results-driven SEO education taught by industry experts who have generated millions in organic traffic. Our SEO courses combine hands-on projects, real-world case studies, and proven optimization strategies that you can implement immediately to improve your search rankings."
    },
    {
      question: "Is there any free SEO content available?",
      answer: "Yes! We provide free SEO educational resources, industry case studies, and practical optimization tutorials. These are available to help you start learning search engine optimization fundamentals before enrolling in our comprehensive SEO programs."
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
            Find answers to common questions about our SEO optimization courses, programs, and educational resources.
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
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help! Reach out to our team for personalized SEO assistance.
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
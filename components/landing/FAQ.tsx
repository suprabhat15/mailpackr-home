"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to configure AWS SES myself?",
      answer:
        "No! MailPackr handles all the complex AWS SES configuration for you. We provide a managed service layer on top of SES, giving you the reliability of Amazon's infrastructure with the ease of use of a modern SaaS.",
    },
    {
      question: "Can I import my existing contacts?",
      answer: "Yes, you can easily import contacts via CSV",
    },
    {
      question: "Is there a limit on subscribers?",
      answer:
        "There are no limits on the number of subscribers. We only charge based on the volume of emails you send.",
    },
    {
      question: "How does domain verification work?",
      answer:
        "We guide you through setting up SPF, DKIM, and DMARC records for your domain. This ensures your emails are authenticated and significantly improves your deliverability rates.",
    },
    {
      question: "What happens if I go over my plan limit?",
      answer: "You simply pay for the extra emails at the standard rate.",
      //  We'll always notify you before you reach any critical limits.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MailPackr.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

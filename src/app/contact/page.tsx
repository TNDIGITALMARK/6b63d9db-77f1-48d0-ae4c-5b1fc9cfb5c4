'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              AURORA DIGITAL
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              <Link href="/contact" className="text-accent">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              CONTACT US
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your vision into digital reality? Let's collaborate to create something extraordinary together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Contact Form */}
              <div className="neon-border p-8 rounded-lg bg-card">
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Start Your Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="neon-border focus:neon-glow transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="neon-border focus:neon-glow transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="neon-border focus:neon-glow transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="neon-border focus:neon-glow transition-all duration-300 min-h-[150px]"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full neon-glow text-lg py-6"
                  >
                    Send Project Inquiry
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="neon-border p-8 rounded-lg bg-card">
                  <h3 className="text-2xl font-bold mb-6 text-accent">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-accent rounded"></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground">hello@auroradigital.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-primary rounded"></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-accent rounded"></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="neon-border p-8 rounded-lg bg-card">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="neon-border hover:neon-glow justify-start">
                      <span className="text-accent">→</span>
                      <span className="ml-2">Twitter</span>
                    </Button>
                    <Button variant="outline" className="neon-border hover:neon-glow justify-start">
                      <span className="text-primary">→</span>
                      <span className="ml-2">LinkedIn</span>
                    </Button>
                    <Button variant="outline" className="neon-border hover:neon-glow justify-start">
                      <span className="text-accent">→</span>
                      <span className="ml-2">Instagram</span>
                    </Button>
                    <Button variant="outline" className="neon-border hover:neon-glow justify-start">
                      <span className="text-primary">→</span>
                      <span className="ml-2">GitHub</span>
                    </Button>
                  </div>
                </div>

                <div className="neon-border p-8 rounded-lg bg-card">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Response Time</h3>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent projects,
                    please call us directly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email Response:</span>
                      <span className="text-accent font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone Response:</span>
                      <span className="text-primary font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Quote:</span>
                      <span className="text-accent font-medium">48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="neon-border p-6 rounded-lg bg-card">
                <h3 className="text-lg font-bold mb-3 text-accent">What's your typical project timeline?</h3>
                <p className="text-muted-foreground text-sm">
                  Most projects take 2-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div className="neon-border p-6 rounded-lg bg-card">
                <h3 className="text-lg font-bold mb-3 text-primary">Do you offer ongoing support?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We provide maintenance packages and ongoing support to keep your digital presence running smoothly.
                </p>
              </div>
              <div className="neon-border p-6 rounded-lg bg-card">
                <h3 className="text-lg font-bold mb-3 text-accent">What technologies do you use?</h3>
                <p className="text-muted-foreground text-sm">
                  We use cutting-edge technologies including React, Next.js, Node.js, and modern design tools to deliver exceptional results.
                </p>
              </div>
              <div className="neon-border p-6 rounded-lg bg-card">
                <h3 className="text-lg font-bold mb-3 text-primary">Can you work with existing brands?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! We can enhance existing brand identities or create completely new visual systems based on your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Explore Our Work
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take a look at our recent projects to see the quality and innovation we bring to every client
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <Button size="lg" className="neon-glow text-lg px-8 py-4">
                  View Portfolio
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="neon-border text-lg px-8 py-4">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
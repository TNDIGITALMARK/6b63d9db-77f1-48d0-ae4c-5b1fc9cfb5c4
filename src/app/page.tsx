export const dynamic = 'force-dynamic'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              AURORA DIGITAL
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(/generated/hero-cityscape.png)'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/40"></div>

        {/* Gradient overlay matching design reference */}
        <div className="absolute inset-0 city-overlay"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">INNOVATION</span>
            <br />
            <span className="text-foreground">UNLEASHED</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into digital realities with cutting-edge design and immersive experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-glow text-lg px-8 py-6">
              DISCOVER MORE
            </Button>
            <Button variant="outline" size="lg" className="neon-border text-lg px-8 py-6">
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">OUR SERVICES</h2>
            <p className="text-xl text-muted-foreground">Pushing boundaries of digital innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="neon-border p-8 rounded-lg transition-all duration-300 hover:scale-105 bg-card">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <div className="w-8 h-8 bg-accent rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">WEB DEVELOPMENT</h3>
                <p className="text-muted-foreground">Modern, responsive websites built with cutting-edge technologies</p>
                <Button variant="link" className="mt-4 p-0 text-accent">VIEW ALL SERVICES →</Button>
              </div>
            </div>

            <div className="group">
              <div className="neon-border p-8 rounded-lg transition-all duration-300 hover:scale-105 bg-card">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">CLOUD SOLUTIONS</h3>
                <p className="text-muted-foreground">Scalable cloud infrastructure and deployment solutions</p>
                <Button variant="link" className="mt-4 p-0 text-primary">VIEW ALL SERVICES →</Button>
              </div>
            </div>

            <div className="group">
              <div className="neon-border p-8 rounded-lg transition-all duration-300 hover:scale-105 bg-card">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <div className="w-8 h-8 bg-accent rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">CREATIVE DESIGN</h3>
                <p className="text-muted-foreground">Stunning visual designs that captivate and engage audiences</p>
                <Button variant="link" className="mt-4 p-0 text-accent">VIEW ALL SERVICES →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 gradient-text">PORTFOLIO</h2>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                READY TO START YOUR PROJECT?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let's bring your vision to life with our expertise in modern web development and design
              </p>
              <Link href="/gallery">
                <Button size="lg" className="neon-glow text-lg px-8 py-4">
                  VIEW FULL PORTFOLIO
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="neon-border p-4 rounded-lg bg-card hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
                  <h4 className="font-bold text-accent">Project Alpha</h4>
                </div>
                <div className="neon-border p-4 rounded-lg bg-card hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4"></div>
                  <h4 className="font-bold text-primary">Project Beta</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export const dynamic = 'force-dynamic'

import { Button } from "@/components/ui/button"
import { MorphingCard } from "@/components/ui/morphing-card"
import { AnimatedIcon } from "@/components/ui/animated-icon"
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
        className="hero-section relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/generated/hero-cityscape.png)'
        }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background animate-pulse"></div>

        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-gradient"></div>

        {/* Gradient overlay matching design reference */}
        <div className="absolute inset-0 city-overlay"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block">INNOVATION</span>
            <br />
            <span className="text-foreground hover:text-accent/80 transition-colors duration-300">UNLEASHED</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Transforming visions into digital realities with cutting-edge design and immersive experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button size="lg" className="neon-glow hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
              DISCOVER MORE
            </Button>
            <Button variant="outline" size="lg" className="neon-border hover:bg-accent/10 hover:border-accent/70 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>

        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'w-3 h-3 bg-primary/40' :
                i % 3 === 1 ? 'w-2 h-2 bg-accent/50' :
                'w-1 h-1 bg-secondary/60'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(0.5px)'
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
            <MorphingCard variant="neon" className="animate-fade-in-up">
              <div className="p-8">
                <AnimatedIcon variant="accent" size="lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-accent/90 transition-colors duration-300">WEB DEVELOPMENT</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Modern, responsive websites built with cutting-edge technologies</p>
                <Button variant="link" className="p-0 text-accent hover:text-accent/80 group-hover:translate-x-2 transition-all duration-300">
                  VIEW ALL SERVICES →
                </Button>
              </div>
            </MorphingCard>

            <MorphingCard variant="gradient" className="animate-fade-in-up animation-delay-100">
              <div className="p-8">
                <AnimatedIcon variant="primary" size="lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                  </svg>
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/90 transition-colors duration-300">CLOUD SOLUTIONS</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Scalable cloud infrastructure and deployment solutions</p>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80 group-hover:translate-x-2 transition-all duration-300">
                  VIEW ALL SERVICES →
                </Button>
              </div>
            </MorphingCard>

            <MorphingCard variant="glass" className="animate-fade-in-up animation-delay-200">
              <div className="p-8">
                <AnimatedIcon variant="secondary" size="lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-4 text-secondary group-hover:text-secondary/90 transition-colors duration-300">CREATIVE DESIGN</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Stunning visual designs that captivate and engage audiences</p>
                <Button variant="link" className="p-0 text-secondary hover:text-secondary/80 group-hover:translate-x-2 transition-all duration-300">
                  VIEW ALL SERVICES →
                </Button>
              </div>
            </MorphingCard>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 gradient-text hover:scale-105 transition-transform duration-300 inline-block">PORTFOLIO</h2>
              <h3 className="text-3xl font-bold mb-6 text-foreground leading-tight">
                READY TO START YOUR <span className="gradient-text">PROJECT</span>?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's bring your vision to life with our expertise in modern web development and design
              </p>
              <Link href="/gallery">
                <Button size="lg" className="neon-glow hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-4">
                  VIEW FULL PORTFOLIO
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 animate-fade-in-up animation-delay-200">
              <div className="grid grid-cols-2 gap-6">
                <MorphingCard variant="gradient" className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg mb-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                  <h4 className="font-bold text-accent group-hover:text-accent/90 transition-colors duration-300">Project Alpha</h4>
                </MorphingCard>
                <MorphingCard variant="glass" className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg mb-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                  <h4 className="font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">Project Beta</h4>
                </MorphingCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
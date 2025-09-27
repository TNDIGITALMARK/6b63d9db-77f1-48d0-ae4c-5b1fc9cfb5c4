'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Neural Interface Dashboard",
    category: "UI/UX Design",
    image: "/generated/portfolio-1.png",
    description: "Futuristic dashboard interface with holographic data visualization and real-time analytics",
    tags: ["Web Design", "UI/UX", "Data Visualization"]
  },
  {
    id: 2,
    title: "Neon Architecture",
    category: "Digital Art",
    image: "/generated/portfolio-2.png",
    description: "Modern architectural photography enhanced with neon lighting effects and urban aesthetics",
    tags: ["Photography", "Architecture", "Digital Art"]
  },
  {
    id: 3,
    title: "Abstract Energy Flow",
    category: "Creative Design",
    image: "/generated/portfolio-3.png",
    description: "Abstract digital artwork featuring flowing energy streams and geometric patterns",
    tags: ["Abstract Art", "Digital Design", "Motion Graphics"]
  },
  {
    id: 4,
    title: "Cyber Security Platform",
    category: "Web Development",
    image: "/generated/hero-cityscape.png",
    description: "Comprehensive security dashboard with threat monitoring and real-time protection systems",
    tags: ["Web App", "Security", "Dashboard"]
  },
  {
    id: 5,
    title: "Corporate Identity System",
    category: "Branding",
    image: "/generated/portfolio-1.png",
    description: "Complete brand identity package with logo design, color systems, and brand guidelines",
    tags: ["Branding", "Logo Design", "Identity"]
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/generated/portfolio-2.png",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and user analytics",
    tags: ["E-commerce", "React", "Full Stack"]
  }
]

const categories = ["All", "UI/UX Design", "Web Development", "Digital Art", "Creative Design", "Branding"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

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
              <Link href="/gallery" className="text-accent">Gallery</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              OUR PORTFOLIO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of innovative digital experiences, cutting-edge designs, and transformative web solutions
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "neon-glow" : "neon-border hover:neon-glow"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="neon-border rounded-lg overflow-hidden bg-card hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-xs px-3 py-1 bg-accent/80 text-accent-foreground rounded-full font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative design and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="neon-glow text-lg px-8 py-4">
                  Start Your Project
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

      {/* Modal for detailed view */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-card neon-border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                className="absolute top-4 right-4 text-white bg-background/50 hover:bg-background/70"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  {selectedItem.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                {selectedItem.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted/50 text-muted-foreground rounded border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
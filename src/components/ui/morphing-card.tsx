"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MorphingCardProps {
  children: ReactNode
  variant?: "gradient" | "solid" | "glass" | "neon"
  className?: string
}

export function MorphingCard({ children, variant = "gradient", className }: MorphingCardProps) {
  const baseClasses = "group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-105"

  const variantClasses = {
    gradient: "bg-gradient-to-br from-card/50 to-card border border-accent/20 hover:border-accent/50",
    solid: "bg-card border border-border hover:border-accent/50",
    glass: "backdrop-blur-md bg-card/30 border border-accent/20 hover:border-accent/50",
    neon: "neon-border bg-card hover:shadow-lg hover:shadow-accent/20"
  }

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
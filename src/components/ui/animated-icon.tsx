"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  children: ReactNode
  variant?: "primary" | "accent" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function AnimatedIcon({
  children,
  variant = "accent",
  size = "md",
  className
}: AnimatedIconProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  }

  const variantClasses = {
    primary: "bg-primary/20 text-primary group-hover:bg-primary/30",
    accent: "bg-accent/20 text-accent group-hover:bg-accent/30",
    secondary: "bg-secondary/20 text-secondary group-hover:bg-secondary/30"
  }

  return (
    <div className={cn(
      "rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 neon-glow",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <div className="transition-transform duration-300 group-hover:rotate-12">
        {children}
      </div>
    </div>
  )
}
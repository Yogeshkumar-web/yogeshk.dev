"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Full-stack developer passionate about building exceptional digital experiences.
          Specialized in React, Next.js, and modern web technologies.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/yourusername" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="mailto:your@email.com">
            <Mail className="h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}

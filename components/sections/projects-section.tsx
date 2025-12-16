"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  tags: string
  demoUrl?: string
  repoUrl?: string
  featured: boolean
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="container py-8 md:py-16">
      <h2 className="section-heading">
        Projects <span className="text-muted-foreground text-xl font-normal">({projects.length})</span>
      </h2>
      <div className="mt-8 space-y-4">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  {project.imageUrl && (
                    <div className="h-8 w-8 rounded bg-muted flex items-center justify-center text-xl">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-secondary px-2 py-1 text-xs font-medium"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                {project.demoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.demoUrl} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.repoUrl} target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"} ↓
          </Button>
        </div>
      )}
    </section>
  )
}

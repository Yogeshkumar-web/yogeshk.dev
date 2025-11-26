"use client"

import { Github } from "lucide-react"
import Link from "next/link"

export function GitHubOverview() {
  // These can be fetched from GitHub API in the future
  const stats = {
    stars: "1.1K",
    username: "yourusername",
  }

  return (
    <section id="github" className="container py-12 md:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        GitHub Overview
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={`https://github.com/${stats.username}`}
          target="_blank"
          className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <Github className="h-12 w-12" />
            <div>
              <p className="text-sm text-muted-foreground">GitHub Stars</p>
              <p className="text-3xl font-bold">{stats.stars}</p>
            </div>
          </div>
        </Link>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-2">Contribution Graph</p>
          <div className="h-32 rounded bg-muted flex items-center justify-center text-muted-foreground">
            GitHub Contribution Graph Placeholder
          </div>
        </div>
      </div>
    </section>
  )
}

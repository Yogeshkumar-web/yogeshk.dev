"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { BlogPost } from "@/types/blog"

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="container py-8 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading mb-0">
          Blog
        </h2>
        <Button variant="ghost" asChild>
          <Link href="/blog">
            All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
          >
              <div className="space-y-2">
                {/* Image placeholder removed as requested */}
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.content.substring(0, 150)}...
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

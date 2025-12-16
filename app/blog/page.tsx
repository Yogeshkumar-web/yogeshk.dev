import Link from "next/link"
import { getPublishedPosts } from "@/app/actions/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmptyState } from "@/components/ui/empty-state"

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <div className="container py-12 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights about web development.
        </p>
      </div>

      {posts.length === 0 ? (
        <EmptyState
          title="No posts found"
          description="Check back later for new content!"
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.content.replace(/[#*`]/g, "").slice(0, 150)}...
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

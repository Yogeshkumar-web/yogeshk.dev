import { getTechStack, deleteTechStack } from "@/app/actions/tech-stack"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, Pencil, Trash2 } from "lucide-react"

export default async function TechStackPage() {
  const techStack = await getTechStack()
  const categories = Array.from(new Set(techStack.map((t) => t.category)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tech Stack</h1>
          <p className="text-muted-foreground">
            Manage your technology stack
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/tech-stack/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Technology
          </Link>
        </Button>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-lg font-semibold">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack
              .filter((t) => t.category === category)
              .map((tech) => (
                <Card key={tech.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <CardTitle className="text-base">{tech.name}</CardTitle>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/tech-stack/${tech.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <form
                          action={async () => {
                            "use server"
                            await deleteTechStack(tech.id)
                          }}
                        >
                          <Button variant="outline" size="sm" type="submit">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </div>
      ))}

      {techStack.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No technologies added yet</p>
            <Button asChild className="mt-4">
              <Link href="/admin/tech-stack/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Technology
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

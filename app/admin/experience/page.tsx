import { getExperiences, deleteExperience } from "@/app/actions/experience"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, Pencil, Trash2 } from "lucide-react"

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted-foreground">
            Manage your work experience
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/experience/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Experience
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{exp.company}</CardTitle>
                  <p className="text-sm font-medium">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {exp.startDate} - {exp.endDate || "Present"}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/experience/${exp.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <form
                    action={async () => {
                      "use server"
                      await deleteExperience(exp.id)
                    }}
                  >
                    <Button variant="outline" size="sm" type="submit">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {exp.tags.split(",").map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-secondary px-2 py-1 text-xs"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {experiences.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground">No experience added yet</p>
              <Button asChild className="mt-4">
                <Link href="/admin/experience/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Experience
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

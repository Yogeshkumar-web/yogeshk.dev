import { getExperience, updateExperience } from "@/app/actions/experience"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default async function EditExperiencePage({
  params,
}: {
  params: { id: string }
}) {
  const experience = await getExperience(params.id)

  if (!experience) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/experience">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Experience</h1>
          <p className="text-muted-foreground">Update experience details</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Experience Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server"
              await updateExperience(params.id, formData)
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  defaultValue={experience.company}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Input
                  id="role"
                  name="role"
                  defaultValue={experience.role}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                defaultValue={experience.location || ""}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  defaultValue={experience.startDate}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  defaultValue={experience.endDate || ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                rows={6}
                defaultValue={experience.description}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tech Stack (comma separated)</Label>
              <Input
                id="tags"
                name="tags"
                defaultValue={experience.tags}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo (emoji or URL)</Label>
                <Input
                  id="logo"
                  name="logo"
                  defaultValue={experience.logo || ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Order</Label>
                <Input
                  id="order"
                  name="order"
                  type="number"
                  defaultValue={experience.order}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit">Update Experience</Button>
              <Button variant="outline" asChild>
                <Link href="/admin/experience">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

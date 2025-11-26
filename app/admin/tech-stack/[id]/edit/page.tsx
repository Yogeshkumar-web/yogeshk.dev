import { getTechStackItem, updateTechStack } from "@/app/actions/tech-stack"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default async function EditTechStackPage({
  params,
}: {
  params: { id: string }
}) {
  const tech = await getTechStackItem(params.id)

  if (!tech) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/tech-stack">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Technology</h1>
          <p className="text-muted-foreground">Update technology details</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Technology Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server"
              await updateTechStack(params.id, formData)
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                defaultValue={tech.name}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                name="category"
                defaultValue={tech.category}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon">Icon (emoji) *</Label>
              <Input
                id="icon"
                name="icon"
                defaultValue={tech.icon}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="order">Order</Label>
              <Input
                id="order"
                name="order"
                type="number"
                defaultValue={tech.order}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit">Update Technology</Button>
              <Button variant="outline" asChild>
                <Link href="/admin/tech-stack">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

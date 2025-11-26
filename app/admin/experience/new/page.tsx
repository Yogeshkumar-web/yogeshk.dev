import { createExperience } from "@/app/actions/experience"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewExperiencePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/experience">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Experience</h1>
          <p className="text-muted-foreground">
            Add a new work experience
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Experience Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createExperience} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Input id="role" name="role" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="Full-time, Remote" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  placeholder="10-2022"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  placeholder="Leave empty for current position"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                rows={6}
                placeholder="• Bullet point 1&#10;• Bullet point 2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tech Stack (comma separated)</Label>
              <Input
                id="tags"
                name="tags"
                placeholder="React, TypeScript, Node.js"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo (emoji or URL)</Label>
                <Input id="logo" name="logo" placeholder="🏢" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Order</Label>
                <Input
                  id="order"
                  name="order"
                  type="number"
                  defaultValue="0"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit">Create Experience</Button>
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

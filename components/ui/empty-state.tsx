import { AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
        <CardTitle className="mb-2">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}
        {action}
      </CardContent>
    </Card>
  )
}

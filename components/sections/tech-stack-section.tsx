"use client"

interface TechStack {
  id: string
  name: string
  category: string
  icon: string
}

export function TechStackSection({ techStack }: { techStack: TechStack[] }) {
  const categories = Array.from(new Set(techStack.map((t) => t.category)))

  return (
    <section id="stack" className="container py-12 md:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Stack
      </h2>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {techStack
                .filter((t) => t.category === category)
                .map((tech) => (
                  <div
                    key={tech.id}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border bg-card transition-all hover:scale-110 hover:shadow-md"
                    title={tech.name}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

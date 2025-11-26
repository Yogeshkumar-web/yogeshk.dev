"use client"

interface Experience {
  id: string
  company: string
  role: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  tags: string
  logo?: string
}

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="container py-12 md:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative border-l-2 border-border pl-8 pb-8">
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-border bg-background" />
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-xl">
                      {exp.company.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{exp.location}</p>
                  <p>
                    {exp.startDate} - {exp.endDate || "∞"}
                  </p>
                </div>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br/>') }} />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.split(",").map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

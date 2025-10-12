import type * as React from "react"

type LegalPageProps = {
  title: string
  description?: string
  children: React.ReactNode
}

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <main className="w-full">
      <section className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-xl md:text-3xl font-semibold tracking-tight text-balance">{title}</h1>
          {description ? <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">{description}</p> : null}
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>
      </section>
    </main>
  )
}

type LegalSectionProps = {
  title: string
  children: React.ReactNode
  id?: string
}

export function LegalSection({ title, children, id }: LegalSectionProps) {
  return (
    <section id={id} className="mt-8">
      <h2 className="text-base md:text-xl font-semibold mb-2">{title}</h2>
      <div className="leading-relaxed">{children}</div>
    </section>
  )
}

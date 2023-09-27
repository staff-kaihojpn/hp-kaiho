export default function HelpLayout({children}: { children: React.ReactNode }) {
  return (
    <article className="prose prose-stone mx-auto px-6">
      {children}
    </article>
  )
}


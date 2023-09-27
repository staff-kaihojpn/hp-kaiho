export default function HelpLayout({children}: { children: React.ReactNode }) {
  return (
    <article className="prose mx-auto px-6">
      {children}
    </article>
  )
}


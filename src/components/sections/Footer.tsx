const LINKS = ['Privacy', 'Terms', 'Contact']

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-8 py-12 text-sm md:flex-row md:px-28">
      <p className="text-muted-foreground">
        © 2026 Mindloop. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        {LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

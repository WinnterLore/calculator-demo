import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { LogoMark } from '@/components/Logo'

const NAV_LINKS = ['Home', 'How It Works', 'Philosophy', 'Use Cases']

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 md:px-28">
      <a href="#" className="flex items-center gap-2">
        <LogoMark outerClassName="w-7 h-7" innerClassName="w-3 h-3" />
        <span className="text-lg font-bold tracking-tight">Mindloop</span>
      </a>

      <nav className="hidden items-center gap-3 text-sm text-muted-foreground md:flex">
        {NAV_LINKS.map((link, i) => (
          <span key={link} className="flex items-center gap-3">
            <a href="#" className="transition-colors hover:text-foreground">
              {link}
            </a>
            {i < NAV_LINKS.length - 1 && <span className="text-muted-foreground/50">•</span>}
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </header>
  )
}

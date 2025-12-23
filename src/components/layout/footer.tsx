import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-accent/50">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">^ J ^</div>
          <p className="text-sm font-bold">John Doe</p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Raj Kashyap. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

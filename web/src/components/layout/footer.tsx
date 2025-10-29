import Link from "next/link";
import { brandConfig } from "@/lib/brand-kit";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">{brandConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {brandConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#hosting" className="text-muted-foreground hover:text-primary transition-colors">Hosting</Link></li>
              <li><Link href="#maintenance" className="text-muted-foreground hover:text-primary transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="mailto:info@friendlyweb.co" className="text-muted-foreground hover:text-primary transition-colors">info@friendlyweb.co</Link></li>
              <li><span className="text-muted-foreground">Available for projects</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {brandConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

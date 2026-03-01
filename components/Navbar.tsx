import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.svg" alt="Logo" width={32} height={32} />
        </Link>
        <div className="flex gap-6 text-sm text-text-secondary">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
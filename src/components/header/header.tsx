import Link from 'next/link';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-orange-accent font-extrabold text-2xl tracking-tighter hover:text-orange-400 transition-colors">
          Ben Andrews
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <Link href="/services" className="hover:text-orange-accent transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-orange-accent transition-colors">Portfolio</Link>
          <Link href="/posts" className="hover:text-orange-accent transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-orange-accent transition-colors">About</Link>
          <Link href="/contact" className="hover:text-orange-accent transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
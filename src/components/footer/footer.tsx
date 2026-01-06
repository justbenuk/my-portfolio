import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8 px-6 md:px-8 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="hover:text-orange-accent transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">Twitter</Link>
        </div>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}


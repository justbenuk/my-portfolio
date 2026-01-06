import Link from "next/link";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8 px-6 md:px-8 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Ben Andrews. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/justbenuk" target="_blank" className="hover:text-orange-accent transition-colors">
          <FaGithub />
          </Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">
          <FaLinkedin />
          </Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">
          <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">
          <FaDiscord />
          </Link>
          <Link href="#" className="hover:text-orange-accent transition-colors">
          <FaWhatsapp />
          </Link>
           <Link href="#" className="hover:text-orange-accent transition-colors">
          <FaFacebook />
          </Link>
        </div>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}


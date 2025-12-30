import Link from "next/link";
import Pagecontainer from "../shared/page-container";
import { MAINMENU, SUPPORTMENU } from "@/data/menu";
import { FaArrowRightLong, FaDiscord, FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-muted">
      <Pagecontainer>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="font-bold text-orange-400 flex flex-row items-center gap-2">
                <FaArrowRightLong />
                <span>Links</span>
              </h1>
              <nav className="flex flex-col md:pl-6 space-y-2">
                {MAINMENU.map((main) => (
                  <Link key={main.href} href={main.href}>{main.name}</Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-orange-400 flex flex-row items-center gap-2">
                <FaArrowRightLong />
                <span>Support</span>
              </h1>
              <nav className="flex flex-col md:pl-6 space-y-2">
                {SUPPORTMENU.map((support) => (
                  <Link key={support.href} href={support.href}>{support.name}</Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-orange-400 flex flex-row items-center gap-2">
              <FaArrowRightLong />
              <span>Newsletter</span>
            </h1>
          </div>
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h1 className="font-bold text-orange-400 flex flex-row items-center gap-2">
              <FaArrowRightLong />
              <span>Socials</span>
            </h1>
            <p className="md:pl-6"> Get real-time updates on my projects, what I&apos;m working on currently or any other important information</p>
            <div className="flex flex-row gap-2 items-center md:pl-6">
              <Link href={'/'} className="bg-neutral-700 rounded p-3">
                <FaFacebookF className="size-5 text-orange-400" />
              </Link>
              <Link href={'/'} className="bg-neutral-700 rounded p-3">
                <FaTwitter className="size-5 text-orange-400" />
              </Link>
              <Link href={'/'} className="bg-neutral-700 rounded p-3">
                <FaWhatsapp className="size-5 text-orange-400" />
              </Link>
              <Link href={'/'} className="bg-neutral-700 rounded p-3">
                <FaDiscord className="size-5 text-orange-400" />
              </Link>
              <Link href={'/'} className="bg-neutral-700 rounded p-3">
                <FaGithub className="size-5 text-orange-400" />
              </Link>
            </div>
          </div>

        </div>
        <div className="py-4 border-t border-gray-950">
          <div className="flex flex-row items-center justify-between text-xs">
            <p>&copy; Ben Andrews - All Rights Reserved</p>
          </div>
        </div>
      </Pagecontainer>
    </footer>
  )
}


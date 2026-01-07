import Link from "next/link";

interface MenuItemProps {
  href: string
  name: string
}

export default function MenuItem({ name, href }: MenuItemProps) {
  return (
    <Link href={href} className="hover:text-orange-400 transition-colors">{name}</Link>
  )
}


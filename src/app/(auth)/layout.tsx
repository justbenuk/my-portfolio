import { RootProps } from "@/types"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
export default function AuthLayout({ children }: RootProps) {
  return (
    <div className="grid min-h-svh bg-neutral-950">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-teal-500 text-white flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Ben Andrews
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


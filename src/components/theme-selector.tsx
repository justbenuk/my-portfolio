'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button onClick={() => setTheme('light')} className={cn('h-28 w-full lg:h-32 lg:w-56 bg-gray-200 text-gray-950')}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <SunIcon className="lg:size-12" />
          <span className="font-semibold">Light</span>
        </div>
      </Button>
      <Button onClick={() => setTheme('dark')} className={cn('h-28 w-full lg:h-32 lg:w-56 bg-neutral-950 dark:border text-white')}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <MoonIcon className="lg:size-12" />
          <span className="font-semibold">Dark</span>
        </div>
      </Button>
    </div>
  )
}


import { RootProps } from "@/types"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export default function ThemeProvider({ children }: RootProps) {
  return (
    <NextThemeProvider>{children}</NextThemeProvider>
  )
}


import Footer from "@/components/footer/footer";
import { RootProps } from "@/types";

export default function MainLayout({ children }: RootProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>header</div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}


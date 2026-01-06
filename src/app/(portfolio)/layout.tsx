import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { RootProps } from "@/types";

export default function MainLayout({ children }: RootProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen main-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}


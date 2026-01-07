import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { RootProps } from "@/types";

export default function MainLayout({ children }: RootProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen main-background">
      <Header />
      <main className="min-h-[calc(100vh-120px)] max-w-7xl mx-auto px-6 md:px-8 py-12"> {/* Adjust padding as needed */}
          {children}
        </main>
      <Footer />
    </div>
  )
}


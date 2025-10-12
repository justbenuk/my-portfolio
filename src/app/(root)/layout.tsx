import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { RootProps } from "@/types";

export default function RootLayout({ children }: RootProps) {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col justify-between text-gray-400">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

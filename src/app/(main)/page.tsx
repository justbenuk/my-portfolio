import Pagecontainer from "@/components/shared/page-container";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Pagecontainer className="mb-32">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
        Building Digital Solutions <br />
        <span className="text-orange-500 italic">from the Ground Up.</span>
      </h1>
      <p className="text-gray-400 max-w-xl text-lg mb-8">
        Self-taught developer specializing in high-performance web applications.
        I turn complex logic into seamless, amber-tinted user experiences.
      </p>
      <div className="flex gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
          View My Work <ArrowRight size={18} />
        </button>
        <button className="border border-gray-700 hover:border-orange-500 px-8 py-3 rounded-full font-bold transition-all">
          Get In Touch
        </button>
      </div>
    </Pagecontainer>
  );
}

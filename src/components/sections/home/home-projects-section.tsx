import Pagecontainer from "@/components/shared/page-container";
import { PROJECTPOSTS } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeProjectsSection() {
  return (
    <Pagecontainer className="py-24">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="flex flex-row items-center justify-center gap-2">
          <FaArrowRightLong className="text-orange-400" />
          <span className="font-bold">Projects</span>
        </h1>
        <h1 className="text-5xl font-bold">My Portfolio</h1>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-0">
        {PROJECTPOSTS.map((item) => (
          <Link href={'/'} key={item.id}>
            <div className="rounded-2xl overflow-hidden">
              <Image src={item.image} alt={item.slug} height={400} width={400} className="w-full h-auto" />
              <h3 className="absolute top-3 rounded-full px-3 py-1 left-4 bg-orange-500">{item.category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Pagecontainer>
  )
}


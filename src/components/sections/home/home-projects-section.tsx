import Pagecontainer from "@/components/shared/page-container";
import { PROJECTPOSTS } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeProjectsSection() {
  return (
    <div className="bg-orange-100 py-12">
      <Pagecontainer>
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="flex flex-row items-center justify-center gap-2">
            <FaArrowRightLong className="text-orange-400" />
            <span className="font-bold">Projects</span>
          </h1>
          <h1 className="text-5xl font-bold">My Portfolio</h1>
        </div>
        <div className="p-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-4">
            {PROJECTPOSTS.map((item) => (
              <div
                key={item.id}
                className='border border-gray-950 p-8 rounded-2xl space-y-4 bg-white mb-4 break-inside-avoid'
              >
                <Image src={item.image} alt={item.slug} height={400} width={400} className="w-auto h-auto" />
                <h3 className="uppercase">{item.category}</h3>
                <h3 className="font-bold">{item.title}</h3>
                <Link href={item.slug} className="flex flex-row items-center justify-end gap-2 text-orange-400">
                  <FaArrowRightLong />
                  <span className="font-semibold">Read More</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Pagecontainer>
    </div>
  )
}


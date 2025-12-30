import Pagecontainer from "@/components/shared/page-container";
import { BLOGPOSTS } from "@/data/posts";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeBlogSection() {
  return (
    <Pagecontainer className="py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="flex flex-row items-center justify-center gap-2">
          <FaArrowRightLong className="text-orange-400" />
          <span className="font-bold">Blog</span>
        </h1>
        <h1 className="text-5xl font-bold">My Recent Posts</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {BLOGPOSTS.map((post) => (
          <div key={post.id} className="border rounded-2xl">
            <div className="p-6 space-y-4">
              <Image src={post.image} alt={post.slug} width={500} height={500} className="rounded-2xl overflow-hidden w-full" />
              <h3 className="uppercase font-semibold text-orange-400">{post.category}</h3>
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </Pagecontainer>
  )
}


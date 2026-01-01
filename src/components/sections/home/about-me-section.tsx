import Pagecontainer from "@/components/shared/page-container";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutMeSction() {
  return (
    <Pagecontainer className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex flex-col items-start justify-start mb-12">
            <h1 className="flex flex-row items-center justify-center gap-2">
              <FaArrowRightLong className="text-orange-400" />
              <span className="font-bold">About Me</span>
            </h1>
            <h1 className="text-5xl font-bold lg:w-4/5">I build custom Web Applications in my free time</h1>
          </div>
          <p>Hi, I’m a self-taught developer with a passion for building custom web apps using Next.js. This portfolio is a collection of my work—feel free to take a look around!</p>
          <p>Whether you&apos;re inspired by one of my projects or need a custom solution built from scratch, I&apos;m here to help. I know how tough it can be to launch a brand online, so I focus on making &apos;dream websites&apos; accessible without the massive price tag. Also, if you&apos;re a charity in need of a web presence, please reach out, I&apos;d love to support your mission.</p>
        </div>
        <div>image</div>
      </div>
    </Pagecontainer>
  )
}


import Pagecontainer from "@/components/shared/page-container"
import { FaHeadset, FaMobile, FaPoundSign } from "react-icons/fa"
import { FaArrowRightLong, FaPencil } from "react-icons/fa6"

export default function HomeServicesSection() {
  return (
    <Pagecontainer>
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="flex flex-row items-center justify-center gap-2">
          <FaArrowRightLong className="text-orange-400" />
          <span className="font-bold">Services</span>
        </h1>
        <h1 className="text-5xl font-bold">My Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        <div className="border border-orange-400 rounded-2xl p-10 space-y-4">
          <div className="flex rounded">
            <div className="p-4 bg-orange-100">
              <FaPencil className="size-5 text-orange-400" />
            </div>
          </div>
          <h1 className="font-bold text-2xl">Web Design</h1>
          <p className="text-muted-foreground">I admit I am no designer, But I can turn your dream into a fully functioning custom web app</p>
        </div>
        <div className="border border-orange-400 rounded-2xl p-10 space-y-4">
          <div className="flex rounded">
            <div className="p-4 bg-orange-100">
              <FaMobile className="size-5 text-orange-400" />
            </div>
          </div>
          <h1 className="font-bold text-2xl">Mobile Responsive</h1>
          <p className="text-muted-foreground">Every I build will work flawlessly on all devices, from mobile phones to your desktop</p>
        </div>
        <div className="border border-orange-400 rounded-2xl p-10 space-y-4">
          <div className="flex rounded">
            <div className="p-4 bg-orange-100">
              <FaHeadset className="size-5 text-orange-400" />
            </div>
          </div>
          <h1 className="font-bold text-2xl">Support</h1>
          <p className="text-muted-foreground">I offer support for all new and existing projects. If you need help get in touch</p>
        </div>
        <div className="border border-orange-400 rounded-2xl p-10 space-y-4">
          <div className="flex rounded">
            <div className="p-4 bg-orange-100">
              <FaPoundSign className="size-5 text-orange-400" />
            </div>
          </div>
          <h1 className="font-bold text-2xl">Charity</h1>
          <p className="text-muted-foreground">I am happy to support charity&apos;s and non-profits. If you need help, let me know</p>
        </div>
      </div>
    </Pagecontainer>
  )
}


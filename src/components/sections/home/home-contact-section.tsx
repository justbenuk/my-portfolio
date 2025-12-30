import Pagecontainer from "@/components/shared/page-container";
import FrontContactForm from "@/forms/contact/front-contact-form";
import Link from "next/link";
import { FaArrowRightLong, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function HomeContactSection() {
  return (
    <Pagecontainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="font-semibold flex flex-row items-center gap-2">
            <FaArrowRightLong className="text-orange-400" />
            <span>Contact Me</span>
          </h3>
          <h1 className="font-bold text-5xl lg:w-4/5">Need help? Get in touch now</h1>
          <div className="mt-10 flex flex-col space-y-8">
            <Link href={'/'}>
              <div className="flex flex-row items-center gap-4">
                <div className="bg-orange-100 p-4 rounded">
                  <FaPhone className="size-5 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-muted-foreground">Phone</h3>
                  <p className="font-bold lg:text-2xl">07916 019 809</p>
                </div>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-row items-center gap-4">
                <div className="bg-orange-100 p-4 rounded">
                  <FaEnvelope className="size-5 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-muted-foreground">Email</h3>
                  <p className="font-bold lg:text-2xl">justbenuk@gmail.com</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <FrontContactForm />
        </div>
      </div>
    </Pagecontainer>
  )
}


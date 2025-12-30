import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPlane } from "react-icons/fa6";

export default function FrontContactForm() {
  return (
    <div>
      <form className="grid gap-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Input placeholder='name' className="border-orange-400 p-6" />
          <Input placeholder='email' className="border-orange-400 p-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Input placeholder='phone' className="border-orange-400 p-6" />
          <Input placeholder='subject' className="border-orange-400 p-6" />
        </div>
        <div className="h-full">
          <Textarea className="h-40 border-orange-400" placeholder="Message" />
        </div>
        <div className="flex flex-row items-center justify-end">
          <Button className="bg-orange-400" size={'lg'}>
            <FaPlane />
            <span>Send Message</span>
          </Button>
        </div>
      </form>
    </div>
  )
}


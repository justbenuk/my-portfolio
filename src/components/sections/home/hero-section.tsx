import Pagecontainer from "@/components/shared/page-container";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <Pagecontainer className="py-24">
      <Card className="border-orange-400">
        <CardContent className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="">
                <h1 className="uppercase">Welcome</h1>
              </div>
              <h1 className="font-semibold text-3xl lg:text-5xl capitalize">I build custom web apps</h1>
              <p>Freelance Web Developer Based In The Midlands</p>
            </div>
            <div>Image</div>
          </div>
        </CardContent>
      </Card>
    </Pagecontainer>

  )
}


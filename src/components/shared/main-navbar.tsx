import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import MainMenuList from "./main-menu-list";

export default function MainNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={'icon'}
          className="hover:bg-teal-500/10 transition-colors duration-200"
        >
          <MenuIcon className="size-6 text-teal-400" />
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-effect border-l border-white/10 w-80">
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl font-black">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Ben Andrews
            </span>
          </SheetTitle>
          <SheetDescription className="text-slate-400">
            Freelance Web Developer
          </SheetDescription>
        </SheetHeader>
        <MainMenuList />
      </SheetContent>
    </Sheet>
  )
}


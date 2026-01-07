import Link from 'next/link';
import MenuItem from './menu-item';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { FaBars } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-orange-400 font-extrabold text-2xl tracking-tighter hover:text-orange-400 transition-colors">
          Ben Andrews
        </Link>
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-300">
          <MenuItem href='/about' name='About' />
          <MenuItem href='/services' name='Services' />
          <MenuItem href='/portfolio' name='Portfolio' />
          <MenuItem href='/posts' name='Blog' />
          <MenuItem href='/contact' name='Contact' />
        </nav>
        <Sheet>
          <SheetTrigger className='lg:hidden'>
            <FaBars />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='text-orange-400 font-semibold leading-tight'>Ben Andrews</SheetTitle>
              <SheetDescription>
                Welcome to my portfolio
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-6 font-medium text-gray-300 px-6 text-xl">
              <MenuItem href='/about' name='About' />
              <MenuItem href='/services' name='Services' />
              <MenuItem href='/portfolio' name='Portfolio' />
              <MenuItem href='/posts' name='Blog' />
              <MenuItem href='/contact' name='Contact' />
            </nav>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

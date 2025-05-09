'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import logo from '@/public/logo.jpeg';
import Image from 'next/image';

interface Link {
  name: string;
  link: string;
}

const Sidebar = ({ links }: { links: Link[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu className="w-10 h-10 lg:hidden textOrange" />
        </SheetTrigger>
        <SheetContent className="customBlue">
          <SheetHeader>
            <Link href="/" className="max-sm:hidden">
              <Image src={logo} alt="logo" className="w-9 rounded-full" />
            </Link>
            <SheetTitle className="textOrange text-lg font-chango">
              Sunset Stash
            </SheetTitle>
            <SheetDescription className="mt-4">
              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="max-lg:border-b max-lg:border-customCyan max-lg:py-3 px-3"
                  >
                    <Link
                      href={link.link}
                      className="textOrange block font-medium text-lg"
                      onClick={handleClose} // Close the sheet when a link is clicked
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <div className="customOrange text-center p-2 roundShadow items-center gap-2">
              <SignOutButton />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;

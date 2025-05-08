import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SquareMenu, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import logo from '@/public/logo.jpeg';
import { checkUserExists } from '@/lib/actions/user.actions';
import { SignOutButton } from '@clerk/nextjs';

const UserHeader = async () => {
  const links = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Profile', link: '/dashboard/profile/3' },
    { name: 'History', link: '/dashboard/history' },
    { name: 'Stash', link: '/dashboard/stash' },
    { name: 'Friends', link: '/dashboard/friends' },
    { name: 'Settings', link: '/dashboard/settings' },
  ];
  // await checkUserExists();

  return (
    <>
      <header className="flex shadow-md py-2 mb-4 px-4 sm:px-10 customBlue min-h-[50px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-8 w-full">
          <div className="flex flex-row gap-4">
            <Link href="/" className="max-sm:hidden">
              <Image src={logo} alt="logo" className="w-9 rounded-full" />
            </Link>

            <Link href="/" className="hidden max-sm:block">
              <Image src={logo} alt="logo" className="w-9 rounded-full" />
            </Link>
            <div className="flex justify-center text-lg items-center textOrange font-bold">
              Sunset Stash
            </div>
          </div>
          <div className="lg:flex hidden flex-row ">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <div className="max-lg:py-3 px-1 hover:bg-[#3e9495] rounded-md">
                  <Link
                    href={link.link}
                    className="textOrange block font-bold mt-[2px] px-2 text-md p-1"
                  >
                    {link.name}
                  </Link>
                </div>
                {index < links.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="min-h-[25px] m-[5px] border-[1px]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-10 h-10 lg:hidden textOrange" />
              </SheetTrigger>
              <SheetContent className="customBlue">
                <SheetHeader>
                  <SheetTitle>Title</SheetTitle>
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
            <div className="hidden lg:flex customOrange roundShadow items-center py-1 px-2">
              <SignOutButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;

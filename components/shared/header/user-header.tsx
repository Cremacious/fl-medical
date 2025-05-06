import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import logo from '@/public/logo.jpeg';
import name from '@/public/logo-name.png';
import { createNewUser } from '@/lib/actions/user.actions';

const UserHeader = async () => {
  const links = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Profile', link: '/profile/3' },
    { name: 'History', link: '/dashboard/history' },
    { name: 'Stash', link: '/dashboard/stash' },
    { name: 'Friends', link: '/dashboard/friends' },
    { name: 'Settings', link: '/dashboard/settings' },
  ];
  await createNewUser(); // Ensure user is created if not already present

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

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 items-center"
          >
            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  <li className="max-lg:py-3 px-3 hover:bg-[#3e9495] rounded-md">
                    <Link
                      href={link.link}
                      className="textOrange block font-bold mt-[2px] text-md p-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                  {index < links.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="min-h-[25px] m-[5px] border-[1px]"
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="flex max-lg:ml-auto space-x-4">
            <Sheet>
              <SheetTrigger>
                <SquareMenu className="w-10 h-10 md:hidden" />
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Title</SheetTitle>
                  <SheetDescription className="mt-4">
                    <ul>
                      {links.map((link, index) => (
                        <li
                          key={index}
                          className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                        >
                          <Link
                            href={link.link}
                            className="hover:text-blue-700 text-slate-800 block font-medium text-lg"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;

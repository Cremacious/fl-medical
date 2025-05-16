import logoName from '@/public/name-logo.png';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './sidebar';
import { Separator } from '@/components/ui/separator';
import logo from '@/public/logo.jpeg';
import SignOutButton from './signout-button';

const UserHeader = () => {
  const links = [
    { name: 'Dashboard', link: '/dashboard' },
    // { name: 'Profile', link: '/dashboard/profile' },
    { name: 'History', link: '/dashboard/history' },
    { name: 'Stash', link: '/dashboard/stash' },
    { name: 'Friends', link: '/dashboard/friends' },
    // { name: 'Settings', link: '/dashboard/settings' },
  ];

  return (
    <>
      <header className="flex shadow-md py-2 mb-4 px-4 sm:px-10 customBlue min-h-[50px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex flex-row gap-4">
            <div>
              <Link href="/" className="max-sm:hidden">
                <Image src={logo} alt="logo" className="w-9 rounded-full" />
              </Link>
              <Link href="/" className="hidden max-sm:block">
                <Image src={logo} alt="logo" className="w-9 rounded-full" />
              </Link>
            </div>
            <div className="flex justify-center text-lg items-center textOrange font-bold font-chango">
              Sunset Stash
            </div>
          </div>
          <div className="lg:flex hidden flex-row  mr-10">
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

          <div className="flex ml-4">
            <Sidebar links={links} />
            <div className="hidden lg:flex items-center py-1 px-2">
              <SignOutButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;

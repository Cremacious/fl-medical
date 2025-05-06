import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.jpeg';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignOutButton
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Header = () => {
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
          <div className="flex max-lg:ml-auto space-x-2">
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="secondary" size="sm">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

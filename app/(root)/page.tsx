import Link from 'next/link';
import logo from '@/public/logo.jpeg';
import Image from 'next/image';
import Header from '@/components/shared/header/header';
import SignOutButton from '@/components/shared/header/signout-button';
import { auth } from '@/lib/auth';

const Homepage = async () => {
  const session = await auth();
  console.log(session?.user);

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="logo"
          height={400}
          width={400}
          className="rounded-full"
        />
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
        <SignOutButton />
        <div>Hello {session?.user?.name || 'NO NAME'}</div>
      </div>
    </>
  );
};

export default Homepage;

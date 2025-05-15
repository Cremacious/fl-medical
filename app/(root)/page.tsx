import Link from 'next/link';
import logo from '@/public/logo.jpeg';
import Image from 'next/image';
import Header from '@/components/shared/header/header';

const Homepage = () => {
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
      </div>
    </>
  );
};

export default Homepage;

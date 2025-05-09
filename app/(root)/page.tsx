import Link from 'next/link';
import logo from '@/public/logo.jpeg';
import Image from 'next/image';
import CheckUser from './check-user';
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
        <CheckUser />
      </div>
    </>
  );
};

export default Homepage;

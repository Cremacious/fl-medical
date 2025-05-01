import Link from 'next/link';
import logo from '@/public/logo.jpeg';
import Image from 'next/image';

const Homepage = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="logo"
          height={400}
          width={400}
          className="rounded-full"
        />
      </div>
      <Link className="p-2 rounded-lg bg-white" href="/dashboard">
        Go To Dashboard
      </Link>
      {/* <div className="newPage">
      </div> */}
    </>
  );
};

export default Homepage;

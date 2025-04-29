import Link from 'next/link';
import { Button } from '@/components/ui/button';
import UsageChart from '@/components/usage-chart';
import Image from 'next/image';
import stock from '@/public/avatar.png';

const DashboardPage = () => {
  return (
    <>
      <div className="newPage">
        <div className="justify-center bg-green-200 flex px-5 py-24 md:flex-row flex-col gap-8">
          <div className="items-center bg-white flex flex-col">
            <h1 className="text-center">Welcome, name!</h1>
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src={stock}
              height={200}
              width={200}
            />
            <div className="">
              <Button className="my-2">Create New Post</Button>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <Button>Add Purchase</Button>
              <Button>Add Vault</Button>
            </div>
          </div>
          <div className="flex flex-col bg-red-100 justify-center">
            <UsageChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import UsageChart from '@/components/usage-chart';
import Image from 'next/image';
import stock from '@/public/avatar.png';
import TimelineRow from '@/components/timeline/timeline-row';


import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth();


  return (
    <>
      <div className="bg-white">Welcome, {session?.user?.name}</div>
      <div className="newPage">
        <div className="justify-center bg-green-200 flex md:flex-row flex-col gap-8">
          <div className="items-center bg-white flex flex-col p-8">
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src={stock}
              height={200}
              width={200}
            />
            <div className="">
              <Button asChild className="my-2">
                <Link href="/dashboard/post/new">Create New Post</Link>
              </Button>
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
        <div>
          <div className="text-center font-bold text-lg mb-2">
            Your Recent Posts
          </div>
          <TimelineRow />
        </div>
        <div className="my-4">
          <div className="text-center font-bold text-lg mb-2">
            Friends Recent Posts
          </div>
          <TimelineRow />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

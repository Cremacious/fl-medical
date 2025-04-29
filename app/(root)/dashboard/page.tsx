import Link from 'next/link';
import { Button } from '@/components/ui/button';
import UsageChart from '@/components/usage-chart';

const DashboardPage = () => {
  return (
    <>
      <div className="newPage">
        <div className="text-slate-800 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-center">Welcome, name!</h1>
              <UsageChart />
              {/* <p className="mb-8 text-center">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p> */}
              <div className="flex flex-row justify-center gap-4">
                <Button>Add Purchase</Button>
                <Button>Add Purchase</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

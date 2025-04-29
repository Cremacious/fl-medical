import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import stock from '@/public/stock.jpg';
import { Badge } from '../ui/badge';
import TimelineComment from './timeline-comment';

const TimelinePost = () => {
  return (
    <Link href="/post/3">
      <div className="flex justify-center items-center">
        <div className="max-w-xs container bg-white rounded-xl shadow-lg animationEffect">
          <div>
            <span className="text-slate-800 text-xs font-bold inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer">
              04/10/2023
            </span>
            <h1 className="text-lg my-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
              Tonight after work
            </h1>
          </div>
          <Image className="w-full cursor-pointer" src={stock} alt="image" />
          <div className="flex p-4 justify-evenly items-center flex-wrap">
            <Badge className="m-2">Strain Name</Badge>
            <Badge className="m-2">Strain Name</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TimelinePost;

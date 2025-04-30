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
        <div className="max-w-xs container customBlue text-white roundShadow animationEffect">
          <div>
            <span className="text-white text-xs font-bold inline-block mt-4 ml-2 py-1.5 px-2 cursor-pointer bg-[#eb7808] rounded">
              04/10/2023
            </span>
            <h1 className="text-lg my-2 ml-4 font-bold text-white cursor-pointer hover:text-gray-200 transition duration-100">
              Tonight after work this is what I'll be doing
            </h1>
          </div>
          <Image
            className="w-full cursor-pointer rounded-b-lg"
            src={stock}
            alt="image"
          />
        </div>
      </div>
    </Link>
  );
};

export default TimelinePost;

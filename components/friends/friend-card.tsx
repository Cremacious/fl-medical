import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../ui/card';
import Image from 'next/image';
import stock from '@/public/stock.jpg';

const FriendCard = () => {
  return (
    <Link href="/">
      <div className="flex justify-center items-center">
        <div className="max-w-xs container bg-blue-50 p-4 rounded-xl shadow-lg animationEffect">
          <div>
            <h1 className="text-lg mb-2 text-center font-bold text-slate-800">
              FRIEND NAME
            </h1>
          </div>
          <div className="flex justify-center">
            <Image className="w-4/5 rounded-full" src={stock} alt="image" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;

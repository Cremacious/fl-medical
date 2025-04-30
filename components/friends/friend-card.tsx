import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../ui/card';
import Image from 'next/image';
import stock from '@/public/avatar.png';

const FriendCard = () => {
  return (
    <Link href="/profile/3">
      <Card className="customBlue border-none animationEffect roundShadow">
        <CardHeader className="flex flex-col items-center justify-center text-center">
          <CardTitle className="text-xl font-bold textOrange">
            John Doe
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center ">
          <Image
            className="rounded-full"
            src={stock}
            alt="image"
            width={150}
            height={150}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default FriendCard;

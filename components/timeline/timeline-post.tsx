import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import image from '@/assets/images/icons/eating.png';

const TimelinePost = () => {
  return (
    <Link href="/post/3">
      <Card className="animationEffect border-none roundShadow customBlue">
        <CardHeader>
          <CardTitle>
            <h3 className="textOrange text-center text-lg font-bold">
              04/20/2025
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex justify-center mx-4">
            <Image
              className="object-cover"
              src={image}
              alt="NIKE AIR"
              height={200}
              width={200}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TimelinePost;

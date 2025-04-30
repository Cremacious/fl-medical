import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import stock from '@/public/stock.jpg';
import Link from 'next/link';
import image from '@/assets/images/icons/flower-yellow.png';

const ProductCard = () => {
  return (
    <Link href="/dashboard/stash/3">
      <Card className="animationEffect border-none roundShadow customBlue">
        <CardHeader>
          <CardTitle className="textOrange text-center text-2xl font-bold">
            Sour Diesel
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

export default ProductCard;

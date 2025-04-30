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

const ProductCard = () => {
  return (
    <Link href="/dashboard/vault/3">
      <Card className="max-w-xs overflow-hidden border-none roundShadow customBlue">
        <CardHeader>
          <CardTitle className="text-white">Sour Diesel</CardTitle>
          <p className="mt-1 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisissscing...
          </p>
        </CardHeader>
        <CardContent className="px-0">
          <Image
            className="object-cover"
            src={stock}
            alt="NIKE AIR"
            height={48}
            width={320}
          />
        </CardContent>
        <CardFooter className="flex items-center justify-evenly">
          <Badge className="customOrange text-md">Inhalent</Badge>
          <Badge className="customOrange text-md">Trulieve</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

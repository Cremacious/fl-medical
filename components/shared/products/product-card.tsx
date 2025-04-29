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
      <Card className="hover:scale-105 transition-transform cursor-pointer max-w-xs border-4 border-slate-300 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Sour Diesel</CardTitle>
          <p className="mt-1 text-sm text-gray-800 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing...
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
          <Badge>Inhalent</Badge>
          <Badge>Trulieve</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

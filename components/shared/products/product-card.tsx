import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import stock from '@/public/stock.jpg'

const ProductCard = () => {
  return (
    <>
      {/* <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            Sour Diesel
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>
        <img
          className="object-cover w-full h-48 mt-2"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
        <div className="flex items-center justify-evenly px-4 py-2 bg-white">
          <Badge>Inhalent</Badge>
          <Badge>Trulieve</Badge>
        </div>
      </div> */}

      <Card className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Sour Diesel</CardTitle>
          <p className="mt-1 text-sm text-gray-800 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </CardHeader>
        <CardContent>
          <Image
            className="object-cover rounded-lg"
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
    </>
  );
};

export default ProductCard;

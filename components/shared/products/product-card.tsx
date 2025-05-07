import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/assets/images/icons/stash/flower.png';
import { StashItem } from '@prisma/client';
import { stashIcons } from '@/lib/constants';

const ProductCard = ({ item }: { item: StashItem }) => {
  return (
    <Link href={`/dashboard/stash/${item.id}`} className="flex flex-col">
      <Card className="animationEffect border-none roundShadow customBlue">
        <CardHeader>
          <CardTitle
            className="textOrange text-center font-bold truncate text-[clamp(0.8rem, 2vw, 1rem)]"
            title={item.name}
          >
            {item.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex justify-center mx-4">
            <Image
              className="object-cover"
              src={image}
              alt={item.name}
              height={100}
              width={100}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;

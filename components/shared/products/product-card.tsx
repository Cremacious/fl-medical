import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/assets/images/icons/stash/flower.png';
import { StashItem } from '@prisma/client';
import flowerIcon from '@/public/flower.png';
import vapeIcon from '@/public/vape.png';
import defaultIcon from '@/public/default.png';
import vapeIcon2 from '@/public/vape2.png';

const ProductCard = ({ item }: { item: StashItem }) => {
  let imageIcon;

  switch (item.category) {
    case 'flower':
      imageIcon = flowerIcon;
      break;
    case 'vape':
      imageIcon = vapeIcon2;
      break;
    default:
      imageIcon = defaultIcon;
      break;
  }

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
              src={imageIcon}
              alt={item.name}
              height={100}
              width={100}
            />
          </div>
        </CardContent>
      </Card>
      {/* 
      <Image
        className="object-cover"
        src={flowerIcon}
        alt={item.name}
        height={100}
        width={100}
      />
      <Image
        className="object-cover"
        src={vapeIcon2}
        alt={item.name}
        height={100}
        width={100}
      />
      <Image
        className="object-cover"
        src={defaultIcon}
        alt={item.name}
        height={100}
        width={100}
      /> */}
    </Link>
  );
};

export default ProductCard;

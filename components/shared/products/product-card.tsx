import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { StashItem } from '@prisma/client';
import defaultIcon from '@/assets/images/icons/stash/default.png';
import flowerIcon from '@/assets/images/icons/stash/flower.png';
import vapeIcon from '@/assets/images/icons/stash/vape.png';
import concentrateIcon from '@/assets/images/icons/stash/concentrate.png';
import edibleIcon from '@/assets/images/icons/stash/edible.png';
import topicalIcon from '@/assets/images/icons/stash/topical.png';

const ProductCard = ({ item }: { item: StashItem }) => {
  let imageIcon;

  switch (item.category) {
    case 'flower':
      imageIcon = flowerIcon;
      break;
    case 'vape':
      imageIcon = vapeIcon;
      break;
    case 'concentrate':
      imageIcon = concentrateIcon;
      break;
    case 'edible':
      imageIcon = edibleIcon;
      break;
    case 'topical':
      imageIcon = topicalIcon;
      break;
    default:
      imageIcon = defaultIcon;
      break;
  }

  return (
    <Link href={`/dashboard/stash/${item.id}`} className="flex flex-col">
      <Card className="animationEffect border-none roundShadow customBlue min-w-[200px] ">
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
    </Link>
  );
};

export default ProductCard;

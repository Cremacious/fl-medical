import { StashItem } from '@/lib/types';
import icon from '@/assets/images/icons/stash/flower.png';
import Image from 'next/image';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { currentUser } from '@clerk/nextjs/server';
import { capitalizeFirstLetter, getCategoryIcon } from '@/lib/utils';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ItemPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const item = await getStashItemById(id);
  const imageIcon = getCategoryIcon(item.category);

  return (
    <div className="newPage min-h-screen">
      <div className="customCyan max-w-lg mx-auto px-4 pt-8 pb-2 roundShadow">
        <div className="customBlue roundShadow p-6">
          <div className="flex justify-center mb-4">
            <Image src={imageIcon} alt="image" height={100} width={100} />
          </div>
          <h1 className="text-3xl text-center textOrange mb-4 font-extrabold">
            {item.name}
          </h1>
          <p className="textOrange font-bold">
            {/* {capitalizeFirstLetter(user?.username || 'No Username')} thinks... */}
          </p>
          <p className="mb-6 mt-2 text-white">
            {item.thoughts && item.thoughts.trim() !== ''
              ? item.thoughts
              : 'Nothing to say... yet!'}
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-row justify-between">
              <div className="font-extrabold textOrange">Category</div>
              <div className="text-white font-bold">
                {' '}
                {item.category && item.category.trim() !== ''
                  ? capitalizeFirstLetter(item.category)
                  : 'N/A'}
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
              <div className="font-extrabold textOrange">Type</div>
              <div className="text-white font-bold">
                {item.type && item.type.trim() !== ''
                  ? capitalizeFirstLetter(item.type)
                  : 'N/A'}
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
              <div className="font-extrabold textOrange">Size</div>
              <div className="text-white font-bold">
                {item.size && item.size.trim() !== '' ? item.size : 'N/A'}
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
              <div className="font-extrabold textOrange">THC</div>
              <div className="text-white font-bold">
                {item.thc && item.thc.trim() !== '' ? item.thc + '%' : 'N/A'}
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
              <div className="font-extrabold textOrange">CBD</div>
              <div className="text-white font-bold">
                {item.cbd && item.cbd.trim() !== '' ? item.cbd + '%' : 'N/A'}
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-2 border-gray-200 pt-2">
              <div className="font-extrabold textOrange">Lineage</div>
              <div className="flex-1 text-right break-words text-white font-bold">
                {item.lineage && item.lineage.trim() !== ''
                  ? item.lineage
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="flex flex-row gap-8 justify-evenly px-6 py-2 roundShadow customBlue">
            <Button asChild>
              <Link href={`/dashboard/stash/edit/${item.id}`}>Edit Item</Link>
            </Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

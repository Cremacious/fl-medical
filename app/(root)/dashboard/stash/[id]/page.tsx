import { StashItem } from '@/lib/types';
import icon from '@/assets/images/icons/stash/flower.png';
import Image from 'next/image';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { currentUser } from '@clerk/nextjs/server';
import { capitalizeFirstLetter } from '@/lib/utils';

const ItemPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const item = await getStashItemById(id);
  const user = await currentUser();

  return (
    <div className="newPage">
      <div className="flex justify-center">
        <div className="customCyan md:w-1/2 px-4 py-8 roundShadow">
          <div className="customBlue roundShadow p-6">
            <div className="flex justify-center mb-4">
              <Image src={icon} alt="image" height={100} width={100} />
            </div>
            <h1 className="text-3xl text-center textOrange mb-4 font-extrabold">
              {item.name}
            </h1>
            <p className="textOrange font-bold">
              {capitalizeFirstLetter(user?.username || 'No Username')} thinks...
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
                  {item.type && item.type.trim() !== '' ? capitalizeFirstLetter(item.type) : 'N/A'}
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
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

{
  /* <h1 className="text-3xl title-font font-medium mb-4">
Sour Diesel
</h1>
<p>User thinks...</p>
<p className="mb-4">
Fam locavore kickstarter distillery. Mixtape chillwave tumeric
sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
seitan poutine tumeric. Gastropub blue bottle austin listicle
pour-over, neutra jean.
</p>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500">Supplier</p>
<p className="ml-auto text-gray-900">Trulieve</p>
</div>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500">Type</p>
<p className="ml-auto text-gray-900">Vape</p>
</div>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500"></p>
<p className="ml-auto text-gray-900">Vape</p>
</div>
</div>
<img
alt="ecommerce"
className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
src="https://dummyimage.com/400x400"
/> */
}

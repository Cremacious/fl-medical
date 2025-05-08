import ProductCard from '@/components/shared/products/product-card';
import StashSearch from './stash-search';
import Link from 'next/link';
import { getAllStashItems } from '@/lib/actions/stash.actions';

const StashPage = async () => {
  // const stashItems = await getAllStashItems();

  return (
    <>
      <div className="newPage min-h-screen">
        <div className="customBlue px-4 pt-4 pb-8 roundShadow">
          {/* <StashSearch stashItems={stashItems} /> */}
          <StashSearch />
          <div className=" customCyan p-6 roundShadow min-h-screen">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-center ">
              {/* {stashItems.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StashPage;

{
  /* <div className="newPage min-h-screen">
<div className="customBlue px-4 pt-4 pb-8 roundShadow">

  <div className=" customCyan p-6 roundShadow min-h-screen">
    <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-center ">
      {stashItems.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  </div>
</div>
</div> */
}

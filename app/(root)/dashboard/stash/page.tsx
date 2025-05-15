import ProductCard from '@/components/shared/products/product-card';
import StashSearch from './stash-search';
import Link from 'next/link';
import { getAllStashItems } from '@/lib/actions/stash.actions';

const StashPage = async () => {
  const stashItems = await getAllStashItems();

  return (
    <>
      <div className="newPage min-h-screen">
        <div className="customBlue px-4 pt-4 pb-8 roundShadow">
          <StashSearch
            stashItems={stashItems.map((item) => ({
              ...item,
              category: item.category ?? undefined,
              type: item.type ?? undefined,
              size: item.size ?? undefined,
              thc: item.thc ?? undefined,
              cbd: item.cbd ?? undefined,
              lineage: item.lineage ?? undefined,
              thoughts: item.thoughts ?? undefined,
              userId: item.userId,
              createdAt: item.createdAt ?? new Date(),
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default StashPage;

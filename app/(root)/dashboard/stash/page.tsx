import ProductCard from '@/components/shared/products/product-card';
import VaultSearch from './vault-search';
import Link from 'next/link';

const StashPage = () => {
  return (
    <>
      {/* <div className="container justify-center mx-auto">
        <VaultSearch />
      </div> */}
      <div className="newPage">
        <Link href="/dashboard/stash/add">Add</Link>
        <div className="customBlue px-4 py-8 mx-4 roundShadow">
          <div className="grid gap-4 md:grid-cols-4 justify-center customCyan p-6 roundShadow">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default StashPage;

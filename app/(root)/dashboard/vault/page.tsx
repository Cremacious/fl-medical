import ProductCard from '@/components/shared/products/product-card';
import VaultSearch from './vault-search';

const VaultPage = () => {
  return (
    <>
      <div className="container justify-center mx-auto">
        <VaultSearch />
      </div>
      <div className="bg-white container mx-auto p-6 rounded-lg shadow-lg">
        <div className="grid gap-4 md:grid-cols-4 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default VaultPage;

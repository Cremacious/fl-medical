import ProductCard from '@/components/shared/products/product-card';
import VaultSearch from './vault-search';

const VaultPage = () => {
  return (
    <>
      <div className="container justify-center mx-auto">
        <VaultSearch />
      </div>
      <div className="container mx-auto">
        <div className="customCyan px-4 py-8 mx-4 roundShadow">
          <div className="grid gap-4 md:grid-cols-3 justify-center bg-white p-6 roundShadow">
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

export default VaultPage;

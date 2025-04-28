import PurchaseCard from './purchase-card';

const ViewPurchase = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  return (
    <>
      <div className="newPage">
        Dispensary name - total price - date
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">Prices</div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <PurchaseCard />
              <PurchaseCard />
              <PurchaseCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPurchase;

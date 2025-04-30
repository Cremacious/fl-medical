import { Button } from '@/components/ui/button';
import PurchaseCard from './purchase-card';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const ViewPurchase = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  return (
    <>
      <div className="newPage">
        <div className="flex justify-center customCyan px-4 py-8 roundShadow">
          <div className=" bg-white roundShadow grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:p-8">
            <div className="ml-4 mt-4 md:ml-0 md:mt-0">
              <Card className="max-w-sm border-none shadow-none">
                <CardHeader>
                  <CardTitle>04/20/2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between border-b-2 border-b-slate-200 pb-2">
                      <div className="font-bold">Dispensary</div>
                      <div>Trulieve</div>
                    </div>
                    <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
                      <div className="font-bold">Items</div>
                      <div>4</div>
                    </div>
                    <div className="flex flex-row justify-between pb-2">
                      <div className="font-bold">Total</div>
                      <div>$120</div>
                    </div>
                    <Button className="customOrange cursor-pointer font-bold hover:bg-orange-300 text-slate-800">
                      Edit Purchase
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 gap-4 w-full">
              <PurchaseCard />
              <PurchaseCard />
              <PurchaseCard />
              <PurchaseCard />
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

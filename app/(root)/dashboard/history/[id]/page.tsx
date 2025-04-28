import PurchaseCard from './purchase-card';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const ViewPurchase = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  return (
    <>
      <div className="newPage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <div className="">
              <Card>
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

                    <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
                      <div className="font-bold">Total</div>
                      <div>$120</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

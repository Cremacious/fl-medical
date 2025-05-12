import { Button } from '@/components/ui/button';
import PurchaseCard from './purchase-card';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { getPurchaseById } from '@/lib/actions/history.actions';
import { Purchase } from '@/lib/types';
import Link from 'next/link';

const ViewPurchase = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const purchase = await getPurchaseById(id);
  if (!purchase) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Purchase Not Found</h1>
          <p className="mt-4">
            The purchase you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="newPage min-h-screen ">
        <div className="flex justify-center customBlue px-4 py-8 roundShadow">
          <div className="customCyan roundShadow grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4 md:p-8">
            <div className="ml-4 mt-4 md:ml-0 md:mt-0">
              <Card className="customBlue roundShadow border-none max-w-sm ">
                <CardHeader>
                  <CardTitle className="font-bold text-xl textOrange">
                    {purchase.date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between border-b-2 border-b-slate-200 pb-2">
                      <div className="font-bold text-white">Dispensary</div>
                      <div className="font-bold text-white">
                        {purchase.dispensary}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
                      <div className="font-bold text-white">Items</div>
                      <div className="font-bold text-white">
                        {purchase.quantity}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between pb-2">
                      <div className="font-bold text-white">Total</div>
                      <div className="font-bold text-white">
                        ${purchase.total}
                      </div>
                    </div>
                    <Button asChild className="font-bold">
                      <Link href={`/dashboard/history/edit/${purchase.id}`}>
                        Edit Purchase
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 gap-4 w-full md:pl-12">
              {purchase.purchaseItems.map((item) => (
                <PurchaseCard
                  key={item.id}
                  purchase={{
                    ...item,
                    thc: item.thc ? item.thc.toString() : '0',
                    cbd: item.cbd ? item.cbd.toString() : '0',
                    category: item.category ?? undefined,
                    type: item.type ?? undefined,
                    size: item.size ?? undefined,
                    quantity: item.quantity ?? undefined,
                    price: item.price ?? undefined,
                    lineage: item.lineage ?? undefined,
                    details: item.details ?? undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPurchase;

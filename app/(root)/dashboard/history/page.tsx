import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';
import HistorySearch from './history-search';
import { getHistory } from '@/lib/actions/history.actions';
import { Purchase, PurchaseItem } from '@/lib/types';

const HistoryPage = async () => {
  const userHistory = await getHistory();
  // if (!userHistory) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold">No Purchase History Found</h1>
  //         <p className="mt-4">You have not made any purchases yet.</p>
  //         <Button asChild className="mt-4">
  //           <Link href="/dashboard/history/add-purchase">Add New Purchase</Link>
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }
  // if (userHistory.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold">No Purchase History Found</h1>
  //         <p className="mt-4">You have not made any purchases yet.</p>
  //         <Button asChild className="mt-4">
  //           <Link href="/dashboard/history/add-purchase">Add New Purchase</Link>
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="newPage">
        <div className="customBlue px-4 pt-4 pb-8 roundShadow">
          <HistorySearch />
          <HistoryTable
            purchases={
              userHistory.map((purchase) => ({
                ...purchase,
                items: purchase.items.map((item) => ({
                  ...item,
                  thc: item.thc ? item.thc.toString() : '0',
                  cbd: item.cbd ? item.cbd.toString() : '0',
                })),
              })) as Purchase[]
            }
          />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';
import HistorySearch from './history-search';
import { getHistory } from '@/lib/actions/history.actions';
import { Purchase, PurchaseItem } from '@/lib/types';

const HistoryPage = async () => {
  const userHistory = await getHistory();

  return (
    <>
      <div className="newPage">
        <div className="customBlue px-4 pt-4 pb-8 roundShadow">
      
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

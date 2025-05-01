import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';
import HistorySearch from './history-search';

const HistoryPage = () => {
  return (
    <>
      <div className="newPage">
        <div className="customBlue px-4 pt-4 pb-8 roundShadow">
          <HistorySearch />
          <HistoryTable />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

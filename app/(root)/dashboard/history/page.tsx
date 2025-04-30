import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';
import HistorySearch from './history-search';

const HistoryPage = () => {
  return (
    <>
      <HistorySearch />
      <div className="newPage">
        <div className="customCyan px-4 py-8 roundShadow">
          <HistoryTable />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

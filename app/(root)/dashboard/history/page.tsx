import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';
import HistorySearch from './history-search';

const HistoryPage = () => {
  return (
    <>
      <HistorySearch />
      <div className="bg-white container h-screen mx-auto p-5 rounded-lg shadow-lg">
        <HistoryTable />
      </div>
    </>
  );
};

export default HistoryPage;

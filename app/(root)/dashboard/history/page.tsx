import { Button } from '@/components/ui/button';
import HistoryTable from './history-table';
import Link from 'next/link';

const HistoryPage = () => {
  return (
    <>
      <Button asChild>
        <Link href="/dashboard/history/add-purchase">Add Purchase</Link>
      </Button>
      <div className="bg-white container h-screen mx-auto p-5 rounded-lg shadow-lg">
        <HistoryTable />
      </div>
    </>
  );
};

export default HistoryPage;

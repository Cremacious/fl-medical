import Link from 'next/link';
import { Button } from '@/components/ui/button';

const DashboardPage = () => {
  return (
    <>
      Dashboard page
      <Button asChild>
        <Link href="/dashboard/add">Add</Link>
      </Button>
    </>
  );
};

export default DashboardPage;

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { EllipsisVertical } from 'lucide-react';

// TODO: Make sure text for thoughts text will fit

const HistoryTable = () => {
  return (
    <div className="bg-white h-screen roundShadow p-4">
      <Table>
        <TableCaption>A list of your recent purchases.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Dispensary</TableHead>
            <TableHead className="text-center">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Link legacyBehavior href="/dashboard/history/1">
            <TableRow className="cursor-pointer hover:bg-blue-200">
              <TableCell className="text-center">04/20/25</TableCell>
              <TableCell className="text-center">Trulieve</TableCell>
              <TableCell className="flex-1 text-center break-words">
                $2500.00
              </TableCell>
            </TableRow>
          </Link>
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;

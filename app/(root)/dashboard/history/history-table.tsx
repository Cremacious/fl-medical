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

// TODO: Make sure text for thoughts text will fit

const HistoryTable = () => {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent purchases.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Dispensary</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Link legacyBehavior href="/dashboard/history/1">
            <TableRow className="cursor-pointer hover:bg-slate-100">
              <TableCell className="">04/20/2025</TableCell>
              <TableCell className="">Trulieve</TableCell>
              <TableCell className="flex-1 break-words">$2500.00</TableCell>
              <TableCell className="">3</TableCell>
              <TableCell className="">
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          </Link>
        </TableBody>
      </Table>
    </>
  );
};

export default HistoryTable;

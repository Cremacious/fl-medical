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
    <div className="customCyan h-screen roundShadow p-4">
      <Table>
        <TableCaption>A list of your recent purchases.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-center text-md font-bold textOrange">
              Date
            </TableHead>
            <TableHead className="text-center text-md font-bold  textOrange">
              Dispensary
            </TableHead>
            <TableHead className="text-center text-md font-bold  textOrange">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Link legacyBehavior href="/dashboard/history/1">
            <TableRow className="cursor-pointer customBlue roundShadow my-4 hover:bg-cyan-800">
              <TableCell className="text-center text-white text-md font-bold">
                04/20/25
              </TableCell>
              <TableCell className="text-center text-white text-md font-bold">
                Trulieve
              </TableCell>
              <TableCell className="flex-1 text-center break-words text-white text-md font-bold">
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

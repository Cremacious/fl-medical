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
import { Purchase } from '@/lib/types';

const HistoryTable = ({ purchases }: { purchases: Purchase[] }) => {
  return (
    <div className="customCyan h-screen roundShadow py-4 md:px-4 px-1">
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
              Total
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow className="cursor-pointer customBlue roundShadow my-4 hover:bg-cyan-800">
              <TableCell className="text-center text-white text-md font-bold">
                04/20/25
              </TableCell>
              <TableCell className="text-center text-white text-md font-bold">
                {purchase.dispensary}
              </TableCell>
              <TableCell className="flex-1 text-center break-words text-white text-md font-bold">
                ${purchase.total}
              </TableCell>
              <TableCell className="flex-1 text-center break-words textOrange text-md font-bold">
                <Button
                  asChild
                  size="sm"
                  className="customOrange text-md font-bold"
                >
                  <Link href={`/dashboard/history/${purchase.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;

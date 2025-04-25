import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// TODO: Make sure text for thoughts text will fit

const HistoryTable = () => {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent purchases.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-center w-[100px]">Date</TableHead>
            <TableHead className="text-center">Dispensary</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Item Qty</TableHead>
            <TableHead className="text-center">Thoughts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">Button</TableCell>
            <TableCell className="font-medium">04/20/2025</TableCell>
            <TableCell className="text-center">Trulieve</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">
              Tasted good, and a good price
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default HistoryTable;

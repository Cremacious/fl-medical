'use client';
import { useState } from 'react';
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

const ITEMS_PER_PAGE = 20; // Number of items per page

const HistoryTable = ({ purchases }: { purchases: Purchase[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort purchases by date (latest first)
  const sortedPurchases = [...purchases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate total pages
  const totalPages = Math.ceil(sortedPurchases.length / ITEMS_PER_PAGE);

  // Paginate purchases
  const paginatedPurchases = sortedPurchases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="customCyan h-screen roundShadow py-4 md:px-4 px-1">
      <Table>
        <TableCaption>A list of your recent purchases.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-md font-bold textOrange">
              Date
            </TableHead>
            <TableHead className="text-center text-md font-bold textOrange">
              Dispensary
            </TableHead>
            <TableHead className="text-center text-md font-bold textOrange">
              Total
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPurchases.map((purchase) => (
            <TableRow
              key={purchase.id}
              className="cursor-pointer customBlue roundShadow my-4 hover:bg-cyan-800"
            >
              <TableCell className="text-center text-white text-md font-bold">
                {new Date(purchase.date).toLocaleDateString()}{' '}
                {/* Format date */}
              </TableCell>
              <TableCell className="text-center text-white text-md font-bold">
                {purchase.dispensary}
              </TableCell>
              <TableCell className="flex-1 text-center break-words text-white text-md font-bold">
                ${purchase.total.toFixed(2)} {/* Format total */}
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

      {/* Pagination */}
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-[#f7c062] text-slate-800'
                : 'bg-[#3e9495] text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HistoryTable;

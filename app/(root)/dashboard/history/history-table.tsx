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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ITEMS_PER_PAGE = 16;

const HistoryTable = ({ purchases }: { purchases: Purchase[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const sortedPurchases = [...purchases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const years = Array.from(
    new Set(
      sortedPurchases.map((purchase) => new Date(purchase.date).getFullYear())
    )
  ).sort((a, b) => b - a);

  const months = Array.from(
    new Set(
      sortedPurchases
        .filter((purchase) =>
          selectedYear
            ? new Date(purchase.date).getFullYear() === parseInt(selectedYear)
            : true
        )
        .map((purchase) => new Date(purchase.date).getMonth() + 1)
    )
  ).sort((a, b) => a - b);

  const filteredPurchases = sortedPurchases.filter((purchase) => {
    const purchaseDate = new Date(purchase.date);
    const purchaseYear = purchaseDate.getFullYear();
    const purchaseMonth = purchaseDate.getMonth() + 1;

    return (
      (!selectedYear || purchaseYear === parseInt(selectedYear)) &&
      (!selectedMonth || purchaseMonth === parseInt(selectedMonth))
    );
  });

  const totalPages = Math.ceil(filteredPurchases.length / ITEMS_PER_PAGE);
  const paginatedPurchases = filteredPurchases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-row gap-2 mb-4 md:mb-0 w-full">
          <Button asChild className="w-full md:w-auto">
            <Link href="/dashboard/history/add-purchase">Add New Purchase</Link>
          </Button>
        </div>
        <div className="flex flex-row md:gap-4 gap-8 items-center">
          <Select onValueChange={(value) => setSelectedMonth(value)}>
            <SelectTrigger className="w-[100px] bg-white">
              <SelectValue
                className="text-black"
                placeholder={selectedMonth || 'Month'}
              />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month.toString()}>
                  {new Date(0, month - 1).toLocaleString('default', {
                    month: 'long',
                  })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedYear(value)}>
            <SelectTrigger className="bg-white w-[100px]">
              <SelectValue
                className="text-black"
                placeholder={selectedYear || 'Year'}
              />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="customCyan h-screen roundShadow py-4 md:px-4 px-1">
        <Table>
          <TableHeader>
            <TableRow className="customBlue roundShadow">
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
                  {new Date(purchase.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-center text-white text-md font-bold">
                  {purchase.dispensary}
                </TableCell>
                <TableCell className="flex-1 text-center break-words text-white text-md font-bold">
                  ${purchase.total.toFixed(2)}
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
      <div className="flex justify-center mt-8 ">
        <div className="flex items-center mr-2 text-white font-bold">
          Page:{' '}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded animationEffect font-bold ${
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
    </div>
  );
};

export default HistoryTable;

'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { StashItem } from '@/lib/types';
import ProductCard from '@/components/shared/products/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type StashSearchProps = {
  stashItems: StashItem[];
};

const ITEMS_PER_PAGE = 16;

const StashSearch: React.FC<StashSearchProps> = ({ stashItems }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    category: 'all',
    type: 'all',
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const sortedItems = [...stashItems].sort(
    (a, b) =>
      new Date(b.createdAt || 0).getTime() -
      new Date(a.createdAt || 0).getTime()
  );

  const filteredItems = sortedItems.filter((item) => {
    if (
      searchParams.name &&
      !item.name.toLowerCase().includes(searchParams.name.toLowerCase())
    ) {
      return false;
    }
    if (
      searchParams.category !== 'all' &&
      item.category !== searchParams.category
    ) {
      return false;
    }
    if (searchParams.type !== 'all' && item.type !== searchParams.type) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 mb-4 justify-between">
        <div className="flex justify-center w-full lg:w-[200px] flex-row gap-2 md:gap-4 ">
          <Button
            asChild
            className="w-[300px] lg:w-[200px] animationEffect font-bold "
          >
            <Link href="/dashboard/stash/add">Add New Item</Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row  gap-2 lg:gap-4">
          <div className="flex flex-row gap-4 justify-center ">
            <Select
              value={searchParams.category}
              onValueChange={(value) =>
                setSearchParams((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger className="bg-white w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="flower">Flower</SelectItem>
                <SelectItem value="vape">Vape</SelectItem>
                <SelectItem value="concentrate">Concentrate</SelectItem>
                <SelectItem value="edible">Edible</SelectItem>
                <SelectItem value="topical">Topical</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={searchParams.type}
              onValueChange={(value) =>
                setSearchParams((prev) => ({ ...prev, type: value }))
              }
            >
              <SelectTrigger className="bg-white w-[120px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sativa">Sativa</SelectItem>
                <SelectItem value="indica">Indica</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            type="text"
            name="name"
            placeholder="Search By Name"
            value={searchParams.name}
            onChange={handleInputChange}
            className="bg-white  md:w-[250px]"
          />
        </div>
      </div>
      <div className=" customCyan p-6 roundShadow min-h-screen">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-center">
          {paginatedItems.map((item) => (
            <ProductCard
              item={{
                id: item.id || '',
                name: item.name,
                category: item.category || null,
                type: item.type || null,
                size: item.size || null,
                thc: item.thc || null,
                cbd: item.cbd || null,
                lineage: item.lineage || null,
                thoughts: item.thoughts || null,
                createdAt: item.createdAt || new Date(),
                userId: item.userId, 
                postId: item.postId || null, 
              }}
              key={item.id || ''}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 customBlue p-4 roundShadow">
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
    </>
  );
};

export default StashSearch;

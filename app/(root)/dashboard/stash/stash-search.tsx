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

type StashSearchProps = {
  stashItems: StashItem[];
};

const StashSearch: React.FC<StashSearchProps> = ({ stashItems }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    category: 'all', // Default to "all" instead of an empty string
    type: 'all', // Default to "all" instead of an empty string
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const filteredItems = stashItems.filter((item) => {
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

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* Search by Name */}
        <Input
          type="text"
          name="name"
          placeholder="Search by name"
          value={searchParams.name}
          onChange={handleInputChange}
        />

        {/* Filter by Category */}
        <Select
          value={searchParams.category}
          onValueChange={(value) =>
            setSearchParams((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger className="bg-white w-[120px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="flower">Flower</SelectItem>
            <SelectItem value="vape">Vape</SelectItem>
            <SelectItem value="edible">Edible</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter by Type */}
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

      {/* Display Filtered Items */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-center">
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div> // Replace with ProductCard if needed
        ))}
      </div>
    </>
  );
};

export default StashSearch;

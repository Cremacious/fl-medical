import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const HistorySearch = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-lg mb-4 container mx-auto">
        <div className="flex flex-row justify-between items-center p-4">
          <div className="flex flex-row gap-2">
            <Button>Add New</Button>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>Search:</div>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySearch;

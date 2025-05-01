import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

const HistorySearch = () => {
  return (
    <div className="flex justify-center">
      <div className="customBlue mb-4 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex flex-row gap-2 mb-4 md:mb-0 w-full">
            <Button asChild className="w-full md:w-xs">
              <Link href="/dashboard/history/add-purchase">
                Add New Purchase
              </Link>
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="textOrange font-bold text-lg">Search:</div>
            <Select>
              <SelectTrigger className="bg-white w-[100px]">
                <SelectValue className="text-black" placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px] bg-white">
                <SelectValue className="" placeholder="Year" />
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

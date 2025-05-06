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

const StashSearch = () => {
  return (
    <div className="flex justify-center">
      <div className="customBlue container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4">
          <div className="flex flex-row gap-2 w-full">
            <Button asChild className="w-full md:w-auto">
              <Link href="/dashboard/history/add-purchase">Add New Item</Link>
            </Button>
          </div>

          <Input className="bg-white" placeholder="Search By..." />
          <div className="flex flex-row md:gap-4 gap-8 justify-evenly items-center">
            <Select>
              <SelectTrigger className="bg-white w-[120px]">
                <SelectValue className="text-black" placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px] bg-white">
                <SelectValue className="" placeholder="Type" />
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

export default StashSearch;

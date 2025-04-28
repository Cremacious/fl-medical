'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const FriendSearch = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl bg-gray-200 p-2 m-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-evenly gap-2 md:gap-4">
          <div className="flex flex-row gap-2">
            <Input
              placeholder="Search Friend By Username"
              className="bg-white max-w-sm"
            />
            <Button>Search</Button>
          </div>
          <div>
            <Separator
              orientation="vertical"
              className="h-full w-px bg-slate-800 md:block hidden"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Input
              placeholder="Find Friend By Username"
              className="bg-white max-w-sm"
            />
            <Button>Send Request</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSearch;

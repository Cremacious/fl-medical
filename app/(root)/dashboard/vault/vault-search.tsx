'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VaultSearch = () => {
  return (
    <div className="">
      <div className="max-w-7xl bg-gray-200 p-2 m-4 rounded-lg shadow-lg">
        <div className="flex gap-4 flex-row">
          <Button>Click</Button>
          <Input className="bg-white" />
        </div>
      </div>
    </div>
  );
};

export default VaultSearch;

'use client';
import { StashItem } from '@/lib/types';
import icon from '@/assets/images/icons/stash/vape.png';
import Image from 'next/image';
import { useState } from 'react';

const StashSelector = ({ stashItems }: { stashItems: StashItem[] }) => {
  const [allSelectedStashItems, setAllSelectedStashItems] = useState<
    StashItem[]
  >([]);

  const handleStashSelect = (stash: StashItem) => {
    setAllSelectedStashItems((prev) => {
      const isAlreadySelected = prev.some((item) => item.id === stash.id);
      if (isAlreadySelected) {
        return prev.filter((item) => item.id !== stash.id);
      } else {
        return [...prev, stash];
      }
    });
  };

  const handleClick = () => {
    console.log('allSelectedStashItems', allSelectedStashItems);
  };

  return (
    <>
      <div className="bg-white p-4 roundShadow">
        <div>Select From Your Stash</div>
        <div className="flex flex-row gap-4 overflow-x-scroll">
          {stashItems.map((item) => {
            const isSelected = allSelectedStashItems.some(
              (selected) => selected.id === item.id
            );
            return (
              <div
                key={item.id}
                onClick={() => handleStashSelect(item)}
                className={`cursor-pointer ${
                  isSelected
                    ? 'border-2 border-red-500'
                    : 'border-2 border-transparent'
                }`}
              >
                <div className="customBlue animationEffect roundShadow p-4 flex flex-col gap-3 h-32 w-32">
                  <div className="text-center textOrange truncate text-[clamp(0.8rem, 2vw, 1rem)]">
                    {item.name}
                  </div>
                  <Image
                    src={icon}
                    alt="Stash Icon"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default StashSelector;

'use client';
import { StashItem } from '@/lib/types';
import icon from '@/assets/images/icons/stash/vape.png';
import Image from 'next/image';
import useStashStore from '@/lib/store/stashStore';

const StashSelector = ({ stashItems }: { stashItems: StashItem[] }) => {
  const { selectedStashItems, addStashItem, removeStashItem } = useStashStore();

  const handleStashSelect = (stash: StashItem) => {
    const isAlreadySelected = selectedStashItems.some(
      (item) => item.id === stash.id
    );
    if (isAlreadySelected) {
      if (stash.id) {
        removeStashItem(stash.id);
      }
    } else {
      addStashItem(stash);
      console.log(selectedStashItems);
    }
  };

  return (
    <>
      <div className="bg-white p-4 roundShadow">
        <div>Select From Your Stash</div>
        <div className="flex flex-row gap-4 overflow-x-scroll">
          {stashItems.map((item) => {
            const isSelected = selectedStashItems.some(
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
      </div>
    </>
  );
};

export default StashSelector;

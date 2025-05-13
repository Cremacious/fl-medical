import { create } from 'zustand';
import { StashItem } from '@/lib/types';

type StashStore = {
  selectedStashItems: StashItem[];
  addStashItem: (item: StashItem) => void;
  removeStashItem: (id: string) => void;
  clearStashItems: () => void;
};

const useStashStore = create<StashStore>((set) => ({
  selectedStashItems: [],
  addStashItem: (item) =>
    set((state) => ({
      selectedStashItems: [...state.selectedStashItems, item],
    })),
  removeStashItem: (id) =>
    set((state) => ({
      selectedStashItems: state.selectedStashItems.filter(
        (item) => item.id !== id
      ),
    })),
  clearStashItems: () => set({ selectedStashItems: [] }),
}));

export default useStashStore;
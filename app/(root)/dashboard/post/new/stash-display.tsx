import { getAllStashItems } from '@/lib/actions/stash.actions';
import StashSelector from './stash-selector';

const StashDisplay = async () => {
  const stashItems = (await getAllStashItems()).map((item) => ({
    ...item,
    type: item.type ?? undefined,
    category: item.category ?? undefined,
    size: item.size ?? undefined,
    thc: item.thc ?? undefined,
    cbd: item.cbd ?? undefined,
    lineage: item.lineage ?? undefined,
    thoughts: item.thoughts ?? undefined,
  }));

  return (
    <>
      <StashSelector stashItems={stashItems} />
    </>
  );
};

export default StashDisplay;

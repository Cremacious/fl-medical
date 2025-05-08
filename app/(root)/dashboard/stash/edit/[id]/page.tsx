import EditStashForm from './edit-stash-form';
import { getStashItemById } from '@/lib/actions/stash.actions';

const EditStashPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const item = await getStashItemById(id);
  return (
    <div className="newPage">
      <div className="customBlue roundShadow py-8 px-4">
        <div className="customCyan roundShadow p-4">
          <EditStashForm
            item={{
              ...item,
              category: item.category ?? undefined,
              type: item.type ?? undefined,
              size: item.size ?? undefined,
              thc: item.thc ?? undefined,
              cbd: item.cbd ?? undefined,
              lineage: item.lineage ?? undefined,
              thoughts: item.thoughts ?? undefined,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditStashPage;

import AddStashForm from './add-stash-form';
import AddFromHistory from './add-from-history';
import { getAllPurchaseItemsFromHistory } from '@/lib/actions/history.actions';

const AddStashPage = async () => {
  const purchaseItems = await getAllPurchaseItemsFromHistory();
  console.log('Purchase Items:', purchaseItems);
  return (
    <>
      <div className="newPage">
        <div className="customBlue roundShadow py-8 px-4">
          <div className="customCyan roundShadow p-4">
            <AddFromHistory />
            <AddStashForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStashPage;

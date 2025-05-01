import AddPurchaseForm from './add-purchase-form';

const AddPurchasePage = () => {
  return (
    <div className="newPage">
      <div className="px-4 py-8 roundShadow customBlue">
        <div className="customCyan p-4 roundShadow">
          <AddPurchaseForm />
        </div>
      </div>
    </div>
  );
};

export default AddPurchasePage;

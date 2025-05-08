import AddStashForm from './add-stash-form';

const AddStashPage = async () => {
  return (
    <>
      <div className="newPage">
        <div className="customBlue roundShadow py-8 px-4">
          <div className="customCyan roundShadow p-4">
            <AddStashForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStashPage;

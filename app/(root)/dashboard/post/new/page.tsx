import NewPostForm from './new-post-form';

const NewPostPage = () => {
  return (
    <div className="newPage min-h-screen">
      <div className="customBlue px-4 py-8 roundShadow">
        <div className="customCyan roundShadow">
       
          <NewPostForm />
        </div>
      </div>
    </div>
  );
};

export default NewPostPage;

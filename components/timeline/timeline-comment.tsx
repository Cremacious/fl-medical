const TimelineComment = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <img
          src="https://placekitten.com/32/32"
          alt="User Avatar"
          className="w-6 h-6 rounded-full"
        />
        <div>
          <p className="text-gray-800 font-semibold">Name Here</p>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default TimelineComment;

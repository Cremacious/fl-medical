import TimelinePost from '@/components/timeline/timeline-post';
import Image from 'next/image';
import stock from '@/public/stock.jpg';

const ProfilePage = () => {
  return (
    <div className="newPage">
      <div className="customBlue px-4 py-8 roundShadow">
        <div className="customCyan roundShadow py-4 md:p-6">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="customBlue roundShadow p-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={stock}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    width={128}
                    height={128}
                    alt="image"
                  />
                  <h1 className="text-xl font-bold">NAME</h1>
                  {/* <p className="text-gray-700">Software Developer</p> */}
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Add Friend
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <TimelinePost />
                  <TimelinePost />
                  <TimelinePost />
                  <TimelinePost />
                  <TimelinePost />
                  <TimelinePost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

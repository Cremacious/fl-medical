import TimelinePost from '@/components/timeline/timeline-post';
import Image from 'next/image';
import stock from '@/public/stock.jpg';

const ProfilePage = () => {
  return (
    <div className="newPage">
      <div className="customCyan roundShadow">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white roundShadow p-6">
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
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Details
                  </span>
                  <ul>
                    <li className="mb-2">Detail</li>
                    <li className="mb-2">Detail</li>
                    <li className="mb-2">Detail</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

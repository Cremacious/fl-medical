import TimelinePost from '@/components/timeline/timeline-post';
import Image from 'next/image';
import { getAllUserPosts } from '@/lib/actions/post.actions';
// import { Post } from '@/lib/types';

const ProfilePage = async () => {
const posts = await getAllUserPosts();

  return (
    <div className="newPage min-h-screen">
      <div className="customBlue min-h-screen px-4 py-8 roundShadow">
        <div className="customCyan min-h-screen roundShadow py-4 md:p-6">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="customBlue roundShadow p-6">
                <div className="flex flex-col items-center">
                  {/* <Image
                    src={stock}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    width={128}
                    height={128}
                    alt="image"
                  /> */}
                  <h1 className="text-xl font-bold">NAME</h1>
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
                {posts && posts.length > 0 ? (
                    posts.map((post) => {
                      const transformedPost = {
                        ...post,
                        stashItems: Array.isArray(post.stashItems)
                          ? post.stashItems.filter(
                              (item): item is { id: string; name: string; type?: string; category?: string; size?: string; thc?: string; cbd?: string; lineage?: string; thoughts?: string } =>
                                typeof item === 'object' &&
                                item !== null &&
                                'id' in item &&
                                'name' in item
                            )
                          : undefined,
                      };
                      return <TimelinePost key={post.id} post={transformedPost} />;
                    })
                  ) : (
                    <p>No posts available</p>
                  )}
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

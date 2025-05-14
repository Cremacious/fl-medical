import { Badge } from '@/components/ui/badge';
import { getPostById } from '@/lib/actions/post.actions';
import { Post } from '@/lib/types';

const PostPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const post = await getPostById(id);
  console.log(post);
  return (
    <>
      <div className="newPage min-h-screen">
        <div className="customBlue min-h-screen px-4 py-8 roundShadow">
          <div className="customCyan min-h-screen roundShadow py-4 md:p-6">
            <div className="customBlue roundShadow">
              <div className="px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/1200x500"
                    />
                  </div>

                  {Array.isArray(post?.stashItems) &&
                  post.stashItems.length > 0 ? (
                    <div>
                      Hey{' '}
                      {Array.isArray(post?.stashItems) &&
                        post.stashItems.map((item, index) => (
                          <span key={index}>{JSON.stringify(item)}</span>
                        ))}
                    </div>
                  ) : (
                    <div>Ho</div>
                  )}
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-bold mt-4 textOrange text-lg">
                          Strains In This Session
                        </h2>
                        <div className="flex p-4 justify-evenly items-center flex-wrap">
                          <Badge className="m-2">Stash Item #!</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <div className="textOrange mb-4 font-bold">
                        {/* {post?.date?.toLocaleDateString()} */}
                      </div>
                      <p className="leading-relaxed text-lg mb-4 text-white">
                        Meggings portland fingerstache lyft, post-ironic fixie
                        man bun banh mi umami everyday carry hexagon locavore
                        direct trade art party. Locavore small batch listicle
                        gastropub farm-to-table lumbersexual salvia messenger
                        bag. Coloring book flannel truffaut craft beer drinking
                        vinegar sartorial, disrupt fashion axe normcore meh
                        butcher. Portland 90's scenester vexillologist forage
                        post-ironic asymmetrical, chartreuse disrupt butcher
                        paleo intelligentsia pabst before they sold out four
                        loko. 3 wolf moon brooklyn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;

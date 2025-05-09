import { Badge } from '@/components/ui/badge';

const PostPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  return (
    <>
      <div className="newPage">
        <div className="text-gray-600 body-font">
          <div className="px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Name Here
                    </h2>
                    <div className="flex p-4 justify-evenly items-center flex-wrap">
                      <Badge className="m-2">Strain Name</Badge>
                      <Badge className="m-2">Strain Name</Badge>
                      <Badge className="m-2">Strain Name</Badge>
                      <Badge className="m-2">Strain Name</Badge>
                    </div>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <div className="text-slate-800 mb-4">Date Here</div>
                  <p className="leading-relaxed text-lg mb-4">
                    Meggings portland fingerstache lyft, post-ironic fixie man
                    bun banh mi umami everyday carry hexagon locavore direct
                    trade art party. Locavore small batch listicle gastropub
                    farm-to-table lumbersexual salvia messenger bag. Coloring
                    book flannel truffaut craft beer drinking vinegar sartorial,
                    disrupt fashion axe normcore meh butcher. Portland 90's
                    scenester vexillologist forage post-ironic asymmetrical,
                    chartreuse disrupt butcher paleo intelligentsia pabst before
                    they sold out four loko. 3 wolf moon brooklyn.
                  </p>
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

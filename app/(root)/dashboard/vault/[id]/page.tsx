import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ItemPage = () => {
  return (
    <div className="newPage">
      <div className="flex justify-center">
        <div className="customCyan md:w-1/2 px-4 py-8 roundShadow">
          <div className="customBlue roundShadow p-6">
            <h1 className="text-3xl text-center textOrange font-extrabold">
              Sour Diesel
            </h1>
            <p className="text-white">User thinks...</p>
            <p className="mb-4 text-white">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <div className="font-extrabold textOrange">Category</div>
                <div className="text-white font-bold">Topical</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
                <div className="font-extrabold textOrange">Type</div>
                <div className="text-white font-bold">Hybrid</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
                <div className="font-extrabold textOrange">Size</div>
                <div className="text-white font-bold">1G</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-gray-200 pt-2">
                <div className="font-extrabold textOrange">THC</div>
                <div className="text-white font-bold">22%</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-gray-400 pt-2">
                <div className="font-extrabold textOrange">CBD</div>
                <div className="text-white font-bold">10%</div>
              </div>
              <div className="flex flex-row justify-between border-t-2 border-gray-400 pt-2">
                <div className="font-extrabold textOrange">Lineage</div>
                <div className="flex-1 text-right break-words text-white font-bold">
                  Girl Scout Cookies x Pineapple Express
                </div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-b-slate-200 pt-2">
                <div className="font-extrabold textOrange">Quantity</div>
                <div className="text-white font-bold">4</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-b-slate-200 pt-2">
                <div className="font-extrabold textOrange">Price Per</div>
                <div className="text-white font-bold">$25</div>
              </div>
              <div className="flex flex-row justify-between border-t-2  border-b-slate-200 pt-2">
                <div className="font-extrabold textOrange">Details</div>
                <div className="text-white font-bold">View</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

{
  /* <h1 className="text-3xl title-font font-medium mb-4">
Sour Diesel
</h1>
<p>User thinks...</p>
<p className="mb-4">
Fam locavore kickstarter distillery. Mixtape chillwave tumeric
sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
seitan poutine tumeric. Gastropub blue bottle austin listicle
pour-over, neutra jean.
</p>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500">Supplier</p>
<p className="ml-auto text-gray-900">Trulieve</p>
</div>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500">Type</p>
<p className="ml-auto text-gray-900">Vape</p>
</div>
<div className="flex border-t border-gray-200 py-2">
<p className="text-gray-500"></p>
<p className="ml-auto text-gray-900">Vape</p>
</div>
</div>
<img
alt="ecommerce"
className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
src="https://dummyimage.com/400x400"
/> */
}

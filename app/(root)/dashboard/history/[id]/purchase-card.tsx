import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PurchaseCard = () => {
  return (
    <Card className="customBlue mx-2 md:mx-0">
      <CardHeader>
        <CardTitle className="text-white font-extrabold">Title</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="font-extrabold textOrange">Category</div>
            <div className="text-white font-bold">Topical</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">Type</div>
            <div className="text-white font-bold">Hybrid</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">Size</div>
            <div className="text-white font-bold">1G</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">THC</div>
            <div className="text-white font-bold">22%</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">CBD</div>
            <div className="text-white font-bold">10%</div>
          </div>
          <div className="flex flex-row justify-between border-t-2 border-[#3e9495]pt-2">
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
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;

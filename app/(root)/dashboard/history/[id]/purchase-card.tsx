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
    <Card className="">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between border-b-2 border-b-slate-200 pb-2">
            <div className="font-bold">Category</div>
            <div>Topical</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">Type</div>
            <div>Hybrid</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">Size</div>
            <div>1G</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">THC</div>
            <div>22%</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">CBD</div>
            <div>10%</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 border-b-slate-200 pb-2">
            <div className="font-bold">Lineage</div>
            <div className="flex-1 text-right break-words">
              Girl Scout Cookies x Pineapple Express
            </div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">Quantity</div>
            <div>4</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">Price Per</div>
            <div>$25</div>
          </div>
          <div className="flex flex-row justify-between border-b-2  border-b-slate-200 pb-2">
            <div className="font-bold">Details</div>
            <div>View</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;

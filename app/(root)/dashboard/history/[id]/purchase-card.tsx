import ProductCard from '@/components/shared/products/product-card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

import { PurchaseItem } from '@/lib/types';

const PurchaseCard = ({ purchase }: { purchase: PurchaseItem }) => {
  return (
    <Card className="customBlue mx-2 md:mx-0 animationEffect">
      <CardHeader>
        <CardTitle className="textOrange font-extrabold">
          {purchase.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="font-extrabold textOrange">Category</div>
            <div className="text-white font-bold">{purchase.category}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">Type</div>
            <div className="text-white font-bold">{purchase.type}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">Size</div>
            <div className="text-white font-bold">{purchase.size}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">THC</div>
            <div className="text-white font-bold">{purchase.thc}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-[#3e9495] pt-2">
            <div className="font-extrabold textOrange">CBD</div>
            <div className="text-white font-bold">{purchase.cbd}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2 border-[#3e9495]pt-2">
            <div className="font-extrabold textOrange">Lineage</div>
            <div className="flex-1 text-right break-words text-white font-bold">
              {purchase.lineage}
            </div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-b-slate-200 pt-2">
            <div className="font-extrabold textOrange">Quantity</div>
            <div className="text-white font-bold">{purchase.quantity}</div>
          </div>
          <div className="flex flex-row justify-between border-t-2  border-b-slate-200 pt-2">
            <div className="font-extrabold textOrange">Price Per</div>
            <div className="text-white font-bold">${purchase.price}</div>
          </div>

          <div className="flex justify-center mt-4">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="font-bold">View Details</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="customBlue border-none">
                <AlertDialogHeader>
                  <AlertDialogTitle className="textOrange font-bold">
                    {purchase.name}'s details...
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-white">
                    {purchase.details}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;

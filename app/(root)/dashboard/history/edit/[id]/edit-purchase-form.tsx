'use client';

import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { purchaseSchema } from '@/lib/validators';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { CirclePlus, MinusCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { editPurchase } from '@/lib/actions/history.actions';
import { Purchase } from '@/lib/types';

const EditPurchaseForm = ({ purchase }: { purchase: Purchase }) => {
  const form = useForm<z.infer<typeof purchaseSchema>>({
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      id: purchase.id,
      dispensary: purchase.dispensary || '',
      date: new Date(purchase.date) || new Date(),
      total: purchase.total || 0,
      items: purchase.items.map((item) => ({
        id: item.id || crypto.randomUUID(),
        name: item.name || '',
        category: item.category || '',
        type: item.type || '',
        size: item.size || '',
        quantity: item.quantity || 1,
        price: item.price || 0,
        thc: item.thc || '',
        cbd: item.cbd || '',
        lineage: item.lineage || '',
        details: item.details || '',
      })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const onSubmit: SubmitHandler<z.infer<typeof purchaseSchema>> = async (
    data
  ) => {
    const total = data.items.reduce(
      (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1),
      0
    );

    const purchaseData = { ...data, total };

    if (!purchase.id) {
      toast.error('Purchase ID is missing.');
      return;
    }
    const response = await editPurchase(purchase.id, purchaseData);
    if (response.success) {
      toast.success(response.message);
      form.reset();
      redirect('/dashboard/history');
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 customBlue p-4 justify-center roundShadow mb-4">
              <FormField
                control={form.control}
                name="dispensary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="textOrange font-bold text-md">
                      Dispensary
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="Dispensary Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="textOrange font-bold text-md">
                      Purchase Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white max-w-[140px]"
                        type="date"
                        value={field.value?.toISOString().split('T')[0]}
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="customBlue pb-4 pt-2 px-4 roundShadow my-4"
              >
                <div className="flex flex-col items-end mb-4 border-b-4 mx-2">
                  <button
                    onClick={() => remove(index)}
                    className="mt-2 mb-4"
                    type="button"
                  >
                    <MinusCircle className="textOrange" size={40} />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Item Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.category`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Category
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-white">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="flower">Flower</SelectItem>
                            <SelectItem value="vape">Vape</SelectItem>
                            <SelectItem value="concentrate">
                              Concentrate
                            </SelectItem>
                            <SelectItem value="edible">Edible</SelectItem>
                            <SelectItem value="oral">Oral</SelectItem>
                            <SelectItem value="topical">Topical</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.size`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Size
                        </FormLabel>
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Input
                              className="max-w-[100px] bg-white"
                              type="number"
                              placeholder="0"
                              value={field.value?.split(/(g|oz)/)[0] || ''}
                              onChange={(e) => {
                                const unit =
                                  field.value?.match(/(g|oz)/)?.[0] || 'g';
                                field.onChange(`${e.target.value}${unit}`);
                              }}
                            />
                          </FormControl>
                          <FormControl>
                            <Select
                              onValueChange={(unit) => {
                                const number =
                                  field.value?.split(/(g|oz)/)[0] || '';
                                field.onChange(`${number}${unit}`);
                              }}
                              defaultValue={
                                field.value?.match(/(g|oz)/)?.[0] || 'g'
                              }
                            >
                              <SelectTrigger className="w-[80px] bg-white">
                                <SelectValue placeholder="Unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="g">G</SelectItem>
                                <SelectItem value="oz">Oz</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.type`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-white">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sativa">Sativa</SelectItem>
                            <SelectItem value="indica">Indica</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Quantity
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            type="number"
                            placeholder="0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.price`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="textOrange text-md font-bold">
                          Price
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            type="number"
                            placeholder="0"
                            value={field.value || ''}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value) || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row gap-4">
                    <FormField
                      control={form.control}
                      name={`items.${index}.thc`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="textOrange text-md font-bold">
                            THC %
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="w-[90px] bg-white"
                              placeholder="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`items.${index}.cbd`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="textOrange text-md font-bold">
                            CBD %
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=" bg-white w-[90px]"
                              placeholder="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name={`items.${index}.lineage`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="textOrange text-md font-bold">
                        Lineage
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-white  max-w-sm"
                          placeholder="i.e. Cookies x Kush Mints"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`items.${index}.details`}
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="textOrange text-md font-bold">
                        Extra Details
                      </FormLabel>
                      <FormDescription className="text-white font-bold">
                        Share any additional details
                      </FormDescription>
                      <FormControl>
                        <Textarea className="w-full bg-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}




            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={() =>
                  append({
                    id: crypto.randomUUID(),
                    name: '',
                    category: '',
                    type: '',
                    size: '',
                    quantity: 1,
                    price: 0,
                    thc: '',
                    cbd: '',
                    lineage: '',
                    details: '',
                  })
                }
                className="flex items-center justify-center textOrange hover:cursor-pointer"
              >
                <CirclePlus size={40} />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex flex-row gap-8 justify-evenly px-6 py-2 roundShadow customBlue">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditPurchaseForm;

'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

import { Textarea } from '@/components/ui/textarea';
import { insertStashItemSchema } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { editStashItem, deleteStashItem } from '@/lib/actions/stash.actions';
import { redirect } from 'next/navigation';
import { StashItem } from '@/lib/types';

const EditStashForm = ({ item }: { item: StashItem }) => {
  const { id, name, category, type, size, thc, cbd, lineage, thoughts } = item;
  const form = useForm<z.infer<typeof insertStashItemSchema>>({
    resolver: zodResolver(insertStashItemSchema),
    defaultValues: {
      name,
      category,
      type,
      size,
      thc,
      cbd,
      lineage,
      thoughts,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertStashItemSchema>> = async (
    data
  ) => {
    if (!id) {
      toast.error('Error: Missing item ID');
      return;
    }
    const response = await editStashItem(id, data);
    if (response.success) {
      toast.success(response.message);
      form.reset();
      redirect('/dashboard/stash');
    } else {
      toast.error(`Error: ${response.message}`);
    }
  };

  const handleDelete = async () => {
    if (!id) {
      toast.error('Error: Missing item ID');
      return;
    }
    const response = await deleteStashItem(id);
    if (response.success) {
      toast.success(response.message);
      redirect('/dashboard/stash');
    } else {
      toast.error(`Error: ${response.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Form {...form}>
        <form
          className="customBlue p-4 my-4 roundShadow"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-row justify-end">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-red-500 hover:bg-red-400 font-bold text-white"
                >
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="customBlue">
                <AlertDialogHeader>
                  <AlertDialogTitle className="textOrange font-bold text-lg">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-white">
                    This action cannot be undone. This will permanently delete
                    your item from your stash.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-white border-none">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="textOrange text-md font-bold">
                    Strain Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:max-w-1/2 bg-white"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="category"
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
                      <SelectItem value="concentrate">Concentrate</SelectItem>
                      <SelectItem value="edible">Edible</SelectItem>
                      <SelectItem value="topical">Topical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
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
                      <SelectTrigger className="w-full  bg-white">
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
              name="size"
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
                          const unit = field.value?.match(/(g|oz)/)?.[0] || 'g';
                          field.onChange(`${e.target.value}${unit}`);
                        }}
                      />
                    </FormControl>
                    <FormControl>
                      <Select
                        onValueChange={(unit) => {
                          const number = field.value?.split(/(g|oz)/)[0] || '';
                          field.onChange(`${number}${unit}`);
                        }}
                        defaultValue={field.value?.match(/(g|oz)/)?.[0] || 'g'}
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
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="thc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="textOrange text-md font-bold">
                    THC %
                  </FormLabel>
                  <FormControl>
                    <Input className="bg-white" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cbd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="textOrange text-md font-bold">
                    CBD %
                  </FormLabel>
                  <FormControl>
                    <Input className="bg-white" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lineage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="textOrange text-md font-bold">
                    Lineage
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[225px] bg-white"
                      placeholder="i.e. Cookies x Kush Mints"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="thoughts"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="textOrange text-md font-bold">
                  Personal Thoughts
                </FormLabel>
                <FormControl>
                  <Textarea className="w-full bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center mt-6">
            <Button type="submit">Submit</Button>
            <div className="flex flex-row justify-end"></div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditStashForm;

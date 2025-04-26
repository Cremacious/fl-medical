'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const AddItemForm = () => {
  const form = useForm({});
  return (
    <>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>Enter the name of the item</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dispensary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dispensary</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Where was it purchased from?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sativa">Sativa</SelectItem>
                    <SelectItem value="indica">Indica</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Sativa, Indica, or Hybrid</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="flower">Flower</SelectItem>
                    <SelectItem value="vape">Vape</SelectItem>
                    <SelectItem value="concentrate">Concentrate</SelectItem>
                    <SelectItem value="edible">Edible</SelectItem>
                    <SelectItem value="oral">Oral</SelectItem>
                    <SelectItem value="topical">Topical</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Category of cannabis product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>THC %</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
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
                <FormLabel>CBD %</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Input
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
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="g">G</SelectItem>
                        <SelectItem value="oz">Oz</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Enter whole or decimal number e.g.'1', '0.5'
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lineage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lineage</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the lineage of the item e.g. Creamsicle x Tiki Cookies
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default AddItemForm;

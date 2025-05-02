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
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const AddStashForm = () => {
  const form = useForm({});
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form>
          {/* Name Field */}
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

          {/* Category, Type, Quantity */}
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

          {/* THC and CBD Fields */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
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
                      className="w-full bg-white"
                      placeholder="i.e. Cookies x Kush Mints"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Text Areas */}
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
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddStashForm;

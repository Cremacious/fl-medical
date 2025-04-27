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

const AddItemForm = () => {
  const form = useForm({});
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex items-center justify-center">
      <div className="border-8 border-blue-200 p-4 rounded-lg">
        <Form {...form}>
          <form>
            {/* Name Field */}
            <div className="">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Strain Name</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-sm"
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
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
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
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
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
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Input
                          className="max-w-[100px]"
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
                          <SelectTrigger className="w-[80px]">
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

            {/*  Date, Dispensary, Price */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purchase Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full bg-white pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dispensary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dispensary Name</FormLabel>
                    <FormControl>
                      <Input className="max-w-sm" {...field} />
                    </FormControl>
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
                      <Input
                        className="max-w-sm"
                        type="number"
                        placeholder="0"
                        {...field}
                      />
                    </FormControl>
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
                    <FormLabel>THC %</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-[120px]"
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
                name="cbd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CBD %</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-[120px]"
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
                name="lineage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lineage</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-sm"
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
              name="details"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Additional Details</FormLabel>
                  <FormControl>
                    <Textarea className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thoughts"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Personal Thoughts</FormLabel>
                  <FormControl>
                    <Textarea className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddItemForm;

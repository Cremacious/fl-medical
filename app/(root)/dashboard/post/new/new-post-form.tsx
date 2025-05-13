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
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema } from '@/lib/validators';
import StashDisplay from './stash-display';
import { Input } from '@/components/ui/input';

const NewPostForm = () => {
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      activity: '',
      location: 'N/A',
      stashItems: [],
      content: 'N/A',
      date: new Date(),
      id: crypto.randomUUID(),
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof postSchema>> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-red-100">
        Form page
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="munchies">Munchies</SelectItem>
                        <SelectItem value="nap">Nap</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input className="bg-white" placeholder="Location" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What did you do?</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white"
                      placeholder="What did you do..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default NewPostForm;

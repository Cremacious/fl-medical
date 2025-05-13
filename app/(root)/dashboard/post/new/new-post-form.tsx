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
import useStashStore from '@/lib/store/stashStore';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { createPost } from '@/lib/actions/post.actions';

const NewPostForm = () => {
  const { selectedStashItems } = useStashStore();
  const [manualItems, setManualItems] = useState<string[]>([]);

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

  useEffect(() => {
    const combinedItems = [
      ...selectedStashItems.map((item) => ({
        ...item,
        id: item.id || crypto.randomUUID(),
      })),
      ...manualItems.map((item, index) => ({
        id: `manual-${index}`,
        name: item,
      })),
    ];
    form.setValue('stashItems', combinedItems);
  }, [selectedStashItems, manualItems, form]);

  const onSubmit: SubmitHandler<z.infer<typeof postSchema>> = async (data) => {
    console.log('Form submitted:', data);
    const response = await createPost(data);
    if (response.success) {
      toast.success('Post created successfully');
      form.reset();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="bg-red-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase Date</FormLabel>
                <FormControl>
                  <Input
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
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
                  <Input {...field} placeholder="Location" />
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
                  <Input {...field} placeholder="What did you do..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stashItems"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stash Items</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="Add stash items manually..."
                    onChange={(e) => {
                      const items = e.target.value
                        .split(',')
                        .map((item) => item.trim())
                        .filter((item) => item);
                      setManualItems(items);
                    }}
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
  );
};

export default NewPostForm;

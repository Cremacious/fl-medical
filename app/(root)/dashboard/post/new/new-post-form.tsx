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

const NewPostForm = () => {
//   const form = useForm<z.infer<typeof postSchema>>({
//     resolver: zodResolver(postSchema), 
//     defaultValues: { activity: '', 
//         location: 'N/A', 
//         stashItems: [], 
//         content: 'N/A', 
//         date: new Date(),
//     },
//   });

  const onSubmit: SubmitHandler<z.infer<typeof postSchema>> = async (data) => {
    console.log(data);
  };

  return <></>;
};

export default NewPostForm;

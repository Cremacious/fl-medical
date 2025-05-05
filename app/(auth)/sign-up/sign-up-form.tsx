'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpFormSchema } from '@/lib/validators';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { signUpUser } from '@/lib/actions/user.actions';

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpFormSchema>> = async (
    data
  ) => {
    console.log(data);
    const response = await signUpUser(data);
    if (response.success) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="py-32">
            <div className="container mx-auto">
              <div className="flex flex-col gap-4">
                <div className="mx-auto w-full max-w-sm roundShadow px-4 py-6 customCyan">
                  <div className="customBlue p-4 roundShadow">
                    <div className="flex flex-col items-center mb-4">
                      {/* <a href={logo.url} className="mb-6 flex items-center gap-2">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
              </a> */}
                      <h1 className="mb-2 text-2xl font-bold">Sign Up</h1>
                    </div>
                    <div className="">
                      <div className="grid gap-4">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="textOrange text-md font-bold">
                                Username
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className=" bg-white"
                                  placeholder="Username"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div>
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="textOrange text-md font-bold">
                                  Password
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="password"
                                    className=" bg-white"
                                    placeholder="Password"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="textOrange text-md font-bold">
                                  Confirm Password
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="password"
                                    className=" bg-white"
                                    placeholder="Confirm Password"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button type="submit" className="mt-2 w-full">
                          Sign Up
                        </Button>
                      </div>
                      <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-white">
                        <p>Already have an account?</p>
                        <Link
                          href="/sign-in"
                          className="font-medium textOrange"
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;

{
  /* <FormField
control={form.control}
name="username"
render={({ field }) => (
  <FormItem>
    <FormLabel className="textOrange text-md font-bold">
      Username
    </FormLabel>
    <FormControl>
      <Input
        className=" bg-white"
        placeholder="Username"
        {...field}
      />
    </FormControl>
    <FormMessage />
  </FormItem>
)}
/> */
}

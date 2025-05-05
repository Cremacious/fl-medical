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

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpFormSchema>> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <div className="">
      <Form {...form}>
        <form className="">
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
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                        <div>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="password"
                            placeholder="Confirm password"
                            required
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center space-x-2">
                            <label
                              htmlFor="remember"
                              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remember me
                            </label>
                          </div>
                          <a
                            href="#"
                            className="text-sm text-primary hover:underline"
                          >
                            Forgot password
                          </a>
                        </div>
                        <Button type="submit" className="mt-2 w-full">
                          LOGIN TEXT
                        </Button>
                        {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button> */}
                      </div>
                      <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                        <p>Already have an account?</p>
                        <Link
                          href="/sign-in"
                          className="font-medium text-primary"
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

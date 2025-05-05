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
import { signIn, useSession } from 'next-auth/react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { Label } from '@/components/ui/label';
const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    message: '',
    success: false,
  });

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    );
  };
  return (
    <div className="">
      <form action={action}>
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
                      <Label htmlFor="name">UserName</Label>
                      <Input
                        id="username"
                        name="username"
                        required
                        type="text"
                        autoComplete="username"
                      />
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          required
                          type="password"
                          autoComplete="current-password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          required
                          type="password"
                          autoComplete="current-password"
                        />
                      </div>
                      <SignUpButton />
                      {!data.success && (
                        <div className="text-center text-destructive">
                          {data.message}
                        </div>
                      )}
                    </div>
                    <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-white">
                      <p>Already have an account?</p>
                      <Link href="/sign-in" className="font-medium textOrange">
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

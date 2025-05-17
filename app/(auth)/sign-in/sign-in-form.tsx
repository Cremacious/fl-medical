'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useActionState } from 'react';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useFormState, useFormStatus } from 'react-dom';

const SignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    message: '',
    success: false,
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full font-bold" variant="default">
        {pending ? 'Signing In...' : 'Sign In with credentials'}
      </Button>
    );
  };
  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <Label className="textOrange font-bold" htmlFor="email">
            Email
          </Label>
          <Input
            className="bg-white mt-2"
            id="email"
            name="email"
            required
            type="email"
            // defaultValue={signInDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label className="textOrange font-bold" htmlFor="password">
            Password
          </Label>
          <Input
            className="bg-white mt-2"
            id="password"
            name="password"
            required
            type="password"
            // defaultValue={signInDefaultValues.password}
            autoComplete="current-password"
          />
        </div>
        <div>
          <SignInButton />
          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}
        </div>

        <div className="text-sm text-center text-white">
          Don&apos;t have an account?{' '}
          <span>
            <Link
              target="_self"
              className="link textOrange font-bold"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;

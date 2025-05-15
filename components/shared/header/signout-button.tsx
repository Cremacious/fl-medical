'use client';
import { signOutUser } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const SignOutButton = () => {
  const handleClick = () => {
    signOutUser();
    redirect('/');
  };
  return (
    <>
      <Button className="font-bold" onClick={handleClick}>
        Sign Out
      </Button>
    </>
  );
};

export default SignOutButton;

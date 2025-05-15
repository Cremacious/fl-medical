'use client';
import { signOutUser } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';

const SignOutButton = () => {
  const handleClick = () => {
    signOutUser();
    console.log('dashboard sign out');
  };
  return (
    <>
      <Button onClick={handleClick}>Sign Out</Button>
    </>
  );
};

export default SignOutButton;

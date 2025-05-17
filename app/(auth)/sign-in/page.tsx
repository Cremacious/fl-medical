import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import SignInForm from './sign-in-form';
import { auth } from '@/lib/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import sunset from '@/assets/images/icons/stash/default.png';

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md mx-auto customCyan roundShadow p-4">
        <Card className="customBlue border-none">
          <CardHeader className="space-y-4">
            <Link href="/" className="flex-center">
              <div className="flex justify-center">
                <Image
                  priority={true}
                  src={sunset}
                  width={100}
                  height={100}
                  alt={` logo`}
                />
              </div>
            </Link>
            <CardTitle className="text-center font-lg font-bold textOrange">
              Sign In
            </CardTitle>
            {/* <CardDescription className="text-center">
              Select a method to sign in to your account
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-4">
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;

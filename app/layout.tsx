import { type Metadata } from 'next';

import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/shared/header/header';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

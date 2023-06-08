'use client';

// Next imports
import { SessionProvider } from 'next-auth/react';
// React imports
import { ReactNode } from 'react';

export const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

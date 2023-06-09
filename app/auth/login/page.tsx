'use client';

// Next imports
import { NextPage } from 'next';
import Link from 'next/link';
import { ClientSafeProvider, LiteralUnion, getProviders } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
// React imports
import { useEffect, useState } from 'react';
// Components imports
import AuthFormLogin from '@/components/pages/auth/AuthFormLogin';
import AuthFormProvidersList from '@/components/pages/auth/AuthFormProvidersList';

// TODO: if error in the url, remove it after the refresh
// TODO: if logged in, immediately redirect to dashboard
const AuthPage: NextPage = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      if (response) setProviders(response);
    })();
  }, []);

  return (
    <div className='container mt-8'>
      <div className='max-w-lg mx-auto'>
        <AuthFormLogin />
        <div className='h-32'>
          {providers && (
          <>
            <p className='text-xl text-center font-bold mb-8'>or using</p>
            <AuthFormProvidersList providers={providers} />
          </>
          )}
        </div>
        <p className='mt-16 text-xl text-center font-bold'>
        No account yet?{' '}
          <Link href='/auth/register' className='text-primary cursor-pointer'>
              Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

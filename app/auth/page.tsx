'use client';

// Next imports
import { NextPage } from 'next';
import { getProviders } from 'next-auth/react';
// React imports
import { useEffect, useState } from 'react';
// Components imports
import AuthFormLogin from '@/components/pages/auth/AuthFormLogin';
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';
import AuthFormProvidersList from '@/components/pages/auth/AuthFormProvidersList';

const AuthPage: NextPage = () => {
  // TODO: fix issue with isLoginForm state not updating
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [providers, setProviders] = useState<object>({})

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      if (response) setProviders(response);
    })()
  }, [])

  if (!providers) return <></>;

  return (
    <div className='container mt-8'>
      <div className='max-w-lg mx-auto'>
        {isLoginForm ? (
          <>
            <AuthFormLogin />
            <div>
              <p className='text-xl text-center font-bold mb-8'>or using</p>
              <AuthFormProvidersList providers={providers} />
            </div>
          </>
        ) : (
          <AuthFormRegister />
        )}
        {isLoginForm && (
          <p className='mt-16 text-xl text-center font-bold'>
            No account yet?{' '}
            <span className='text-primary cursor-pointer' onClick={() => setIsLoginForm(false)}>
              Register here
            </span>
          </p>
        )}
        {!isLoginForm && (
          <p className='mt-16 text-xl text-center font-bold'>
            Already have an account?{' '}
            <span className='text-primary cursor-pointer' onClick={() => setIsLoginForm(true)}>
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

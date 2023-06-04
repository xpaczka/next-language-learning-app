'use client';

// Next imports
import { NextPage } from 'next';
// React imports
import { useState } from 'react';
// Components imports
import AuthFormLogin from '@/components/pages/auth/AuthFormLogin';
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';
import AuthFormProvidersList from '@/components/pages/auth/AuthFormProvidersList';

const AuthPage: NextPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <div className='container mt-8'>
      <div className='max-w-lg mx-auto'>
        {isLoginForm ? (
          <>
            <AuthFormLogin />
            <div>
              <p className='text-xl text-center font-bold mb-8'>or using</p>
              <AuthFormProvidersList />
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

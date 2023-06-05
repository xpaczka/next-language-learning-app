'use client';

// React imports
import { useState } from 'react';
// Components imports
import AuthFormLogin from '@/components/pages/auth/AuthFormLogin';
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';
import AuthFormProvidersList from '@/components/pages/auth/AuthFormProvidersList';

const AuthPage = async () => {
  // TODO: fix issue with isLoginForm state not updating
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const response = await fetch('http://localhost:3000/api/auth/providers');
  const providers = await response.json();

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

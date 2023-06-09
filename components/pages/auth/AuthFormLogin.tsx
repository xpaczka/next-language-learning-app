'use client';

// Next imports
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// React imports
import { useRef, FormEvent } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import AuthFormError from './AuthFormError';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
// Hooks imports
import useCredentials from '@/hooks/useCredentials';
import useAuthErrorReload from '@/hooks/useAuthErrorReload';

const AuthFormLogin = () => {
  useAuthErrorReload('/auth/login');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const error = useSearchParams().get('error');

  const { isLoading, sendCredentials } = useCredentials();

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) return;

    await sendCredentials({ email, password });
  };

  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-8'>Login to your account</h1>
      <form onSubmit={formSubmitHandler}>
        <div className='mb-4'>
          <AuthFormInput type='email' placeholder='Email' ref={emailRef} />
        </div>
        <div className='mb-8 flex flex-col items-end'>
          <AuthFormInput type='password' placeholder='Password' ref={passwordRef} />
          {/* TODO: implement forgot password */}
          <Link href='/auth/forgot-password' title='Forgotten password' className='text-primary leading-8 font-bold'>
            Forgot password?
          </Link>
        </div>
        <div className='flex flex-col items-center mb-8'>
          {error && <AuthFormError error={error} />}
          <Button type='submit'>{isLoading ? <LoadingSpinner /> : 'Login'}</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormLogin;

'use client';

// Next imports
import Link from 'next/link';
import { signIn } from 'next-auth/react';
// React imports
import { useRef, FormEvent, useState } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import AuthFormError from './AuthFormError';
import Button from '@/components/Button';

const AuthFormLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) return;

    // TODO: create useForm hook
    try {
      // TODO: redirect to user dashboard if success
      const response = await signIn('credentials', { email, password, redirect: false });

      // TODO: rethink error displaying (leave as it is or use query parameters)
      if (response?.error) setError(response.error);
    } catch (err: any) {
      console.error(err.message || 'Something went wrong');
    }
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
          <Link href='/auth/forgot-password' title='Forgotten password' className='text-primary leading-8 font-bold'>
            Forgot password?
          </Link>
        </div>
        <div className='flex flex-col items-center mb-8'>
          {error && <AuthFormError error={error} />}
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormLogin;

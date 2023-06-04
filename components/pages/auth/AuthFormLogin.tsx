'use client';

// Next imports
import Link from 'next/link';
// React imports
import { useRef, FormEvent } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import Button from '@/components/Button';

const AuthFormLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // validate user input

    const loginData = { email, password };
    console.log(loginData);

    // send request to endpoint
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
        <div className='flex justify-center mb-8'>
          <Button>Login</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormLogin;

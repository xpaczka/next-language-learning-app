'use client';

// React imports
import { useRef, FormEvent } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import Button from '@/components/Button';

const AuthFormRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // validate user input

    const newUserData = { email, username, password };
    console.log(newUserData);

    // send request to endpoint
  };

  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-8'>Create your account</h1>
      <form onSubmit={formSubmitHandler}>
        <div className='mb-4'>
          <AuthFormInput type='email' placeholder='Email' ref={emailRef} />
        </div>
        <div className='mb-4'>
          <AuthFormInput type='text' placeholder='Username' ref={usernameRef} />
        </div>
        <div className='mb-8'>
          <AuthFormInput type='password' placeholder='Password' ref={passwordRef} />
        </div>
        <div className='flex justify-center'>
          <Button>Create account</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormRegister;

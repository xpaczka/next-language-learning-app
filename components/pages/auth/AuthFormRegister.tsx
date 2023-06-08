'use client';

// React imports
import { useRef, FormEvent } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
// Hooks imports
import useCredentials from '@/hooks/useCredentials';

const AuthFormRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { isLoading, sendCredentials } = useCredentials();

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !username || !name || !password) return;

    await sendCredentials({ email, username, name, password, newUser: true });
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
        <div className='mb-4'>
          <AuthFormInput type='text' placeholder='Name' ref={nameRef} />
        </div>
        <div className='mb-8'>
          <AuthFormInput type='password' placeholder='Password' ref={passwordRef} />
        </div>
        <div className='flex flex-col items-center'>
          <Button type='submit'>{isLoading ? <LoadingSpinner /> : 'Create account'}</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormRegister;

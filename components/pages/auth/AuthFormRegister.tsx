'use client';

// React imports
import { useRef, FormEvent, useState } from 'react';
// Components imports
import AuthFormInput from './AuthFormInput';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
// Hooks imports
import useCredentials from '@/hooks/useCredentials';

// TODO: send email on register
const AuthFormRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { sendCredentials } = useCredentials();

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !username || !name || !password) {
      setError('Invalid inputs.');
      setIsLoading(false);
      return;
    }

    const response = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, name, password }),
    });

    const data = await response.json();
    if (data.error) return setError(data.error);

    await sendCredentials({ email, username, name, password, newUser: true });
    setIsLoading(false);
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
          {error && <div className='mb-4 bg-red-500 w-full py-4 px-8 text-white text-center rounded-lg'>{error}</div>}
          <Button type='submit'>{isLoading ? <LoadingSpinner /> : 'Create account'}</Button>
        </div>
      </form>
    </>
  );
};

export default AuthFormRegister;

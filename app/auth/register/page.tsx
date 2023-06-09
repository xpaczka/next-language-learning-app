'use client';

// Next imports
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
// Components imports
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';

// TODO: show errors from the url query
const AuthRegisterPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) return router.replace('/dashboard');

  return (
    <div className='container mt-8'>
      <div className='max-w-lg mx-auto'>
        <AuthFormRegister />
        <p className='mt-16 text-xl text-center font-bold'>
          Already have an account?{' '}
          <Link href='/auth/login' className='text-primary cursor-pointer'>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthRegisterPage;

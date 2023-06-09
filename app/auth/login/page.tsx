'use client';

// Next imports
import Link from 'next/link';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// Components imports
import AuthFormLogin from '@/components/pages/auth/AuthFormLogin';
import AuthFormProvidersList from '@/components/pages/auth/AuthFormProvidersList';

const AuthLoginPage = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // if (session) return router.replace('/dashboard');

  return (
    <div className='container mt-8'>
      <div className='max-w-lg mx-auto'>
        <AuthFormLogin />
        <div className='h-32'>
          <p className='text-xl text-center font-bold mb-8'>or using</p>
          <AuthFormProvidersList />
        </div>
        <p className='mt-16 text-xl text-center font-bold'>
          No account yet?{' '}
          <Link href='/auth/register' className='text-primary cursor-pointer'>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLoginPage;

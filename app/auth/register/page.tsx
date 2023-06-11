'use client';

// Next imports
import Link from 'next/link';
// Components imports
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';
import PageWithRestrictions from '@/app/withRestrictions';

const AuthRegisterPage = () => {
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

export default PageWithRestrictions(AuthRegisterPage, { destination: '/dashboard', sessionAvailable: true });

// Next imports
import { NextPage } from 'next';
import Link from 'next/link';
// Components imports
import AuthFormRegister from '@/components/pages/auth/AuthFormRegister';

// TODO: if error in the url, remove it after the refresh
// TODO: if logged in, immediately redirect to dashboard
const AuthPage: NextPage = () => {
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

export default AuthPage;

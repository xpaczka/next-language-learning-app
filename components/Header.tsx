// Next imports
import Image from 'next/image';
import Link from 'next/link';
// Components imports
import UserMenuHeader from './user/UserMenuHeader';

const Header = () => {
  return (
    <header className='w-full bg-white fixed left-0 top-0 right-0'>
      <div className='container h-16 sm:h-24 flex items-center justify-between'>
        <Link href='/'>
          <Image
            src='/images/fluentify-logo.svg'
            alt='Fluentify Logo'
            height={37}
            width={144}
            className='w-24 sm:w-36'
          />
        </Link>
        <UserMenuHeader />
      </div>
    </header>
  );
};

export default Header;

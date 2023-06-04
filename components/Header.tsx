// Next imports
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full bg-white fixed left-0 top-0 right-0'>
      <Link href='/' className='container h-16 sm:h-24 flex items-center justify-between'>
        <Image
          src='/static/images/fluentify-logo.svg'
          alt='Fluentify Logo'
          height={37}
          width={144}
          className='w-24 sm:w-36'
        />
      </Link>
    </header>
  );
};

export default Header;

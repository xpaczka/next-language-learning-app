// Next imports
import Image from 'next/image';

const Header = () => {
  return (
    <header className='w-full bg-white fixed left-0 top-0 right-0'>
      <div className='container h-16 sm:h-24 flex items-center justify-between'>
        <Image
          src='/static/images/fluentify-logo.svg'
          alt='Fluentify Logo'
          height={37}
          width={145}
          className='w-24 sm:w-36'
        />
      </div>
    </header>
  );
};

export default Header;

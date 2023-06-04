// Next imports
import { NextPage } from 'next';
import Image from 'next/image';
// Components imports
import Button from '@/components/Button';

const Homepage: NextPage = () => {
  return (
    <div className='container flex items-center flex-wrap-reverse'>
      <div className='w-ful lg:w-1/2 text-center lg:text-left'>
        <h1 className='font-bold text-2xl sm:text-4xl lg:text-6xl leading-tight mb-5 sm:mb-10'>
          Master languages like a hero with FLUENTIFY!
        </h1>
        <p className='sm:text-lg lg:text-xl mb-5 sm:mb-8 lg:leading-10'>
          Explore, engage, and conquer fluency on an epic adventure. Join a global community, unlock cultures, and
          unleash your linguistic potential.
        </p>
        <p className='sm:text-lg lg:text-xl font-bold lg:leading-10 mb-6'>
          Start your heroic journey today and let FLUENTIFY be your guide!
        </p>
        <Button href='/auth'>Let's go</Button>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 mb-5 lg:mb-0'>
        <Image
          src='/static/images/different-cultures.jpg'
          alt='People from different cultures'
          height={575}
          width={600}
          className='max-w-[20rem] lg:max-w-full object-contain'
        />
      </div>
    </div>
  );
};

export default Homepage;

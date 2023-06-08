// Next imports
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center pb-1'>
      <Image
        src='/icons/loading-spinner.svg'
        alt='Loading...'
        height={24}
        width={24}
        className='invert animate-spin w-6 h-6 object-contain'
      />
    </div>
  );
};

export default LoadingSpinner;

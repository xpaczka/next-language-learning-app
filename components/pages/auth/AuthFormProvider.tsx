// Next imports
import Image from 'next/image';

interface AuthFormProviderProps {
  provider: any;
  background: string;
}

const AuthFormProvider = ({ provider, background }: AuthFormProviderProps) => {
  // TODO: add sign in functionality
  return (
    <button className={`w-16 aspect-square p-4 rounded-md outline-none border-none ${background}`}>
      <Image
        src={`/icons/${provider.id}-logo.svg`}
        alt={`Login with ${provider.name}`}
        width={32}
        height={32}
        className='w-8 h-8 object-contain invert'
      />
    </button>
  );
};

export default AuthFormProvider;

// Next imports
import Image from 'next/image';
import { signIn } from 'next-auth/react';

interface AuthFormProviderProps {
  id: string; 
  name: string;
  background: string;
}

const AuthFormProvider = ({ id, name, background }: AuthFormProviderProps) => {
  return (
    <button onClick={() => signIn(id)} className={`w-16 aspect-square p-4 rounded-md outline-none border-none ${background}`}>
      <Image
        src={`/icons/${id}-logo.svg`}
        alt={`Login with ${name}`}
        width={32}
        height={32}
        className='w-8 h-8 object-contain invert'
      />
    </button>
  );
};

export default AuthFormProvider;

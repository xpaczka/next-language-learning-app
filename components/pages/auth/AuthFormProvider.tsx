// Next imports
import Image from 'next/image';

interface AuthFormProviderProps {
  name: string;
  icon: string;
  background: string;
}

const AuthFormProvider = ({ name, icon, background }: AuthFormProviderProps) => {
  return (
    <button className={`w-16 aspect-square p-4 rounded-md ${background} outline-none border-none`}>
      <Image
        src={`/static/icons/${icon}`}
        alt={`Login with ${name}`}
        width={32}
        height={32}
        className='w-8 h-8 object-contain invert'
      />
    </button>
  );
};

export default AuthFormProvider;

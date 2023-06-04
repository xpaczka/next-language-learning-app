// Components imports
import AuthFormProvider from './AuthFormProvider';

const AuthFormProvidersList = () => {
  return (
    <div className='flex justify-center gap-8'>
      <AuthFormProvider name='Google' icon='google-logo.svg' background='bg-[#ea4335]' />
      <AuthFormProvider name='Facebook' icon='facebook-logo.svg' background='bg-[#3b5998]' />
      <AuthFormProvider name='Discord' icon='discord-logo.svg' background='bg-[#5865f2]' />
    </div>
  );
};

export default AuthFormProvidersList;

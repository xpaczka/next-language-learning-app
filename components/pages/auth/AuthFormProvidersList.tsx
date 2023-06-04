import AuthFormProvider from './AuthFormProvider';

const providersList = [
  { name: 'Google', icon: 'google-logo.svg', background: '#ea4335' },
  { name: 'Facebook', icon: 'facebook-logo.svg', background: '#3b5998' },
  { name: 'Discord', icon: 'discord-logo.svg', background: '#5865f2' },
];

const AuthFormProvidersList = () => {
  return (
    <div className='flex justify-center gap-8'>
      {providersList.map(provider => (
        <AuthFormProvider
          key={provider.name.toLowerCase()}
          name={provider.name}
          icon={provider.icon}
          background={provider.background}
        />
      ))}
    </div>
  );
};

export default AuthFormProvidersList;

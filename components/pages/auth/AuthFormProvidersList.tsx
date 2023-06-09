// Next imports
import { ClientSafeProvider, LiteralUnion, getProviders } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
// React imports
import { useState, useEffect } from 'react';
// Components imports
import AuthFormProvider from './AuthFormProvider';

const providersData = [
  { id: 'google', background: 'bg-[#ea4335]' },
  { id: 'facebook', background: 'bg-[#3b5998]' },
  { id: 'discord', background: 'bg-[#5865f2]' },
];

const AuthFormProvidersList = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      if (response) setProviders(response);
    })();
  }, []);

  return (
    <div className='flex justify-center gap-8 h-16'>
      {providers && Object.values(providers).filter(provider => provider.id !== 'credentials').map((provider) => {
        const { background } = providersData.find(el => el.id === provider.id)!;
        return <AuthFormProvider key={provider.id} id={provider.id} name={provider.name} background={background} />;
      })}
    </div>
  );
};

export default AuthFormProvidersList;

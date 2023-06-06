// Next imports
import { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
// Components imports
import AuthFormProvider from './AuthFormProvider';

interface ProvidersData {
  id: string;
  background: string;
}

interface AuthFormProvidersListProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

const providersData: ProvidersData[] = [
  { id: 'google', background: 'bg-[#ea4335]' },
  { id: 'facebook', background: 'bg-[#3b5998]' },
  { id: 'discord', background: 'bg-[#5865f2]' },
];

const AuthFormProvidersList = ({ providers }: AuthFormProvidersListProps) => {
  return (
    <div className='flex justify-center gap-8 h-16'>
      {providers && Object.values(providers).map((provider) => {
        const { background } = providersData.find(el => el.id === provider.id)!;
        return <AuthFormProvider key={provider.id} id={provider.id} name={provider.name} background={background} />;
      })}
    </div>
  );
};

export default AuthFormProvidersList;

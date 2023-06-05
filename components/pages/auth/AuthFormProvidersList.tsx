// Components imports
import AuthFormProvider from './AuthFormProvider';

interface ProvidersData {
  id: string;
  background: string;
}

const providersData: ProvidersData[] = [
  { id: 'google', background: 'bg-[#ea4335]' },
  { id: 'facebook', background: 'bg-[#3b5998]' },
  { id: 'discord', background: 'bg-[#5865f2]' },
];

const AuthFormProvidersList = ({ providers }: any) => {
  return (
    <div className='flex justify-center gap-8'>
      {Object.values(providers).map((provider: any) => {
        const { background } = providersData.find(el => el.id === provider.id)!;

        return <AuthFormProvider key={provider.id} provider={provider} background={background} />;
      })}
    </div>
  );
};

export default AuthFormProvidersList;

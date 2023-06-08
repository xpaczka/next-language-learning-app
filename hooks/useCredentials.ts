// Next imports
import { signIn } from 'next-auth/react';
// React imports
import { useState } from 'react';

interface SendCredentialsParams {
  email: string;
  password: string;
  username?: string;
  name?: string;
  newUser?: boolean;
}

interface UseCredentialsReturnValues {
  isLoading: boolean;
  sendCredentials: (params: SendCredentialsParams, newUser?: boolean | undefined) => Promise<void>;
}

const useCredentials = (): UseCredentialsReturnValues => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendCredentials = async (params: SendCredentialsParams): Promise<void> => {
    try {
      setIsLoading(true);

      await signIn('credentials', { ...params });

      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      console.error(err.message || 'Something went wrong');
    }
  };

  return { isLoading, sendCredentials };
};

export default useCredentials;

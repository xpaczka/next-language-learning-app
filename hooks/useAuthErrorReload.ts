// Next imports
import { useRouter, useSearchParams } from 'next/navigation';
// React imports
import { useEffect } from 'react';

const useAuthErrorReload = (redirectTo: string): void => {
  const error = useSearchParams().get('error');
  const router = useRouter();

  useEffect(() => {
    if (window.sessionStorage.getItem('authError')) {
      window.sessionStorage.removeItem('authError');
      router.replace(redirectTo);
    }
  
    if (error) {
      window.sessionStorage.setItem('authError', error);
    }
  }, [])
}

export default useAuthErrorReload;
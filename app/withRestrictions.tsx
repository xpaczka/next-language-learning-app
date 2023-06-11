'use client';

// Next imports
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
// React imports
import { ComponentType } from 'react';

interface RestrictionParams {
  destination: string;
  sessionAvailable: boolean;
}

const PageWithRestrictions = (Component: ComponentType, { destination, sessionAvailable }: RestrictionParams) => {
  const RestrictedPage = () => {
    const { data: session } = useSession();
    const router = useRouter();

    if (sessionAvailable) {
      if (session) {
        return router.replace(destination);
      }
    } else {
      if (!session) {
        return router.replace(destination);
      }
    }

    return <Component />;
  };

  return RestrictedPage;
};

export default PageWithRestrictions;

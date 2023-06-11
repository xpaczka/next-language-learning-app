'use client';

// Next imports
import { useSession } from 'next-auth/react';
// Components imports
import PageWithRestrictions from '../withRestrictions';

// TODO: implement dashboard page
const DashboardPage = () => {
  const { data: session } = useSession();

  return <div className='container'>{JSON.stringify(session)}</div>;
};

export default PageWithRestrictions(DashboardPage, { destination: '/auth/login', sessionAvailable: false });

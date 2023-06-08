'use client';

// Next imports
import { useSession } from 'next-auth/react';

// TODO: implement dashboard page
const DashboardPage = () => {
  const { data: session } = useSession();

  return <div className='container'>{JSON.stringify(session)}</div>;
};

export default DashboardPage;

'use client';

// Next imports
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// TODO: implement dashboard page
const DashboardPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) return router.replace('/auth/login')

  return <div className='container'>{JSON.stringify(session)}</div>;
};

export default DashboardPage;

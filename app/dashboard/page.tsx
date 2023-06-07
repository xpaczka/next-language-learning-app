'use client';

import { SessionProvider } from 'next-auth/react';
import Dashboard from '@/components/pages/dashboard/Dashboard';

// TODO: move SessionProvider to a more suitable place
const DashboardPage = () => {
  return (
    <SessionProvider>
      <div className='container'>
        <Dashboard />
      </div>
    </SessionProvider>
  );
};

export default DashboardPage;

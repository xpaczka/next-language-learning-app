import { useSession } from 'next-auth/react';

// TODO: implement dashboard page
const Dashboard = () => {
  const { data: session } = useSession();

  return <div>{JSON.stringify(session)}</div>;
};

export default Dashboard;

// Next imports
import { signOut } from 'next-auth/react';
// Components imports
import UserMenuItem from './UserMenuItem';

const UserMenu = () => {
  return (
    <div className='w-52 border-primary border-solid border-2 absolute top-full right-0 cursor-default bg-white p-2.5 rounded-b-md rounded-tl-md'>
      <ul className='text-right mb-3'>
        <UserMenuItem href='/dashboard' label='Dashboard' />
        <UserMenuItem href='/profile' label='Profile' />
        <UserMenuItem href='/membership' label='Membership' />
      </ul>
      <button
        onClick={async () => await signOut({ callbackUrl: '/auth/login' })}
        className='bg-primary hover:bg-[#f5951f] transition-colors rounded-lg w-full py-2 px-3 text-white text-center'
      >
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;

'use client';

// Next imports
import Image from 'next/image';
import { useSession } from 'next-auth/react';
// React imports
import { useState } from 'react';
// Components imports
import UserMenu from './UserMenu';

// TODO: responsive design
// TODO: animate slide down on menu active
const UserMenuHeader = () => {
  const { data: session } = useSession();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  if (!session) return <></>;

  const profileImage = session.user.image ? (
    <Image src={session.user.image} alt={session.user.username} width={48} height={48} />
  ) : (
    <div className='h-12 w-12 p-3 bg-white flex items-center justify-center'>
      <Image
        src='/icons/profile-icon.svg'
        alt={session.user.username}
        width={24}
        height={27}
        className='invert-[0.6]'
      />
    </div>
  );

  return (
    <div
      onMouseOver={() => setIsMenuActive(true)}
      onMouseOut={() => setIsMenuActive(false)}
      className={`flex items-center bg-primary rounded-t-[26px] ${
        !isMenuActive && 'rounded-b-[26px]'
      } pr-4 relative transition-all duration-75`}
    >
      <div className='rounded-full overflow-hidden border-2 border-solid border-primary mr-2.5'>{profileImage}</div>
      <Image src='/icons/arrow-down.svg' alt='Arrow Down' width={16} height={16} className='invert' />
      {isMenuActive && <UserMenu />}
    </div>
  );
};

export default UserMenuHeader;

'use client';

// Next imports
import Image from 'next/image';
import { useSession } from 'next-auth/react';
// React imports
import { useEffect, useState } from 'react';
// Components imports
import UserMenu from './UserMenu';

interface User {
  username: string;
  image: string;
}

// TODO: responsive design
// TODO: animate slide down on menu active
const UserProfileHeader = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (session) {
        const response = await fetch(`http://localhost:3000/api/user/${session?.user.id}`);
        const data = await response.json();

        setUser(data.data.user);
      }
    })();
  }, [session]);

  if (!user) return <></>;

  const profileImage = user.image ? (
    <Image src={user.image} alt={user.username} width={48} height={48} />
  ) : (
    <div className='h-12 w-12 p-3 bg-white flex items-center justify-center'>
      <Image src='/icons/profile-icon.svg' alt={user.username} width={24} height={27} className='invert-[0.6]' />
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

export default UserProfileHeader;

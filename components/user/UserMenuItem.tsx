// Next imports
import Link from 'next/link';

interface UserMenuItemProps {
  href: string;
  label: string;
}

const UserMenuItem = ({ href, label }: UserMenuItemProps) => {
  return (
    <li className='mb-1'>
      <Link title={label} href={href} className='px-2 py-1 inline-block'>
        {label}
      </Link>
    </li>
  );
};

export default UserMenuItem;

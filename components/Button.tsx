// React imports
import { ReactNode } from 'react';
// Next imports
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
  const classes =
    'bg-primary hover:bg-[#f5951f] transition-colors font-bold uppercase sm:text-lg lg:text-xl px-10 pt-4 pb-3 text-center text-white rounded-lg';

  if (!href) {
    return <button className={classes}>{children}</button>;
  } else {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
};

export default Button;

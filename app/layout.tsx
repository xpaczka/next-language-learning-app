// Next imports
import { Josefin_Sans } from 'next/font/google';
// Components imports
import Header from '@/components/Header';
// Styles imports
import './globals.css';

const josefin = Josefin_Sans({ subsets: ['latin-ext'] });

export const metadata = {
  title: 'fluentify - Master languages like a hero',
  description:
    'Learn languages with ease and become fluent effortlessly using Fluentify, the ultimate language learning app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={josefin.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

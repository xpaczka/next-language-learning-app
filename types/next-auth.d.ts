import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface UserParams {
  _id: string;
  email: string;
  name: string;
  username: string;
  image: string;
}

declare module 'next-auth' {
  interface Session {
    user: UserParams;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: UserParams;
    accessToken: string;
  }
}

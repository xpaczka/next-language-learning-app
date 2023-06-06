// Next imports
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
// Third-party imports
import { compare } from 'bcryptjs';
// Models imports
import User from '@/models/userModel';

export const authOptions: AuthOptions = {
  pages: { signIn: '/auth', error: '/auth', },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await User.findOne({email: credentials?.email});
        if (!user) return null;

        const validPassword = await compare(credentials!.password, user.password);
        if (!validPassword) return null;

        return user;
      }
    }),
    // TODO: facebook provider - add login funcionality
    FacebookProvider({
      id: 'facebook',
      clientId: process.env.FACEBOOK_CLIENT!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    // TODO: google provider - add login funcionality
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // TODO: discord provider - add login funcionality
    DiscordProvider({
      id: 'discord',
      clientId: process.env.DISCORD_CLIENT!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};

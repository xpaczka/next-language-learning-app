// Next imports
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
// Utils imports
import { jwtCallback, sessionCallback, signInCallback } from '@/utils/auth/callbacks';
import {
  DiscordProviderOptions,
  FacebookProviderOptions,
  GoogleProviderOptions,
  CredentialsProviderOptions,
} from '@/utils/auth/providers';

export const authOptions: AuthOptions = {
  pages: { signIn: '/auth', error: '/auth' },
  providers: [
    // TODO: credentials provider - test for invalid inputs on register
    CredentialsProvider(CredentialsProviderOptions),
    FacebookProvider(FacebookProviderOptions),
    GoogleProvider(GoogleProviderOptions),
    DiscordProvider(DiscordProviderOptions),
  ],
  callbacks: {
    signIn: async ({ user }) => await signInCallback(user),
    redirect: async () => '/dashboard',
    session: async ({ session, token }) => await sessionCallback(session, token),
    jwt: async ({ token, account, user }) => await jwtCallback(token, account, user),
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};

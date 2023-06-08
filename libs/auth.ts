// Next imports
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
// Utils imports
import { signInCallback } from '@/utils/auth/callbacks';
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
    async redirect() {
      return '/dashboard';
    },
    async signIn({ user }) {
      return await signInCallback(user);
    },
    // TODO: session callback
    // TODO: jwt callback
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};

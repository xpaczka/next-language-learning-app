import type { AuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  pages: { signIn: '/auth' },
  providers: [
    FacebookProvider({
      id: 'facebook',
      clientId: process.env.FACEBOOK_CLIENT!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    DiscordProvider({
      id: 'discord',
      clientId: process.env.DISCORD_CLIENT!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
  ],
};

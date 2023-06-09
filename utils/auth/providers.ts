// Next imports
import { CredentialsConfig, OAuthUserConfig } from 'next-auth/providers';
import { FacebookProfile } from 'next-auth/providers/facebook';
import { GoogleProfile } from 'next-auth/providers/google';
import { DiscordProfile } from 'next-auth/providers/discord';
// Third-party imports
import { compare } from 'bcryptjs';
// Models imports
import User from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '../database';

export const CredentialsProviderOptions: CredentialsConfig = {
  id: 'credentials',
  type: 'credentials',
  name: 'credentials',
  credentials: {
    email: { label: 'email', type: 'email' },
    username: { label: 'username', type: 'text' },
    name: { label: 'name', type: 'text' },
    password: { label: 'password', type: 'password' },
    newUser: { label: 'new-user' },
  },
  async authorize(credentials) {
    try {
      await connectToDatabase();

      if (credentials?.newUser) {
        return await User.findOne({ email: credentials.email, username: credentials.username });
      }

      const user = await User.findOne({ email: credentials?.email });
      if (!user) return null;

      const validPassword = await compare(credentials!.password, user.password);
      if (!validPassword) return null;

      return user;
    } catch (err: any) {
      console.error(err.message || 'Something went wrong');
    }
  },
};

export const FacebookProviderOptions: OAuthUserConfig<FacebookProfile> = {
  id: 'facebook',
  clientId: process.env.FACEBOOK_CLIENT!,
  clientSecret: process.env.FACEBOOK_SECRET!,
};

export const GoogleProviderOptions: OAuthUserConfig<GoogleProfile> = {
  id: 'google',
  clientId: process.env.GOOGLE_CLIENT!,
  clientSecret: process.env.GOOGLE_SECRET!,
};

export const DiscordProviderOptions: OAuthUserConfig<DiscordProfile> = {
  id: 'discord',
  clientId: process.env.DISCORD_CLIENT!,
  clientSecret: process.env.DISCORD_SECRET!,
};

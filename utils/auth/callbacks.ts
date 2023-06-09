// Next imports
import { Account, DefaultUser, User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';
// Models imports
import UserModel from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '../database';
import { generateAccessToken } from './token';

const createUsername = (name: DefaultUser['name'], id: string): string => {
  if (!name) return `user#${id}`;

  const initials = name
    .split(' ')
    .map(el => el.slice(0, 1).toLowerCase())
    .join('');

  return `${initials}#${id}`;
};

// TODO: deal with sign in using different providers, but the same email
export const signInCallback = async (user: User | AdapterUser): Promise<boolean> => {
  try {
    await connectToDatabase();
    const exisitingUser = await UserModel.findOne({ email: user.email });

    if (!exisitingUser) {
      const newUserData = {
        email: user.email,
        username: createUsername(user.name, user.id),
        name: user.name,
        image: user.image,
      };

      await UserModel.create(newUserData);
    }

    return true;
  } catch (err: any) {
    console.error(err.message);
    return false;
  }
};

export const sessionCallback = async (session: Session, token: JWT): Promise<Session> => {
  try {
    if (token.accessToken) session.accessToken = token.accessToken;
    if (session.user) session.user.id = token.id;
  
    return session;
  } catch (err: any) {
    console.error(err.message);
    return session;
  }
}

export const jwtCallback = async (token: JWT, account: Account | null, user: User | AdapterUser): Promise<JWT> => {
  try {
    if (account) {
      await connectToDatabase();
      const userInDatabase = await UserModel.findOne({ email: user.email });
  
      token.accessToken = account.access_token || generateAccessToken(userInDatabase._id);
      token.id = userInDatabase._id;
    }
  
    return token;
  } catch (err: any) {
    console.error(err.message);
    return token;
  }
}

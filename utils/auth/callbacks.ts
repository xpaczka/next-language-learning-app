// Next imports
import { DefaultUser, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
// Models imports
import UserModel from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '../database';

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

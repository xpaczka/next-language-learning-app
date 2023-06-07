// Next imports
import { Account, Profile, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
// Models imports
import UserModel from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '../database';

// TODO: deal with sign in using different providers, but the same email
export const signInCallback = async (user: User | AdapterUser): Promise<boolean> => {
  try {
    await connectToDatabase();

    const exisitingUser = await UserModel.findOne({ email: user.email });

    if (!exisitingUser) {
      // TODO: develop better username creation
      const username = `${user.name?.toLowerCase().replaceAll(' ', '.')}#${user.id}`;

      const newUserData = {
        email: user.email,
        username,
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

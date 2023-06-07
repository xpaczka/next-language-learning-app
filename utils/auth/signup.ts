// Third-party imports
import { hash } from 'bcryptjs';
import isEmail from 'validator/lib/isEmail';
// Models imports
import User from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '../database';

export const signupWithCredentials = async (email: string, username: string, name: string, password: string) => {
  if (!isEmail(email)) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid email' }), { status: 400 });
  }

  if (!username.trim() || username.trim().length < 5) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid username' }), { status: 400 });
  }

  if (!name.trim()) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid username' }), { status: 400 });
  }

  if (password.trim().length < 8) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid password' }), { status: 400 });
  }

  await connectToDatabase();

  const hashedPassword = await hash(password, 10);
  const user = await User.create({ email, username, name, password: hashedPassword });

  return user;
};

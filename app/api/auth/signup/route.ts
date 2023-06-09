// Third-party imports
import { hash } from 'bcryptjs';
import isEmail from 'validator/lib/isEmail';
// Models imports
import User from '@/models/userModel';
// Utils imports
import { connectToDatabase } from '@/utils/database';

const handler = async (req: Request) => {
  const { email, username, name, password } = await req.json();

  await connectToDatabase();
  const duplicateMail = await User.findOne({ email });

  if (duplicateMail) {
    return new Response(JSON.stringify({ status: 'failed', error: 'User with that email address already exists.' }), {
      status: 400,
    });
  }

  if (!isEmail(email)) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Invalid email.' }), { status: 400 });
  }

  const duplicateUsername = await User.findOne({ username });

  if (duplicateUsername) {
    return new Response(
      JSON.stringify({ status: 'failed', error: 'User with that username address already exists.' }),
      {
        status: 400,
      }
    );
  }

  if (!username.trim()) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Invalid username.' }), { status: 400 });
  }

  if (username.trim().length < 5) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Username must be at least 5 characters long.' }), {
      status: 400,
    });
  }

  if (!name.trim()) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Invalid username.' }), { status: 400 });
  }

  if (!password.trim()) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Invalid password.' }), { status: 400 });
  }

  if (password.trim().length < 8) {
    return new Response(JSON.stringify({ status: 'failed', error: 'Password must be at least 8 characters long.' }), {
      status: 400,
    });
  }

  const hashedPassword = await hash(password, 10);
  const user = await User.create({ email, username, name, password: hashedPassword });

  return new Response(JSON.stringify({ status: 'success', data: { user } }), { status: 201 });
};

export { handler as POST };

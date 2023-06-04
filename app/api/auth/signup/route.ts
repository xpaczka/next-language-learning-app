// Next imports
import { NextRequest } from 'next/server';
// Utils imports
import catchAsync from '@/utils/catchAsync';
import { connectToDatabase } from '@/utils/database';
// Third-party imports
import isEmail from 'validator/lib/isEmail';
// Models imports
import User from '@/models/userModel';

const handler = catchAsync(async (req: NextRequest) => {
  const { email, username, password } = await req.json();

  if (!isEmail(email)) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid email' }), { status: 400 });
  }

  if (!username.trim() || username.trim().length < 5) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid username' }), { status: 400 });
  }

  if (password.trim().length < 8) {
    return new Response(JSON.stringify({ status: 'failed', message: 'Invalid password' }), { status: 400 });
  }

  await connectToDatabase();
  const user = await User.create({ email, username, password });

  return new Response(JSON.stringify({ status: 'success', data: user }), { status: 201 });
});

export { handler as POST };

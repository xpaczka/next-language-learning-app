// Next imports
import { NextRequest } from 'next/server';
// Models imports
import User from '@/models/userModel';
// Utils imports
import catchAsync from '@/utils/catchAsync';
import { connectToDatabase } from '@/utils/database';

interface ApiRouteOptions {
  params: { userId: string };
}

const handler = catchAsync(async (req: NextRequest, { params }: ApiRouteOptions) => {
  const { userId } = params;

  await connectToDatabase();
  const user = await User.findById(userId);

  return new Response(JSON.stringify({ status: 'success', data: { user } }), { status: 200 });
});

export { handler as GET };

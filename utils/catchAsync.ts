// Next imports
import type { NextRequest, NextResponse } from 'next/server';

export default (fn: Function) => {
  return (req: NextRequest, res: NextResponse) =>
    fn(req, res).catch(
      (err: any) =>
        new Response(JSON.stringify({ status: 'failed', message: err.message || 'Something went wrong' }), {
          status: 500,
        })
    );
};

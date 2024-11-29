import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  // Protect all routes starting with /wallet/
  if (req.nextUrl.pathname.startsWith('/wallet') && !token) {
    const signInUrl = new URL('/api/auth/signin', req.url);
    signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname); // Retain the page the user was trying to access
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Configure the middleware to match all /wallet/* routes
export const config = {
  matcher: ['/wallet/:path*'],
};

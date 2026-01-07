import { NextRequest, NextResponse } from 'next/server';

// This function checks if the user is authenticated
// In a real application, you would verify the JWT token here
function isAuthenticated(request: NextRequest): boolean {
  // Check for the presence of a JWT token in cookies or headers
  const token = request.cookies.get('jwt_token') || request.headers.get('Authorization');

  if (!token) {
    return false;
  }

  // In a real implementation, you would validate the JWT token here
  // For now, we'll just check if it exists
  return true;
}

// Define which paths require authentication
const protectedPaths = [
  '/dashboard',
  '/tasks',
  '/profile',
  // Add other protected routes as needed
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some(path =>
    pathname.startsWith(path)
  );

  if (isProtectedPath && !isAuthenticated(request)) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Continue to the requested page if authenticated or if it's not a protected path
  return NextResponse.next();
}

// Specify which paths the middleware should run for
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
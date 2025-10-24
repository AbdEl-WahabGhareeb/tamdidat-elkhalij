import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { applySecurity } from './lib/security/index';

export function middleware(request: NextRequest) {
    // Apply security headers and checks first
    const securityResponse = applySecurity(request);
    if (securityResponse.status === 403) {
        return securityResponse;
    }

    const { pathname } = request.nextUrl;

    // Handle case-sensitive redirects
    if (pathname === '/About') {
        return NextResponse.redirect(new URL('/about', request.url));
    }
    if (pathname === '/Services') {
        return NextResponse.redirect(new URL('/services', request.url));
    }
    if (pathname === '/Projects') {
        return NextResponse.redirect(new URL('/projects', request.url));
    }

    return securityResponse;
}

// Update matcher to include all routes that need security headers
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/About',
        '/Services',
        '/Projects'
    ]
};
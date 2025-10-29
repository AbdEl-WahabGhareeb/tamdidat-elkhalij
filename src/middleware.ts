import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { applySecurity } from './lib/security/index';
import { getRedirectPath, getRedirectStatus } from './lib/redirects';

export function middleware(request: NextRequest) {
    // Apply security headers and checks first
    const securityResponse = applySecurity(request);
    if (securityResponse.status === 403) {
        return securityResponse;
    }

    const url = request.nextUrl;
    const { pathname } = url;

    // Handle lowercase conversion for case-sensitive paths
    if (pathname !== pathname.toLowerCase()) {
        return NextResponse.redirect(
            new URL(pathname.toLowerCase(), request.url),
            { status: 301 }
        );
    }

    // Check for configured redirects
    const redirectPath = getRedirectPath(pathname);
    if (redirectPath) {
        const status = getRedirectStatus(pathname);
        return NextResponse.redirect(
            new URL(redirectPath, request.url),
            { status }
        );
    }

    // Remove trailing slashes except for root path
    if (pathname !== '/' && pathname.endsWith('/')) {
        return NextResponse.redirect(
            new URL(pathname.slice(0, -1), request.url),
            { status: 301 }
        );
    }

    return securityResponse;
}

// Update matcher to include all routes that need checking
export const config = {
    matcher: [
        // Match all paths except Next.js specific files and API routes
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'
    ]
};
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
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

    return NextResponse.next();
}

export const config = {
    matcher: ['/About', '/Services', '/Projects']
};
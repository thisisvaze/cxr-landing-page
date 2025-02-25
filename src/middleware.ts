import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Redirect /pitch-deck to Figma prototype
    if (request.nextUrl.pathname === '/pitchdeck') {
        return NextResponse.redirect('https://www.figma.com/proto/1WfGljydFSLWndKz1UgS8m/CXR-LIVE!!!?page-id=0%3A1&node-id=0-11&p=f&viewport=556%2C25%2C0.06&t=uVu14rIvkPUDeEkO-1&scaling=contain&content-scaling=fixed');
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
        '/pitchdeck',
    ],
};
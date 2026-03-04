import { type NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
    'https://tamdidat-elkhalij.com',
    'https://www.tamdidat-elkhalij.com',
    ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000', 'http://localhost'] : [])
];

export function applySecurity(request: NextRequest): NextResponse {
    const origin = request.headers.get('origin');
    
    // If no origin header is present, allow the request (could be a direct access)
    if (!origin) {
        return NextResponse.next();
    }

    // Check if the origin is allowed
    if (!allowedOrigins.includes(origin)) {
        return new NextResponse('Invalid Origin', { status: 403 });
    }

    return NextResponse.next();
}

// Input sanitization function
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/on\w+=/gi, '') // Remove inline event handlers
    .trim()
}

// Function to validate file uploads
export function validateFileUpload(file: { type: string, size: number }): boolean {
  // List of allowed MIME types
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'text/plain'
  ];

  // Maximum file size (5MB)
  const maxSize = 5 * 1024 * 1024;

  // Check file type and size
  return allowedTypes.includes(file.type) && file.size <= maxSize;
}

// Rate limiting implementation with automatic cleanup
const rateLimit = new Map<string, { count: number; timestamp: number }>()

// Cleanup old entries every 5 minutes
if (typeof global !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [ip, record] of rateLimit.entries()) {
      if (now - record.timestamp > 5 * 60 * 1000) {
        rateLimit.delete(ip)
      }
    }
  }, 5 * 60 * 1000)
}

export function checkRateLimit(ip: string, limit = 100, window = 60000): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (now - record.timestamp > window) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

// CSRF Token generation and validation
export function generateCSRFToken(): string {
  return crypto.randomUUID()
}

export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken
}
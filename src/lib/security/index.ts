import { type NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Security Headers Configuration
export const securityHeaders = {
  // Prevent clickjacking
  'X-Frame-Options': 'SAMEORIGIN',
  // Enable browser's XSS filtering
  'X-XSS-Protection': '1; mode=block',
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  // Strict Content Security Policy
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self'; " +
    "connect-src 'self' *.google-analytics.com *.googleapis.com; " +
    "frame-src 'self';",
  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // Permissions Policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
}

// Security middleware function
export function applySecurity(request: NextRequest) {
  const response = NextResponse.next()
  
  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Check for suspicious query parameters
  const url = new URL(request.url)
  const suspiciousParams = ['eval', 'script', '<script', 'javascript:', 'data:']
  const hasMailiciousParams = suspiciousParams.some(param => 
    url.search.toLowerCase().includes(param.toLowerCase())
  )

  if (hasMailiciousParams) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Validate Origin header for CORS
  const origin = request.headers.get('origin')
  if (origin) {
    const allowedOrigins = ['https://your-domain.com'] // Add your domains
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse('Invalid Origin', { status: 403 })
    }
  }

  return response
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
export function validateFileUpload(file: File): boolean {
  // List of allowed MIME types
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'text/plain'
  ]

  // Maximum file size (5MB)
  const maxSize = 5 * 1024 * 1024

  return (
    allowedTypes.includes(file.type) &&
    file.size <= maxSize
  )
}

// Rate limiting implementation
const rateLimit = new Map<string, { count: number; timestamp: number }>()

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
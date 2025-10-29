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
  // HTTP Strict Transport Security
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  // Strict Content Security Policy
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com https://www.gstatic.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https: https://www.google-analytics.com https://www.google.com https://www.google.com.sa https://www.google.ae https://googleads.g.doubleclick.net; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://www.google-analytics.com https://*.googleapis.com https://*.google.com https://*.doubleclick.net; " +
    "frame-src 'self' https://www.google.com https://bid.g.doubleclick.net; " +
    "object-src 'none'; " +
    "base-uri 'self';",
  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // Permissions Policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  // Cross-Origin Resource Policy
  'Cross-Origin-Resource-Policy': 'same-site',
  // Cross-Origin Opener Policy
  'Cross-Origin-Opener-Policy': 'same-origin'
}

// Security middleware function
export function applySecurity(request: NextRequest) {
  const response = NextResponse.next()
  
  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Check for suspicious patterns
  const url = new URL(request.url)
  
  // Expanded list of suspicious patterns
  const suspiciousPatterns = [
    'eval', 'script', '<script', 'javascript:', 'data:',
    'vbscript:', 'onload=', 'onerror=', 'onclick=',
    'onmouseover=', 'alert(', 'prompt(', 'confirm(',
    '../', './/', '\\', '%00', '%0d', '%0a'
  ]

  // Check URL parts
  const urlToCheck = `${url.pathname}${url.search}${url.hash}`.toLowerCase()
  const hasMaliciousContent = suspiciousPatterns.some(pattern => 
    urlToCheck.includes(pattern.toLowerCase())
  )

  if (hasMaliciousContent) {
    return new NextResponse('Access Denied', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        ...securityHeaders
      }
    })
  }

  // Validate HTTP method
  const allowedMethods = ['GET', 'POST', 'HEAD']
  if (!allowedMethods.includes(request.method.toUpperCase())) {
    return new NextResponse('Method Not Allowed', { 
      status: 405,
      headers: {
        'Allow': allowedMethods.join(', '),
        ...securityHeaders
      }
    })
  }

  // Validate Origin header for CORS
  const origin = request.headers.get('origin')
  if (origin) {
    const allowedOrigins = [
      'https://taamco.com',
      'https://www.taamco.com',
      'https://www.google.com',
      'https://googleads.g.doubleclick.net'
    ]
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
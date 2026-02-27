import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const INGEST_URL = process.env.JA4DB_INGEST_URL || 'https://ja4-atlas.platphormnews.com'
const INGEST_TOKEN = process.env.ja4_ingest_token || process.env.JA4DB_INGEST_TOKEN
const SENSOR_NAME = process.env.JA4DB_SENSOR_NAME || 'starphone-web'
const SAMPLE_RATE = parseFloat(process.env.JA4DB_SAMPLE_RATE || '1.0')

// Supported locales
const locales = ['en']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  // Logic to determine locale, e.g., from headers or cookie
  // For now, always return default
  return defaultLocale
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // JA4 Analytics Logic (Preserved)
  if (Math.random() <= SAMPLE_RATE) {
    const ja4 = request.headers.get('x-vercel-ja4')
    const ja4h = request.headers.get('x-vercel-ja4h')
    const ja4s = request.headers.get('x-vercel-ja4s')
    const ja4x = request.headers.get('x-vercel-ja4x')
    const botidFingerprint = request.headers.get('x-botid-fingerprint')
    const botidScore = request.headers.get('x-botid-score')

    if (ja4 || ja4h || ja4s || ja4x) {
      const observation = {
        fingerprint: ja4 || ja4h || ja4s || ja4x,
        fingerprint_type: ja4 ? 'ja4' : ja4h ? 'ja4h' : ja4s ? 'ja4s' : 'ja4x',
        ja4: ja4 || null,
        ja4h: ja4h || null,
        ja4s: ja4s || null,
        ja4x: ja4x || null,
        source_ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip'),
        source_port: null,
        target_host: request.headers.get('host'),
        target_port: 443,
        sensor_name: SENSOR_NAME,
        user_agent: request.headers.get('user-agent'),
        referer: request.headers.get('referer'),
        request_path: request.nextUrl.pathname,
        request_method: request.method,
        geo: {
          country: request.headers.get('x-vercel-ip-country'),
          region: request.headers.get('x-vercel-ip-country-region'),
          city: request.headers.get('x-vercel-ip-city'),
        },
        botid: botidFingerprint ? {
          fingerprint: botidFingerprint,
          score: botidScore ? parseFloat(botidScore) : null,
        } : null,
        timestamp: new Date().toISOString(),
      }

      if (INGEST_TOKEN) {
        // Fire and forget
        fetch(`${INGEST_URL}/api/ingest/http`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${INGEST_TOKEN}`,
          },
          body: JSON.stringify(observation),
        }).catch((err) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('JA4 Atlas ingest error:', err)
          }
        })
      }
    }
  }

  // Locale Routing Logic

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static assets)
    '/((?!api|_next/static|_next/image|favicon.ico|icons|images|making-of-starphone|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)',
  ],
}

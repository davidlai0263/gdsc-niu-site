import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ipRateLimit } from './lib/ip-rate-limit'

export const config = {
  runtime: 'experimental-edge',
  matcher: ['/api/contact'],
}

async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/contact') {
    const res = await ipRateLimit(req)
    if (res.status === 200) {
      return NextResponse.next()
    } else {
      return new Response(JSON.stringify({ message: 'Too many requests.' }), { status: 429 })
    }
  }

  return NextResponse.next()
}

export default middleware

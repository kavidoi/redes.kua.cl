import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Instagram OAuth redirect handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect('/dashboard?error=instagram_auth_failed')
  }

  if (!code) {
    return NextResponse.redirect('/dashboard?error=missing_code')
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_CLIENT_ID!,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.NEXTAUTH_URL}/api/instagram/auth`,
        code,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (!tokenResponse.ok) {
      throw new Error(tokenData.error_description || 'Failed to get access token')
    }

    // Get user info
    const userResponse = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${tokenData.access_token}`)
    const userData = await userResponse.json()

    if (!userResponse.ok) {
      throw new Error('Failed to get user data')
    }

    // Store Instagram account in database
    await prisma.instagramAccount.upsert({
      where: { instagramId: userData.id },
      update: {
        username: userData.username,
        accessToken: tokenData.access_token,
        isActive: true,
      },
      create: {
        instagramId: userData.id,
        username: userData.username,
        accessToken: tokenData.access_token,
        workspaceId: 'default-workspace', // TODO: Get from user session
        isActive: true,
      },
    })

    return NextResponse.redirect('/dashboard?success=instagram_connected')
  } catch (error) {
    console.error('Instagram auth error:', error)
    return NextResponse.redirect('/dashboard?error=instagram_auth_failed')
  }
}

// Start Instagram OAuth flow
export async function POST(request: NextRequest) {
  const { workspaceId } = await request.json()

  const authUrl = new URL('https://api.instagram.com/oauth/authorize')
  authUrl.searchParams.set('client_id', process.env.INSTAGRAM_CLIENT_ID!)
  authUrl.searchParams.set('redirect_uri', `${process.env.NEXTAUTH_URL}/api/instagram/auth`)
  authUrl.searchParams.set('scope', 'user_profile,user_media')
  authUrl.searchParams.set('response_type', 'code')
  authUrl.searchParams.set('state', workspaceId)

  return NextResponse.json({ authUrl: authUrl.toString() })
}

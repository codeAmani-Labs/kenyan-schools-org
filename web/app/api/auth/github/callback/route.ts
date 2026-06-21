import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/lib/env';

const GITHUB_CLIENT_ID = env.GITHUB_CLIENT_ID || 'YOUR_GITHUB_CLIENT_ID';
const GITHUB_CLIENT_SECRET = env.GITHUB_CLIENT_SECRET || 'YOUR_GITHUB_CLIENT_SECRET';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/apply?error=no_code');
  }

  // Exchange code for access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return NextResponse.redirect('/apply?error=auth_failed');
  }

  // Get user info
  const userResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  const user = await userResponse.json();

  // Get email if not public
  let email = user.email;
  if (!email) {
    const emailRes = await fetch('https://api.github.com/user/emails', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const emails = await emailRes.json();
    email = emails.find((e: any) => e.primary)?.email || emails[0]?.email;
  }

  // Redirect back to apply with prefilled params
  const params = new URLSearchParams({
    github: user.login,
    name: user.name || user.login,
    email: email || '',
  });

  return NextResponse.redirect(`/apply?${params.toString()}`);
}

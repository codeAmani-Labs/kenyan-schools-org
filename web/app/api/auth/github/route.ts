import { NextRequest, NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || 'YOUR_GITHUB_CLIENT_ID';

export async function GET(req: NextRequest) {
  // For demo, redirect to GitHub OAuth
  // In production, set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in env
  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/auth/github/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`;

  return NextResponse.redirect(githubAuthUrl);
}

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'dev-secret';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const applications = await prisma.contributorApplication.findMany({
    where: { status: 'pending' },
    orderBy: { submittedAt: 'desc' },
  });

  return NextResponse.json({ applications });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { secret, id, status } = body;

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const application = await prisma.contributorApplication.findUnique({ where: { id } });
  if (!application) {
    return NextResponse.json({ error: 'Application not found' }, { status: 404 });
  }

  await prisma.contributorApplication.update({
    where: { id },
    data: {
      status,
      reviewedAt: new Date(),
    },
  });

  // Send welcome email if approved
  if (status === 'approved' && RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'CodeAmani Labs <contributors@codeamanilabs.org>', // Primary repo: codeAmani-Labs org
          to: [application.email],
          subject: `Welcome to the Kenyan Schools Directory Contributors!`,
          html: `
            <h1>Welcome, ${application.fullName}!</h1>
            <p>Thank you for applying to contribute to the Kenyan Schools Directory.</p>
            <p>Your application has been <strong>approved</strong>.</p>
            <p>We value contributors who help maintain accurate, transparent public data for all Kenyan schools.</p>
            ${application.githubUsername ? `<p>You can collaborate on GitHub: <a href="https://github.com/codeAmani-Labs/kenyan-schools-org">https://github.com/codeAmani-Labs/kenyan-schools-org</a> (primary in org; copy at codeAmani-Solutions)</p>` : ''}
            <p>If you opted in, you will appear on the public <a href="https://kenyanschool.org/contributors">Approved Contributors</a> page.</p>
            <p>Start contributing by visiting <a href="https://kenyanschool.org/apply">the apply page</a> or opening issues/PRs.</p>
            <p>— CodeAmani Labs team (Founder: codeAmani-Solutions (Barnabas Waweru))</p>
            <p>Primary repo: https://github.com/codeAmani-Labs/kenyan-schools-org (copy in https://github.com/codeAmani-Solutions)</p>
          `,
        }),
      });
    } catch (emailErr) {
      console.error('Welcome email failed:', emailErr);
    }
  } else if (status === 'approved') {
    console.log(`[DEV] Would send welcome email to ${application.email}`);
  }

  return NextResponse.json({ 
    message: `Application ${status}.` 
  });
}

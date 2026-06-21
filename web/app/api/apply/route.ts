import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { env } from '@/lib/env';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, githubUsername, email, motivation, areasOfInterest, experience, publicListing } = body;

    if (!fullName || !email || !motivation || !areasOfInterest?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save to database
    const application = await prisma.contributorApplication.create({
      data: {
        fullName,
        githubUsername: githubUsername || null,
        email,
        motivation,
        areasOfInterest,
        experience: experience || null,
        publicListing: publicListing !== false, // default true
        status: 'pending',
      },
    });

    // Send email notification to contributors@codeamanilabs.org (repo primary at codeAmani-Labs org)
    if (env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Kenyan Schools <noreply@codeamanilabs.org>', // Update to your verified domain
            to: ['contributors@codeamanilabs.org'],
            subject: `New Contributor Application: ${fullName}`,
            html: `
              <h2>New Contributor Application</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>GitHub:</strong> ${githubUsername ? `<a href="https://github.com/${githubUsername}">${githubUsername}</a>` : 'Not provided'}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Areas of Interest:</strong> ${areasOfInterest.join(', ')}</p>
              <p><strong>Motivation:</strong></p>
              <blockquote>${motivation}</blockquote>
              ${experience ? `<p><strong>Experience:</strong></p><blockquote>${experience}</blockquote>` : ''}
              <p><strong>Application ID:</strong> ${application.id}</p>
              <p>Review applications at: <a href="https://kenyanschools.org/admin/applications">/admin/applications</a></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Email send failed (but application saved):', emailErr);
      }
    } else {
      // Fallback: log for development
      console.log('=== NEW CONTRIBUTOR APPLICATION ===');
      console.log('Name:', fullName);
      console.log('GitHub:', githubUsername);
      console.log('Email:', email);
      console.log('Areas:', areasOfInterest);
      console.log('Motivation:', motivation);
      console.log('Experience:', experience);
      console.log('ID:', application.id);
      console.log('===================================');
    }

    return NextResponse.json({ success: true, id: application.id });
  } catch (error: any) {
    console.error('Application error:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}

import Link from 'next/link';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Approved Contributors | CodeAmani Labs',
  description: 'People who help maintain the Kenyan Schools Directory. Transparent public data built by the community.',
};

export default async function ContributorsPage() {
  const contributors = await prisma.contributorApplication.findMany({
    where: {
      status: 'approved',
      publicListing: true,
    },
    orderBy: {
      reviewedAt: 'desc',
    },
    select: {
      fullName: true,
      githubUsername: true,
      submittedAt: true,
    },
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center justify-between text-sm">
          <Link href="/" className="font-semibold flex items-center gap-2">
            Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/schools" className="hover:text-[#c5a46e]">Index</Link>
            <Link href="/contributors" className="hover:text-[#c5a46e]">Contributors</Link>
            <Link href="/directory" className="hover:text-[#c5a46e]">Directory</Link>
            <Link href="/apply" className="hover:text-[#c5a46e]">Apply</Link>
            <Link href="/about" className="hover:text-[#c5a46e]">About</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 pt-12 pb-20">
        <div className="mb-10 text-center">
          <div className="uppercase text-xs tracking-[3px] text-[#c5a46e] mb-1">COMMUNITY</div>
          <h1 className="text-5xl font-semibold tracking-[-1.5px]">Approved Contributors</h1>
          <p className="mt-3 text-lg text-[#a3a3a3] max-w-xl mx-auto">
            These individuals have been approved to help maintain the Kenyan Schools Directory. 
            Thank you for your commitment to transparency and accurate public data.
          </p>
        </div>

        {contributors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#666]">No approved contributors listed yet. Check back soon!</p>
            <Link href="/apply" className="mt-4 inline-block text-[#c5a46e] underline">Apply to become one →</Link>
          </div>
        ) : (
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
            <div className="divide-y divide-white/10">
              {contributors.map((c, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-6 py-5">
                  <div>
                    <div className="font-medium text-lg">{c.fullName}</div>
                    {c.githubUsername && (
                      <a 
                        href={`https://github.com/${c.githubUsername}`} 
                        target="_blank" 
                        className="text-sm text-[#c5a46e] hover:underline"
                      >
                        @{c.githubUsername}
                      </a>
                    )}
                  </div>
                  <div className="text-xs text-[#666]">
                    Approved contributor since {new Date(c.submittedAt).getFullYear()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-sm text-[#666]">
            Want to join? <Link href="/apply" className="text-[#c5a46e] underline">Apply to become a contributor</Link>. 
            Opt-in during the application to appear here.
          </p>
          <p className="text-xs text-[#666] mt-2">
            Built and maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru)
          </p>
        </div>
      </div>
    </div>
  );
}

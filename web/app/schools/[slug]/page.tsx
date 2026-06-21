import Link from 'next/link';
import { notFound } from 'next/navigation';
import { School } from '@/lib/types';
import schoolsData from '@/data/schools.json';
import SuggestEditButton from './SuggestEditButton';
import { getTierClass, getGenderClass, formatTier } from '@/lib/utils';

const schools = schoolsData as School[];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const school = schools.find((s) => s.slug === slug);
  if (!school) return { title: 'School not found' };

  const county = school.county;
  const tierDesc = school.tier === 'National' ? 'National School' : `${school.tier} School`;
  const short = school.shortName ? ` (${school.shortName})` : '';

  // Optimized for partial name searches + "schools in Kenya"
  const title = `${school.name}${short} | ${county} County, Kenya Schools`;
  const description = `${school.name}${short} is a ${tierDesc} in ${county} County, Kenya. View verified details, sources, location, and community updates. Part of the CodeAmani Labs public schools directory.`;

  return {
    title,
    description,
    keywords: [
      school.name, school.shortName || '', 
      `${county} schools`, `${county} County Kenya schools`,
      "Kenya secondary schools", "Kenyan high schools", school.tier,
      "KSSSA", "schools in Kenya", "Kenyan schools directory"
    ].filter(Boolean),
    openGraph: {
      title: `${school.name} - ${county}, Kenya`,
      description: `${school.name} in ${county} County. ${tierDesc}. Reliable public data from CodeAmani Labs.`,
      images: [{ url: "/og.png" }],
    },
    alternates: {
      canonical: `https://kenyanschool.org/schools/${slug}`,
    },
  };
}

export default async function SchoolPage({ params }: PageProps) {
  const { slug } = await params;
  const school = schools.find((s) => s.slug === slug);

  if (!school) notFound();

  const tierBadge = getTierClass(school.tier);
  const genderBadge = getGenderClass(school.gender);

  const citations = (school.sources && Array.isArray(school.sources) && school.sources.length > 0)
    ? school.sources
    : [{ label: "Ministry of Education • KSSSA • Community Sources", url: "" }];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-medium tracking-tight flex items-center gap-2">Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span></Link>
            <Link href="/directory" className="text-[#c5b9a3] hover:text-white">Directory</Link>
            <Link href="/contributors" className="text-[#c5b9a3] hover:text-white">Contributors</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="#suggest" className="text-[#c5a46e] hover:text-white text-sm">Suggest edit</a>
            <Link href="/apply" className="glass rounded-full px-4 py-1 text-xs border border-white/10">Apply</Link>
            <Link href="/contribute" className="glass rounded-full px-4 py-1 text-xs border border-white/10">Contribute</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pt-12 pb-24">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5b9a3] mb-3">
            <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-[#c5a46e]">{school.indexNo}</span>
            <span>{school.county.toUpperCase()} COUNTY</span> 
            {school.rank && <span>— RANK #{school.rank}</span>}
          </div>
          
          <h1 className="school-name text-6xl sm:text-[68px] font-semibold tracking-[-3.6px] leading-none mb-2">{school.name}</h1>
          
          <div className="flex gap-2 mt-5">
            <span className={`badge text-sm py-1 px-4 ${tierBadge}`}>{formatTier(school.tier)}</span>
            {school.gender && <span className={`badge text-sm py-1 px-4 ${genderBadge}`}>{school.gender}</span>}
            {school.cluster && <span className="badge text-sm py-1 px-4 border-white/10 text-[#c5b9a3]">{school.cluster}</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 mt-14">
          {/* Main Content */}
          <div className="md:col-span-7 space-y-12">
            {/* Core */}
            <section>
              <div className="section-header section-label uppercase text-xs tracking-[2px] text-[#c5a46e] mb-1">CORE INFORMATION</div>
              <div className="glass-card rounded-3xl divide-y divide-white/10 border border-white/10 mt-3">
                {[
                  ["County", school.county],
                  ["Tier", `${formatTier(school.tier)}${school.cluster ? ` (${school.cluster})` : ''}`],
                  ["Gender", school.gender || "—"],
                  ["Rank", school.rank ? `#${school.rank}` : "—"],
                  ["Location", school.address || "— (contribute precise address)"],
                ].map(([label, value]) => (
                  <div key={label} className="detail-row px-7 py-4">
                    <div className="detail-label">{label}</div>
                    <div className="detail-value">{value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="section-header section-label uppercase text-xs tracking-[2px] text-[#c5a46e] mb-1">CONTACT &amp; DIGITAL</div>
              <div className="glass-card rounded-3xl p-7 space-y-3 text-sm">
                {school.website && <div>Website: <a href={`https://${school.website}`} target="_blank" className="text-[#c5a46e] hover:underline">{school.website}</a></div>}
                {school.phone && <div>Phone: {school.phone}</div>}
                {school.email && <div>Email: {school.email}</div>}
                {(!school.website && !school.phone && !school.email) && <div className="text-[#c5b9a3]">No contact information yet. Help us add it.</div>}
              </div>
            </section>

            {/* Notes */}
            <section>
              <div className="section-header section-label uppercase text-xs tracking-[2px] text-[#c5a46e] mb-1">IDENTITY &amp; NOTES</div>
              <div className="glass-card rounded-3xl p-7">
                <div className="mb-5">
                  <span className="uppercase text-xs tracking-widest text-[#666]">Sports Nicknames</span>
                  <div className="font-semibold text-xl mt-1">{school.sportsNicknames || "—"}</div>
                </div>
                <p className="text-[#ccc] leading-relaxed">
                  {school.notes || "Verified entry. Contribute history, KCSE performance, notable alumni, or KSSSA achievements."}
                </p>
              </div>
            </section>

            {/* Citations */}
            <section id="citations">
              <div className="uppercase text-xs tracking-[2px] text-[#c5a46e] mb-4">SOURCES &amp; CITATIONS</div>
              <div className="glass-card rounded-3xl p-7 text-sm space-y-3">
                {citations.map((c, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="font-mono text-xs text-[#c5a46e] mt-0.5">S{idx+1}</span>
                    {c.url ? <a href={c.url} target="_blank" className="hover:underline">{c.label}</a> : <span>{c.label}</span>}
                  </div>
                ))}
                <div className="text-[#666] text-xs pt-2 border-t border-white/10">All contributions must include verifiable sources.</div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-5">
            <div className="info-card">
              <div className="uppercase tracking-[1.5px] text-xs text-[#c5a46e]">CODEAMANI LABS INDEX</div>
              <div className="font-mono text-2xl mt-1 text-[#c5a46e]">{school.indexNo}</div>
              <div className="text-[10px] text-[#a99c7f] mt-0.5">Unique internal identifier (distinguishes duplicate names)</div>
              <div className="uppercase tracking-[1.5px] text-xs text-[#c5a46e] mt-4">LOCATION</div>
              {school.lat && school.lng ? (
                <>
                  <div className="font-mono mt-2">{school.lat}, {school.lng}</div>
                  <a href={`https://maps.google.com/?q=${school.lat},${school.lng}`} target="_blank" className="text-[#c5a46e] text-xs inline-block mt-1">Open in Maps →</a>
                </>
              ) : (
                <div className="text-sm text-[#c5b9a3] mt-2">No GPS recorded yet. Contribute accurate coordinates.</div>
              )}
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="uppercase tracking-widest text-xs text-[#666]">LAST VERIFIED</div>
              <div className="mt-1 text-sm">{school.lastUpdated}</div>
              <div className="mt-6">
                <SuggestEditButton school={school} />
              </div>
            </div>

            <div className="text-xs text-[#666] px-1">
              This is a living public resource. All changes require sources.
            </div>
          </div>
        </div>

        {/* Dynamic SEO Structured Data - Optimized for school name + Kenya searches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": school.name,
              "alternateName": school.shortName || undefined,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": school.county,
                "addressRegion": school.county,
                "addressCountry": "KE",
                ...(school.address && { "streetAddress": school.address }),
              },
              ...(school.lat && school.lng && {
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": school.lat,
                  "longitude": school.lng,
                },
              }),
              "url": `https://kenyanschool.org/schools/${slug}`,
              "description": `${school.name} is a ${school.tier} secondary school located in ${school.county} County, Kenya. Part of the official public directory by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)).`,
              "educationalLevel": "Secondary",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya",
              },
              "knowsAbout": ["Kenyan secondary schools", "KSSSA", "KCSE", school.county + " schools"],
              ...(school.website && { "sameAs": [school.website] }),
              "publisher": {
                "@type": "Organization",
                "name": "CodeAmani Labs",
                "url": "https://codeamanilabs.org/",
                "description": "Founded by codeAmani-Solutions (Barnabas Waweru)",
                "sameAs": [
                  "https://github.com/codeAmani-Labs",
                  "https://github.com/codeAmani-Solutions"
                ]
              }
            }),
          }}
        />
      </div>
    </div>
  );
}

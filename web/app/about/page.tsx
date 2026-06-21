import Link from 'next/link';
import ThemeHint from '../components/ThemeHint';
import ThemeSwitcher from '../components/ThemeSwitcher';

export const metadata = {
  title: 'About | Kenyan Schools Directory - CodeAmani Labs',
  description: 'Built and maintained by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)). A transparent, accessible, and modern public data resource for all Kenyan schools across 47 counties. Reliable, citable, community-driven education data.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/" className="text-sm text-[#c5a46e]">← Home</Link>

        <h1 className="hero-title text-6xl font-semibold tracking-tighter mt-6">About the Kenyan Schools Directory</h1>
        <p className="text-sm text-[#c5a46e] mt-1">Founded by codeAmani-Solutions (Barnabas Waweru) • <a href="https://github.com/codeAmani-Solutions" target="_blank" className="underline">github.com/codeAmani-Solutions</a></p>

        <div className="prose prose-invert mt-8 max-w-none">
          <p className="text-2xl tracking-tight">The Kenyan Schools Directory is a living public resource documenting secondary schools across all 47 counties of Kenya. It is built and maintained by <a href="https://github.com/codeAmani-Labs" target="_blank" className="text-[#c5a46e] underline">CodeAmani Labs</a> (https://github.com/codeAmani-Labs, https://codeamanilabs.org/) — to advance <strong>transparency, access, and a modern way of tracking and establishing reliable public data resources</strong>.</p>

          <h2>Our Mission at CodeAmani Labs</h2>
          <p>CodeAmani Labs is dedicated to creating open, verifiable, and accessible digital public goods. For the Kenyan education sector, this means:</p>
          <ul>
            <li><strong>Transparency:</strong> Every school entry includes sources, citations, and community contributions. Data is traceable and auditable.</li>
            <li><strong>Access:</strong> Free, open data available via web, API, CLI, and MCP tools. No paywalls. Anyone can search, export, or build upon it.</li>
            <li><strong>Modern Tracking:</strong> Dynamic updates, versioned records, geographic context (counties, geolocations where available), and structured data for search engines and tools.</li>
            <li><strong>Reliable Public Data:</strong> Community-powered with strict sourcing requirements. GitHub serves as the canonical source of truth for edits and history.</li>
          </ul>

          <h2>How it works</h2>
          <ul>
            <li><strong>Anyone can propose changes</strong> using the forms on school profiles or the <Link href="/contribute">Contribute page</Link>.</li>
            <li><strong>Every fact should be sourced.</strong> We require a URL, news report, official document, or verifiable reference for additions and corrections.</li>
            <li><strong>Data is open.</strong> Export the full directory as JSON or CSV. Use it in research, apps, or analysis.</li>
            <li><strong>GitHub is the source of truth.</strong> Proposed edits are tracked publicly. Accepted changes update the live directory.</li>
          </ul>

          <h2>Why this matters</h2>
          <p>Parents, students, researchers, journalists, policymakers, and educators need reliable, up-to-date information about Kenyan schools. Scattered government lists, outdated spreadsheets, and incomplete records make this difficult. CodeAmani Labs is establishing one canonical, transparent, living reference for Kenya's education data.</p>

          <h2>Current coverage</h2>
          <p>1,127+ schools across all 47 counties (National, Extra-County, and County schools). Includes tier, gender, cluster, sports identities, notes, and citations. Profiles are enriched over time through community contributions.</p>

          <h2>Contribution guidelines</h2>
          <ol>
            <li>Prefer primary sources (Ministry of Education gazettes, official school websites, reputable Kenyan media, KNEC, KSSSA reports).</li>
            <li>Always include the source URL or full reference.</li>
            <li>Be precise and verifiable.</li>
            <li>Respect privacy — only publicly available information.</li>
          </ol>

          <p className="mt-8 text-sm">This project is maintained by <strong>CodeAmani Labs</strong> (<a href="https://github.com/codeAmani-Labs" target="_blank" className="text-[#c5a46e]">https://github.com/codeAmani-Labs</a> | <a href="https://codeamanilabs.org/" target="_blank" className="text-[#c5a46e]">codeamanilabs.org</a>). Founder: codeAmani-Solutions (Barnabas Waweru) — <a href="https://github.com/codeAmani-Solutions" target="_blank" className="text-[#c5a46e]">https://github.com/codeAmani-Solutions</a>. We believe in open data as a public good. Browse the <Link href="/schools">full schools index</Link>, <Link href="/contributors">approved contributors</Link>, or <Link href="/apply">apply to become a tracked contributor</Link>.</p>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/contribute" className="rounded-full bg-[#c5a46e] px-7 py-3 text-[#050505] font-medium">Start contributing</Link>
          <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="rounded-full border border-white/30 px-7 py-3 hover:bg-white/5">View source on GitHub</a>
        </div>

        <div className="mt-8 text-xs text-[#666]">
          Version 1.0.0 • Built by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)).
        </div>
      </div>

      <ThemeSwitcher floating />
      <div className="hidden lg:block fixed top-20 right-6 z-40">
        <ThemeHint suggestedTheme="amethyst" description="Elegant for reading" />
      </div>
    </div>
  );
}

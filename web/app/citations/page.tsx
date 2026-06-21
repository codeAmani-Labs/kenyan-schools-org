import Link from 'next/link';

export const metadata = {
  title: 'Citations & Sources | Kenyan Schools Directory',
  description: 'Transparent, verifiable sources for Kenya\'s complete secondary school directory. Every entry across all 47 counties is backed by citations.',
};

const baseCitations = [
  { id: 'S1', source: 'Education News Kenya — St Anthony\'s promotion to national status', url: 'https://educationnews.co.ke/kitales-st-anthony-boys-promoted-to-national-school-status/' },
  { id: 'S2', source: 'Standard Media — St Anthony\'s begin hunt for national title', url: 'https://www.standardmedia.co.ke/sports/counties/article/2001475766/st-anthonys-boys-kitale-begin-hunt-for-national-title' },
  { id: 'S3', source: 'Standard Media — Les Titans recapture hockey title', url: 'https://www.standardmedia.co.ke/sports/article/2001545152/hail-the-new-sheriffs-in-town-butere-and-mgk-retain-titles-as-new-champions-are-crowned' },
  { id: 'S4', source: 'TNX Africa — Yala Open 2025 preview', url: 'https://www.tnx.africa/football/article/2001510337/schools-black-saints-maseno-and-st-anthonys-kitale-to-renew-rivalry-at-yala-open' },
  { id: 'S5', source: 'Mukasa Football Diary — Green Commandos history (Kakamega High)', url: 'https://mukasah.wordpress.com/2020/07/10/kakamega-high-school-green-commandos-class-of-1986/' },
  { id: 'S6', source: 'Mukasa Football Diary — Green Commandos class of 1995', url: 'https://mukasah.wordpress.com/2020/05/09/the-giants-of-kakamega-high-school-class-of-1995/' },
  { id: 'S7', source: 'WhoOwnsKenya — Boys schools football teams', url: 'https://whownskenya.com/boy-schools-with-the-best-football-teams-in-kenya/' },
];

export default function CitationsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link href="/" className="text-sm text-[#c5a46e]">← Back home</Link>
        
        <h1 className="mt-6 text-5xl font-semibold tracking-tighter">Citations &amp; Sources</h1>
        <p className="mt-2 text-lg text-[#a3a3a3]">The foundation of trust. Every addition requires a verifiable reference.</p>

        <div className="mt-8 border rounded-2xl overflow-hidden bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left py-3 px-5 w-14">ID</th>
                <th className="text-left py-3 px-5">Source</th>
              </tr>
            </thead>
            <tbody>
              {baseCitations.map(c => (
                <tr key={c.id} className="border-b last:border-none hover:bg-emerald-50/30">
                  <td className="font-mono px-5 py-3 text-emerald-700 align-top">{c.id}</td>
                  <td className="px-5 py-3">
                    {c.url ? <a href={c.url} target="_blank" className="hover:underline text-[var(--green-800)]">{c.source}</a> : c.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-sm">
          The full original citation index and research notes are maintained in <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="underline">the project repo</a> (maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru)).
        </div>

        <div className="mt-10 text-xs bg-white p-6 border rounded-2xl">
          When you suggest an edit, always include a source. We follow the rule: <em>no source, no change</em>. This keeps the resource trustworthy for students, parents, researchers and journalists.
        </div>
      </div>
    </div>
  );
}

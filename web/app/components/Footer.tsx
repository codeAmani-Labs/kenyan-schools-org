import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-9 text-xs text-[#666]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
          {/* Left: Copyright + powered / built attributions */}
          <div className="space-y-2 text-xs">
            <div>
              © {year} Kenyan Schools Directory v1.0.0
            </div>
            <div className="flex flex-wrap items-center gap-x-3 text-[10px] tracking-wide">
              <a
                href="https://codeamanilabs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a46e] hover:underline"
              >
                POWERED BY CODEAMANI LABS
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://motionstackstudios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BUILT BY MOTIONSTACK STUDIOS
              </a>
            </div>
          </div>

          {/* Right: Navigation links */}
          <div className="flex flex-wrap items-center gap-x-6 text-xs">
            <Link href="/about" className="hover:text-white">About</Link>
            <a
              href="https://github.com/codeAmani-Labs/kenyan-schools-org/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Support
            </a>
            <Link href="/citations" className="hover:text-white">Citations</Link>
            <a
              href="https://github.com/codeAmani-Labs/kenyan-schools-org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

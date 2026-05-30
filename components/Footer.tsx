import ContractChip from "./ContractChip";

const TWITTER_URL = "https://x.com/tryXchad";
const CONTRACT = "CHADhQN7DsafAtvwPXxFthN1HxJU2D69D5zkQSradft8";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-12 md:py-16">
        <div className="kicker mb-6">// footer</div>
        <p className="italic text-2xl md:text-3xl font-medium tracking-tight">
          Chad keeps X clean.
        </p>
        <p className="mt-8 text-sm text-white/50 max-w-2xl leading-relaxed">
          Not affiliated with X Corp. xChad is a third-party moderation layer
          built on the public X API.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center">
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="xChad on X"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>@tryXchad</span>
          </a>
          <ContractChip address={CONTRACT} />
        </div>

        <div className="mt-10 kicker">// xChad v0.1.0</div>
      </div>
    </footer>
  );
}

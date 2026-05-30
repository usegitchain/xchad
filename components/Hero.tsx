import ContractChip from "./ContractChip";

const TWITTER_URL = "https://x.com/tryXchad";
const CONTRACT = "CHADhQN7DsafAtvwPXxFthN1HxJU2D69D5zkQSradft8";

export default function Hero() {
  return (
    <section className="hairline-bottom">
      <div className="mx-auto max-w-6xl px-5 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="kicker mb-6">// xChad v0.1.0</div>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] max-w-4xl">
          Chad keeps X clean.
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
          AI moderator for X group chats. Scam links, impersonators, FUD
          floods — gone in milliseconds.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#install" className="btn-primary">
            Install
          </a>
          <a href="#how-it-works" className="btn-secondary">
            How it works
          </a>
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
        </div>
        <div className="mt-8">
          <ContractChip address={CONTRACT} />
        </div>
      </div>
    </section>
  );
}

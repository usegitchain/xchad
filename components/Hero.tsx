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
        </div>
      </div>
    </section>
  );
}

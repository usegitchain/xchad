import ChadMascot from "./ChadMascot";

export default function Hero() {
  return (
    <section className="hairline-bottom">
      <div className="mx-auto max-w-6xl px-5 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="kicker mb-6">// xChad v0.1.0</div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.95]">
              Chad keeps X clean.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              AI moderator for X group chats. Scam links, impersonators, FUD
              floods — gone in milliseconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#install"
                className="btn-primary"
              >
                Install
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <ChadMascot className="w-[260px] md:w-[360px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  "Wallet drainers under every announcement.",
  "Fake support DM-ing your followers.",
  "FUD bursts from accounts under a day old.",
];

export default function WhyThisExists() {
  return (
    <section id="why" className="hairline-bottom">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-24">
        <div className="kicker mb-5">// why this exists</div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
          X Chats shipped. Scammers arrived an hour later.
        </h2>
        <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
          Discord has MEE6. Telegram has Combot. X Chats has nothing. xChad is
          that nothing.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-line">
          {problems.map((p, i) => (
            <div
              key={i}
              className={
                "p-6 md:p-8 " +
                (i < problems.length - 1
                  ? "border-b border-line md:border-b-0 md:border-r"
                  : "")
              }
            >
              <div className="kicker mb-4">{`// 0${i + 1}`}</div>
              <p className="text-lg md:text-xl font-medium leading-snug">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

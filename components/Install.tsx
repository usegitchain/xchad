const steps = [
  { n: "01", title: "Install from Chrome Web Store." },
  { n: "02", title: "Open any X group chat." },
  { n: "03", title: "Watch xChad work." },
];

export default function Install() {
  return (
    <section id="install" className="hairline-bottom">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-24">
        <div className="kicker mb-5">// install</div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
          One install. One side of the line.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-line">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={
                "p-6 md:p-8 " +
                (i < steps.length - 1
                  ? "border-b border-line md:border-b-0 md:border-r"
                  : "")
              }
            >
              <div className="kicker mb-6">{`// step ${s.n}`}</div>
              <div className="text-5xl md:text-6xl font-medium leading-none tracking-tight mb-4">
                {s.n}
              </div>
              <p className="text-lg leading-snug">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chrome Web Store →
          </a>
        </div>
      </div>
    </section>
  );
}

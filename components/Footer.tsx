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
        <div className="mt-10 kicker">// xChad v0.1.0</div>
      </div>
    </footer>
  );
}

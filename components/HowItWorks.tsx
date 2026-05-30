const rows = [
  {
    threat: "Scam link",
    detection: "URL classifier + on-chain trace",
    action: "Delete + mute 24h",
  },
  {
    threat: "Impersonator",
    detection: "Profile-vs-claim semantic diff",
    action: "Delete + flag",
  },
  {
    threat: "FUD flood",
    detection: "Burst rate + sentiment",
    action: "Slow-mode + warn",
  },
  {
    threat: "Spam",
    detection: "Cross-chat fingerprint",
    action: "Delete + ban",
  },
  {
    threat: "Bot shill",
    detection: "Low-quality account heuristics",
    action: "Hide",
  },
  {
    threat: "Off-topic",
    detection: "Topic-anchor drift",
    action: "Soft-warn DM",
  },
];

const pipeline = `   message  ─▶  classifier  ─▶  action
      │              │              │
   [ raw text ]   [ scam? imp? ]  [ del / mute / hide ]`;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hairline-bottom">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-24">
        <div className="kicker mb-5">// how it works</div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
          Read, judge, act. Milliseconds.
        </h2>

        <div className="mt-10 border border-line p-5 md:p-8 overflow-x-auto">
          <pre className="ascii-pipe">{pipeline}</pre>
        </div>

        <div className="mt-10 border border-line overflow-x-auto">
          <table className="threats">
            <thead>
              <tr>
                <th>// threat</th>
                <th>// detection</th>
                <th>// default action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.threat}>
                  <td>{r.threat}</td>
                  <td className="text-white/80">{r.detection}</td>
                  <td className="text-white/80">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

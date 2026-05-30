"use client";

import { useState } from "react";

type Props = {
  address: string;
  className?: string;
};

export default function ContractChip({ address, className }: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(address);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = address;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy contract address"
      className={
        "group inline-flex items-center gap-3 border border-line px-3.5 py-2.5 font-mono text-xs md:text-sm text-white/85 hover:text-white hover:bg-white/5 transition-colors w-full md:w-auto max-w-full " +
        (className ?? "")
      }
    >
      <span className="text-white/45">CA</span>
      <span className="truncate select-all">{address}</span>
      <span className="ml-auto md:ml-2 text-white/55 group-hover:text-white shrink-0">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}

type Props = {
  className?: string;
};

export default function ChadMascot({ className }: Props) {
  return (
    <svg
      viewBox="0 0 520 640"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="xChad mascot"
      className={className}
      fill="none"
    >
      <defs>
        <clipPath id="chad-head-clip">
          <path
            d="
              M 460 170
              C 470 90, 380 30, 250 45
              C 180 55, 155 110, 158 165
              C 144 175, 132 188, 138 200
              C 153 210, 170 218, 170 232
              C 152 248, 118 268, 88 290
              C 70 308, 88 318, 122 322
              C 132 332, 144 344, 146 358
              C 138 372, 132 388, 138 402
              C 122 432, 102 458, 116 488
              C 152 506, 230 508, 310 502
              C 372 494, 410 478, 430 458
              C 452 420, 462 360, 470 290
              C 474 232, 472 200, 460 170
              Z
            "
          />
        </clipPath>

        <pattern id="scanlines" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#fff" />
          <rect width="6" height="0.4" fill="#000" opacity="0.18" />
        </pattern>
      </defs>

      <g>
        <path
          d="
            M 116 488
            L 80 540
            L 30 580
            L 10 640
            L 510 640
            L 490 580
            L 440 540
            L 412 502
            L 390 490
            L 340 502
            L 230 510
            L 150 505
            Z
          "
          fill="url(#scanlines)"
        />

        <path
          d="
            M 460 170
            C 470 90, 380 30, 250 45
            C 180 55, 155 110, 158 165
            C 144 175, 132 188, 138 200
            C 153 210, 170 218, 170 232
            C 152 248, 118 268, 88 290
            C 70 308, 88 318, 122 322
            C 132 332, 144 344, 146 358
            C 138 372, 132 388, 138 402
            C 122 432, 102 458, 116 488
            C 152 506, 230 508, 310 502
            C 372 494, 410 478, 430 458
            C 452 420, 462 360, 470 290
            C 474 232, 472 200, 460 170
            Z
          "
          fill="url(#scanlines)"
        />

        <g clipPath="url(#chad-head-clip)" opacity="0.95">
          <rect x="60" y="48" width="430" height="3" fill="#000" />
          <rect x="80" y="58" width="400" height="1.5" fill="#000" />
          <rect x="50" y="68" width="450" height="2" fill="#000" />
          <rect x="100" y="82" width="370" height="2.5" fill="#000" />
          <rect x="70" y="96" width="420" height="1.5" fill="#000" />
          <rect x="110" y="110" width="350" height="2" fill="#000" />
          <rect x="60" y="124" width="430" height="3" fill="#000" />
          <rect x="120" y="140" width="320" height="1.5" fill="#000" />
          <rect x="80" y="156" width="380" height="2" fill="#000" />
        </g>

        <path
          d="M 138 200 C 148 196, 162 200, 170 210"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M 88 290 L 122 322"
          stroke="#000"
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />
      </g>

      <rect x="38" y="120" width="6" height="6" fill="#fff" />
      <rect x="28" y="160" width="4" height="4" fill="#fff" opacity="0.7" />
      <rect x="22" y="200" width="8" height="3" fill="#fff" opacity="0.5" />
      <rect x="486" y="120" width="6" height="6" fill="#fff" />
      <rect x="496" y="160" width="4" height="4" fill="#fff" opacity="0.7" />
      <rect x="500" y="200" width="8" height="3" fill="#fff" opacity="0.5" />
    </svg>
  );
}

"use client";

type Props = {
  text: string;
  className?: string;
  color?: string;
  stroke?: string;
  fontFamily?: string;
  fontWeight?: number;
  letterSpacing?: number;
  size?: number;
  arc?: number;
};

export default function EquatorTitle({
  text,
  className,
  color = "#e10600",
  stroke,
  fontFamily = "Inter, Helvetica, Arial, sans-serif",
  fontWeight = 800,
  letterSpacing = 0.02,
  size = 2.8,
  arc = 180,
}: Props) {
  const radius = 37;
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        className="w-[min(90vw,900px)] h-auto"
        style={{
          filter: "drop-shadow(0 0 6px rgba(0,0,0,.35))",
        }}
      >
        <defs>
          <path
            id="equator-path"
            d={`M 50,50 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius *
              2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        <text
          fill={color}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          style={{
            fontSize: `${size}vw`,
            letterSpacing: `${letterSpacing}em`,
          }}
        >
          <textPath
            href="#equator-path"
            startOffset="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {text}
          </textPath>
        </text>

        {stroke && (
          <text
            stroke={stroke}
            strokeWidth={0.6}
            fill="none"
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            style={{
              fontSize: `${size}vw`,
              letterSpacing: `${letterSpacing}em`,
            }}
          >
            <textPath
              href="#equator-path"
              startOffset="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {text}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}

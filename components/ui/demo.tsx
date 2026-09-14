"use client";

import React from "react";

export type CardT = {
  image: string;
  name: string;
  handle: string;
  quote?: string;
  date?: string;
};

const DEFAULT_DATA: CardT[] = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    name: "Rajesh Sharma",
    handle: "@vanguard_logistics",
    quote:
      "SolarNext engineered our 3.5 MW rooftop plant with precision. Monthly bill dropped by 42% in Q1 alone!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    name: "Dr. Ananya Roy",
    handle: "@apex_healthcare",
    quote:
      "Executing an 800 kW solar system above an operational multi-specialty hospital was zero-downtime perfection.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    name: "Sunita Deshmukh",
    handle: "@apex_auto_ancillaries",
    quote:
      "Full CEIG approval to grid sync handled seamlessly. Achieved a 3.1 year complete ROI payback period.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    name: "Arvind Kothari",
    handle: "@heritage_textiles",
    quote:
      "Tier-1 panels and inverter array eliminated generator dependency during peak factory shifts.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    name: "Vikram Singhania",
    handle: "@greenvalley_villas",
    quote:
      "From net-metering permits to SCADA mobile app setup, SolarNext made our transition to solar 100% effortless.",
  },
];

const VerifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 48 48"
    className="inline-block shrink-0"
  >
    <polygon
      fill="#10b981"
      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
    ></polygon>
    <polygon
      fill="#ffffff"
      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
    ></polygon>
  </svg>
);

const Card = ({ card }: { card: CardT }) => (
  <div className="p-5 rounded-2xl mx-3 shadow-sm hover:shadow-md transition-all duration-200 w-80 shrink-0 bg-white border border-slate-200/90 flex flex-col justify-between">
    <div className="flex gap-3 items-center">
      <img className="size-11 rounded-full object-cover ring-2 ring-emerald-500/20 shrink-0" src={card.image} alt={card.name} />
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1">
          <p className="font-bold text-slate-900 text-sm truncate">{card.name}</p>
          <VerifyIcon />
        </div>
        <span className="text-xs text-emerald-600 font-semibold truncate">{card.handle}</span>
      </div>
    </div>
    <p className="text-xs sm:text-sm pt-3 text-slate-600 leading-relaxed italic">
      &ldquo;{card.quote || "SolarNext made undercutting energy costs an absolute breeze with flawless execution."}&rdquo;
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 25,
}: {
  data: CardT[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div className="relative w-full mx-auto max-w-7xl overflow-hidden isolation-isolate">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      <div
        className={`flex transform-gpu min-w-[200%] ${
          reverse ? "pt-2 pb-6" : "pt-6 pb-2"
        }`}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 z-10 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

export default function Marquee({
  row1 = DEFAULT_DATA,
  row2 = DEFAULT_DATA,
}: {
  row1?: CardT[];
  row2?: CardT[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="flex flex-col gap-3 py-4">
        <MarqueeRow data={row1} reverse={false} speed={28} />
        <MarqueeRow data={row2} reverse={true} speed={28} />
      </div>
    </>
  );
}

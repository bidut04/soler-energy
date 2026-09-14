import React from "react";
import { cn } from "@/lib/utils";

export default function CardsExample() {
  return (
    <div className="flex flex-col items-center w-full py-8">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Latest Engineering Insights</h2>
      <p className="text-sm text-slate-600 mt-2 max-w-lg text-center">
        Stay ahead of energy trends with fresh insights on solar EPC, SCADA automation, storage tech, and utility ROI.
      </p>

      {/* Cards */}
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-300 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <img
            className="rounded-xl w-full h-44 object-cover"
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=400"
            alt="Solar Panel Engineering"
          />
          <h3 className="text-sm text-slate-900 font-bold mt-3 leading-snug">
            Maximizing Rooftop Solar Efficiency with TOPCon Cell Tech
          </h3>
          <p className="text-xs text-emerald-700 font-semibold mt-1.5">Solar Technology</p>
        </div>

        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-300 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <img
            className="rounded-xl w-full h-44 object-cover"
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=400"
            alt="Industrial Solar Plant"
          />
          <h3 className="text-sm text-slate-900 font-bold mt-3 leading-snug">
            Navigating Open Access Solar Permits &amp; Net-Metering
          </h3>
          <p className="text-xs text-emerald-700 font-semibold mt-1.5">Regulations &amp; EPC</p>
        </div>

        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-300 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <img
            className="rounded-xl w-full h-44 object-cover"
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400"
            alt="Commercial Energy Storage"
          />
          <h3 className="text-sm text-slate-900 font-bold mt-3 leading-snug">
            BESS Battery Storage Integration for Zero Downtime Operations
          </h3>
          <p className="text-xs text-emerald-700 font-semibold mt-1.5">Storage Solutions</p>
        </div>
      </div>
    </div>
  );
}

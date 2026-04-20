import { Area, AreaChart, CartesianGrid, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { buildCurve, discountPct } from "@/lib/pricing";

const data = buildCurve(30);

export function DiscountChart({ day }: { day: number }) {
  const current = { day, discount: +discountPct(day).toFixed(2) };

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gradArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.86 0.17 200)" stopOpacity={0.55} />
              <stop offset="100%" stopColor="oklch(0.70 0.24 300)" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="gradStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.86 0.17 200)" />
              <stop offset="100%" stopColor="oklch(0.70 0.24 300)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            label={{ value: "Days to unlock", position: "insideBottom", offset: -2, fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
          />
          <YAxis
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(20,20,30,0.85)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              backdropFilter: "blur(12px)",
              fontSize: 12,
            }}
            labelFormatter={(l) => `Day ${l}`}
            formatter={((v: any) => [`${v}%`, "Discount"]) as any}
          />
          <Area
            type="monotone"
            dataKey="discount"
            stroke="url(#gradStroke)"
            strokeWidth={2.5}
            fill="url(#gradArea)"
          />
          <ReferenceDot
            x={current.day}
            y={current.discount}
            r={6}
            fill="oklch(0.86 0.17 200)"
            stroke="white"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

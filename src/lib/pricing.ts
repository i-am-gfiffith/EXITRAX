// UNS8X pricing engine
// D = k * t + r  (capped 0..100)
// V_exit = V_locked * (1 - D/100)
export const K = 0.5;
export const R = 2;

export function discountPct(days: number): number {
  const d = K * days + R;
  return Math.max(0, Math.min(100, d));
}

export function exitValue(locked: number, days: number): number {
  return locked * (1 - discountPct(days) / 100);
}

export function lpProfit(locked: number, days: number): number {
  // LP buys at discount, redeems full at unlock
  return locked - exitValue(locked, days);
}

export function buildCurve(maxDays = 30) {
  const data: { day: number; discount: number }[] = [];
  for (let t = 1; t <= maxDays; t++) {
    data.push({ day: t, discount: +discountPct(t).toFixed(2) });
  }
  return data;
}

export function liquidityStatus(days: number) {
  if (days <= 7) return { label: "Optimal Conditions", tone: "success" as const };
  if (days <= 18) return { label: "High Demand", tone: "primary" as const };
  return { label: "Low Liquidity", tone: "warning" as const };
}

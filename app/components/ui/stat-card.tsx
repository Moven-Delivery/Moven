import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  label,
  value,
  tone = "red",
  helper,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "red" | "orange" | "yellow" | "slate";
  helper?: string;
}) {
  const tones = {
    red: "bg-red-50 text-red-700",
    orange: "bg-orange-50 text-orange-700",
    yellow: "bg-yellow-50 text-yellow-700",
    slate: "bg-slate-100 text-slate-700",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <strong className="mt-2 block text-2xl font-bold text-dark">{value}</strong>
        </div>
        <span className={cn("rounded-xl p-3", tones[tone])}>
          <Icon aria-hidden className="h-5 w-5" />
        </span>
      </div>
      {helper ? <p className="mt-4 text-sm text-slate-500">{helper}</p> : null}
    </article>
  );
}

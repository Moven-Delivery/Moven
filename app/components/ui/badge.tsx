import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  danger: "bg-red-50 text-red-700 ring-red-200",
  warm: "bg-orange-50 text-orange-700 ring-orange-200",
  custom: "",
};

type BadgeVariant = keyof typeof variants;

export function Badge({
  children,
  className,
  variant = "neutral",
}: {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

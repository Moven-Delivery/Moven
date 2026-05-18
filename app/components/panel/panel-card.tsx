import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PanelCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-3xl border border-slate-200 bg-white p-5 shadow-sm", className)}>
      {children}
    </section>
  );
}

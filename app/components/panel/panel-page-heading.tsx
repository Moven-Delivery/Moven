import type { ReactNode } from "react";

export function PanelPageHeading({
  action,
  description,
  eyebrow,
  title,
}: {
  action?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-3xl font-black tracking-tight text-dark">{title}</h2>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600">{description}</p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

import { Plus } from "lucide-react";
import { PanelCard } from "@/components/panel/panel-card";

export function PagePlaceholder({
  cta = "Criar novo",
  description,
  title,
}: {
  cta?: string;
  description: string;
  title: string;
}) {
  return (
    <PanelCard className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-bold text-dark">{title}</h3>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600">{description}</p>
      </div>
      <button
        className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white transition hover:bg-red-700"
        type="button"
      >
        <Plus aria-hidden className="h-4 w-4" />
        {cta}
      </button>
    </PanelCard>
  );
}

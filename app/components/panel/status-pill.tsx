import { cn } from "@/lib/utils";

const toneByStatus: Record<string, string> = {
  Ativa: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Ativo: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Disponível: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Publicado: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Em rota": "bg-blue-50 text-blue-700 ring-blue-200",
  Oculta: "bg-slate-100 text-slate-700 ring-slate-200",
  Pausado: "bg-amber-50 text-amber-700 ring-amber-200",
  Rascunho: "bg-amber-50 text-amber-700 ring-amber-200",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex min-w-max rounded-full px-3 py-1 text-xs font-bold ring-1",
        toneByStatus[status] ?? "bg-slate-100 text-slate-700 ring-slate-200",
      )}
    >
      {status}
    </span>
  );
}

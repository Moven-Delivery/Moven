import { PanelCard } from "@/components/panel/panel-card";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { panelReports } from "@/data/mock-panel";

export default function PanelReportsPage() {
  return (
    <>
      <PanelPageHeading
        description="Indicadores iniciais para entender vendas, produto campeão e horários de maior movimento."
        eyebrow="Análise"
        title="Relatórios"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {panelReports.map((report) => (
          <PanelCard key={report.id}>
            <p className="text-sm font-semibold text-slate-500">{report.label}</p>
            <strong className="mt-3 block text-2xl text-dark">{report.value}</strong>
            <span className="mt-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-primary ring-1 ring-red-100">
              {report.trend}
            </span>
          </PanelCard>
        ))}
      </div>
    </>
  );
}

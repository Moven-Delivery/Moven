import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { panelCouriers } from "@/data/mock-panel";

export default function PanelCouriersPage() {
  return (
    <>
      <PanelPageHeading
        description="Controle inicial para entregadores próprios, disponibilidade e volume de entregas."
        eyebrow="Entrega"
        title="Entregadores"
      />

      <PanelTable headers={["Entregador", "Status", "Entregas hoje"]}>
        {panelCouriers.map((courier) => (
          <tr className="transition hover:bg-red-50/40" key={courier.id}>
            <td className="px-5 py-4 font-bold text-dark">{courier.name}</td>
            <td className="px-5 py-4">
              <StatusPill status={courier.status} />
            </td>
            <td className="px-5 py-4 text-slate-600">{courier.deliveries}</td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

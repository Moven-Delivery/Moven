import { Plus } from "lucide-react";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { panelOrders } from "@/data/mock-panel";
import { formatCurrency, getOrderStatusLabel } from "@/lib/utils";

export default function PanelOrdersPage() {
  return (
    <>
      <PanelPageHeading
        action={
          <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white">
            <Plus aria-hidden className="h-4 w-4" />
            Novo pedido
          </button>
        }
        description="Acompanhe pedidos por status, canal e valor. Ações reais serão conectadas ao backend depois."
        eyebrow="Operação"
        title="Pedidos"
      />

      <PanelTable headers={["Pedido", "Horário", "Cliente", "Canal", "Valor", "Status"]}>
        {panelOrders.map((order) => (
          <tr className="transition hover:bg-red-50/40" key={order.id}>
            <td className="px-5 py-4 font-bold text-dark">{order.number}</td>
            <td className="px-5 py-4 text-slate-600">{order.time}</td>
            <td className="px-5 py-4 text-slate-600">{order.customerName}</td>
            <td className="px-5 py-4 text-slate-600">{order.channel}</td>
            <td className="px-5 py-4 font-semibold text-dark">{formatCurrency(order.total)}</td>
            <td className="px-5 py-4">
              <StatusPill status={getOrderStatusLabel(order.status)} />
            </td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

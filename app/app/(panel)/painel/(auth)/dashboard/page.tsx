import { ClipboardList, CookingPot, ReceiptText, Wallet } from "lucide-react";
import { PanelCard } from "@/components/panel/panel-card";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { StatCard } from "@/components/ui/stat-card";
import { panelOrders, panelStats } from "@/data/mock-panel";
import { formatCurrency, getOrderStatusLabel } from "@/lib/utils";

const statIcons = [ClipboardList, Wallet, ReceiptText, CookingPot];

export default function PanelDashboardPage() {
  return (
    <>
      <PanelPageHeading
        description="Visão clara da operação do dia, com pedidos, receita e fluxo de preparo em tempo real mockado."
        eyebrow="Visão geral"
        title="Dashboard"
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {panelStats.map((stat, index) => (
          <StatCard
            helper={stat.helper}
            icon={statIcons[index]}
            key={stat.label}
            label={stat.label}
            tone={index === 1 ? "orange" : index === 2 ? "yellow" : "red"}
            value={stat.value}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-5 xl:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-dark">Últimos pedidos</h3>
            <p className="mt-1 text-sm text-slate-500">Fila recente para tomada rápida de decisão.</p>
          </div>
          <PanelTable headers={["Pedido", "Cliente", "Itens", "Valor", "Status"]}>
            {panelOrders.map((order) => (
              <tr className="transition hover:bg-red-50/40" key={order.id}>
                <td className="px-5 py-4 font-bold text-dark">{order.number}</td>
                <td className="px-5 py-4 text-slate-600">{order.customerName}</td>
                <td className="px-5 py-4 text-slate-600">{order.items}</td>
                <td className="px-5 py-4 font-semibold text-dark">{formatCurrency(order.total)}</td>
                <td className="px-5 py-4">
                  <StatusPill status={getOrderStatusLabel(order.status)} />
                </td>
              </tr>
            ))}
          </PanelTable>
        </div>

        <PanelCard>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Próxima evolução
          </p>
          <h3 className="mt-3 text-2xl font-bold text-dark">RBAC preparado</h3>
          <p className="mt-3 leading-7 text-slate-600">
            A navegação já possui permissões por módulo para conectar papéis como proprietário,
            gerente, operador e suporte quando o backend entrar.
          </p>
          <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
            <p>Proprietário: acesso total</p>
            <p>Gerente: operação e relatórios</p>
            <p>Operador: pedidos e produtos</p>
          </div>
        </PanelCard>
      </section>
    </>
  );
}

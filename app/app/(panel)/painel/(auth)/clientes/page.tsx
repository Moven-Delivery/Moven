import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { panelCustomers } from "@/data/mock-panel";

export default function PanelCustomersPage() {
  return (
    <>
      <PanelPageHeading
        description="Base de clientes mockada para histórico, relacionamento e futuras ações de fidelização."
        eyebrow="Relacionamento"
        title="Clientes"
      />

      <PanelTable headers={["Cliente", "Pedidos", "Total consumido"]}>
        {panelCustomers.map((customer) => (
          <tr className="transition hover:bg-red-50/40" key={customer.id}>
            <td className="px-5 py-4 font-bold text-dark">{customer.name}</td>
            <td className="px-5 py-4 text-slate-600">{customer.orders}</td>
            <td className="px-5 py-4 font-semibold text-dark">{customer.total}</td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

import { Plus } from "lucide-react";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { panelCoupons } from "@/data/mock-panel";

export default function PanelCouponsPage() {
  return (
    <>
      <PanelPageHeading
        action={
          <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white">
            <Plus aria-hidden className="h-4 w-4" />
            Novo cupom
          </button>
        }
        description="Cupons promocionais para campanhas locais, recorrência e canais próprios."
        eyebrow="Crescimento"
        title="Cupons"
      />

      <PanelTable headers={["Código", "Desconto", "Uso", "Status"]}>
        {panelCoupons.map((coupon) => (
          <tr className="transition hover:bg-red-50/40" key={coupon.id}>
            <td className="px-5 py-4 font-bold text-dark">{coupon.code}</td>
            <td className="px-5 py-4 text-slate-600">{coupon.discount}</td>
            <td className="px-5 py-4 text-slate-600">{coupon.usage}</td>
            <td className="px-5 py-4">
              <StatusPill status={coupon.status} />
            </td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

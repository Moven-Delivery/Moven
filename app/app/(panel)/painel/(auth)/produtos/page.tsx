import { Plus } from "lucide-react";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { panelProducts } from "@/data/mock-panel";
import { formatCurrency } from "@/lib/utils";

export default function PanelProductsPage() {
  return (
    <>
      <PanelPageHeading
        action={
          <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white">
            <Plus aria-hidden className="h-4 w-4" />
            Novo produto
          </button>
        }
        description="Gerencie itens do cardápio, preços, categorias e disponibilidade da loja."
        eyebrow="Cardápio"
        title="Produtos"
      />

      <PanelTable headers={["Produto", "Categoria", "Preço", "Status"]}>
        {panelProducts.map((product) => (
          <tr className="transition hover:bg-red-50/40" key={product.id}>
            <td className="px-5 py-4 font-bold text-dark">{product.name}</td>
            <td className="px-5 py-4 text-slate-600">{product.category}</td>
            <td className="px-5 py-4 font-semibold text-dark">{formatCurrency(product.price)}</td>
            <td className="px-5 py-4">
              <StatusPill status={product.status} />
            </td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

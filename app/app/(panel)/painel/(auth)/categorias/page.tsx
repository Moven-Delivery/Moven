import { Plus } from "lucide-react";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";
import { PanelTable } from "@/components/panel/panel-table";
import { StatusPill } from "@/components/panel/status-pill";
import { panelCategories } from "@/data/mock-panel";

export default function PanelCategoriesPage() {
  return (
    <>
      <PanelPageHeading
        action={
          <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white">
            <Plus aria-hidden className="h-4 w-4" />
            Nova categoria
          </button>
        }
        description="Organize o cardápio por seções claras para facilitar a compra do cliente."
        eyebrow="Cardápio"
        title="Categorias"
      />

      <PanelTable headers={["Categoria", "Produtos", "Status"]}>
        {panelCategories.map((category) => (
          <tr className="transition hover:bg-red-50/40" key={category.id}>
            <td className="px-5 py-4 font-bold text-dark">{category.name}</td>
            <td className="px-5 py-4 text-slate-600">{category.products}</td>
            <td className="px-5 py-4">
              <StatusPill status={category.status} />
            </td>
          </tr>
        ))}
      </PanelTable>
    </>
  );
}

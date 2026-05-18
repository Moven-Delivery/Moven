import { PanelCard } from "@/components/panel/panel-card";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";

const settings = [
  { label: "Nome da loja", value: "Pizzaria Bella Massa" },
  { label: "Tempo médio de entrega", value: "45-60 min" },
  { label: "Pedido mínimo", value: "R$ 35,00" },
  { label: "Perfil de acesso", value: "Proprietário" },
];

export default function PanelSettingsPage() {
  return (
    <>
      <PanelPageHeading
        description="Configurações iniciais da operação, preparadas para permissões e auditoria futuramente."
        eyebrow="Sistema"
        title="Configurações"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {settings.map((setting) => (
          <PanelCard key={setting.label}>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              {setting.label}
            </p>
            <strong className="mt-3 block text-2xl text-dark">{setting.value}</strong>
          </PanelCard>
        ))}
      </div>
    </>
  );
}

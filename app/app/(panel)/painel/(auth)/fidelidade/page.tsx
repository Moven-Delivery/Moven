import { PagePlaceholder } from "@/components/panel/page-placeholder";
import { PanelCard } from "@/components/panel/panel-card";
import { PanelPageHeading } from "@/components/panel/panel-page-heading";

export default function PanelLoyaltyPage() {
  return (
    <>
      <PanelPageHeading
        description="Área inicial para pontos, recompensas e relacionamento com clientes frequentes."
        eyebrow="Relacionamento"
        title="Fidelidade"
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <PagePlaceholder
          cta="Criar regra"
          description="Configure regras como compre 5 vezes e ganhe desconto, pontos por pedido ou recompensas por ticket."
          title="Programa de fidelidade"
        />
        <PanelCard>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Mock</p>
          <strong className="mt-3 block text-3xl text-dark">128</strong>
          <p className="mt-2 text-sm leading-6 text-slate-500">Clientes aptos para campanha futura.</p>
        </PanelCard>
      </div>
    </>
  );
}

import {
  ClipboardList,
  DollarSign,
  LayoutDashboard,
  Layers,
  Settings,
  Store,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import { OrderTable } from "@/components/cards/order-table";
import { DashboardShell } from "@/components/admin/dashboard-shell";
import { StatCard } from "@/components/ui/stat-card";
import { mockOrders } from "@/data/mockOrders";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, active: true },
  { label: "Estabelecimentos", href: "/admin", icon: Store },
  { label: "Usuários", href: "/admin", icon: Users },
  { label: "Pedidos", href: "/admin", icon: ClipboardList },
  { label: "Planos", href: "/admin", icon: Layers },
  { label: "Financeiro", href: "/admin", icon: Wallet },
  { label: "Configurações", href: "/admin", icon: Settings },
];

export default function AdminPage() {
  return (
    <DashboardShell
      description="Administração geral da plataforma, preparada para acompanhar crescimento, planos, pedidos e financeiro."
      eyebrow="Administração"
      navItems={navItems}
      title="Visão geral da plataforma"
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard helper="4 lojas mockadas" icon={Store} label="Total estabelecimentos" value="4" />
        <StatCard
          helper="Pedidos em todos os canais"
          icon={ClipboardList}
          label="Total pedidos"
          tone="orange"
          value="1.248"
        />
        <StatCard
          helper="Receita estimada da plataforma"
          icon={DollarSign}
          label="Faturamento plataforma"
          tone="yellow"
          value="R$ 18.450"
        />
        <StatCard helper="Últimos 7 dias" icon={UserPlus} label="Novos cadastros" tone="slate" value="23" />
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-dark">Pedidos recentes da plataforma</h2>
          <p className="mt-1 text-sm text-slate-500">Acompanhamento consolidado entre estabelecimentos.</p>
        </div>
        <OrderTable orders={mockOrders} showStore />
      </section>
    </DashboardShell>
  );
}

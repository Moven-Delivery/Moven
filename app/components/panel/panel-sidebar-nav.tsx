"use client";

import {
  BarChart3,
  ClipboardList,
  Folder,
  LayoutDashboard,
  Package,
  Settings,
  Star,
  TicketPercent,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panelNavItems } from "@/data/mock-panel";
import { cn } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  Dashboard: LayoutDashboard,
  Pedidos: ClipboardList,
  Produtos: Package,
  Categorias: Folder,
  Cupons: TicketPercent,
  Fidelidade: Star,
  Entregadores: Truck,
  Clientes: Users,
  Relatórios: BarChart3,
  Configurações: Settings,
};

export function PanelSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:overflow-visible lg:pb-6">
      {panelNavItems.map((item) => {
        const Icon = navIcons[item.label] ?? LayoutDashboard;
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            className={cn(
              "flex min-w-max items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition",
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-dark",
            )}
            href={item.href}
            key={item.href}
            prefetch
          >
            <Icon aria-hidden className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

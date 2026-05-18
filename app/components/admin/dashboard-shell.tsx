import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export function DashboardShell({
  title,
  description,
  navItems,
  children,
  eyebrow,
}: {
  title: string;
  description: string;
  navItems: DashboardNavItem[];
  children: React.ReactNode;
  eyebrow: string;
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">
          <div className="flex h-16 items-center gap-2 px-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <UtensilsCrossed aria-hidden className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
              <strong className="text-lg text-dark">Moven</strong>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:overflow-visible lg:py-5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  className={cn(
                    "flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                    item.active
                      ? "bg-red-50 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-dark",
                  )}
                  href={item.href}
                  key={item.label}
                >
                  <Icon aria-hidden className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <section className="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
              <h1 className="mt-2 text-3xl font-bold text-dark">{title}</h1>
              <p className="mt-2 max-w-2xl text-slate-600">{description}</p>
            </div>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}

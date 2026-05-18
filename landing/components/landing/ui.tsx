import { ReactNode } from "react";

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-4 text-lg text-gray-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-soft ${className}`}>{children}</div>;
}

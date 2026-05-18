export default function PanelLoading() {
  return (
    <div className="space-y-6">
      <div className="max-w-xl space-y-3">
        <div className="h-4 w-28 animate-pulse rounded-full bg-red-100" />
        <div className="h-9 w-64 animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-5 w-full animate-pulse rounded-full bg-slate-200" />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="h-36 animate-pulse rounded-3xl border border-slate-200 bg-white"
            key={index}
          />
        ))}
      </section>

      <div className="h-80 animate-pulse rounded-3xl border border-slate-200 bg-white" />
    </div>
  );
}

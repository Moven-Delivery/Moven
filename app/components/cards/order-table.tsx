import { Badge } from "@/components/ui/badge";
import { formatCurrency, getOrderStatusClass, getOrderStatusLabel } from "@/lib/utils";
import type { Order } from "@/types/order";

export function OrderTable({ orders, showStore = false }: { orders: Order[]; showStore?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.14em] text-slate-500">
            <tr>
              <th className="px-5 py-4 font-bold">Pedido</th>
              <th className="px-5 py-4 font-bold">Cliente</th>
              {showStore ? <th className="px-5 py-4 font-bold">Estabelecimento</th> : null}
              <th className="px-5 py-4 font-bold">Valor</th>
              <th className="px-5 py-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr className="transition hover:bg-orange-50/40" key={order.id}>
                <td className="px-5 py-4 font-bold text-dark">{order.number}</td>
                <td className="px-5 py-4 text-slate-600">{order.customerName}</td>
                {showStore ? <td className="px-5 py-4 text-slate-600">{order.storeName}</td> : null}
                <td className="px-5 py-4 font-semibold text-dark">{formatCurrency(order.total)}</td>
                <td className="px-5 py-4">
                  <Badge className={getOrderStatusClass(order.status)} variant="custom">
                    {getOrderStatusLabel(order.status)}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

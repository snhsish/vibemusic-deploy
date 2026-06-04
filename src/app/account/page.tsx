import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Vibe Music",
  description: "Manage your orders, addresses, and preferences.",
};

type Order = {
  id: string;
  date: string;
  status: "Delivered" | "In Transit" | "Processing";
  total: number;
  items: number;
};

const recentOrders: Order[] = [
  { id: "VBM-10241", date: "Jun 02, 2026", status: "Delivered", total: 4299, items: 1 },
  { id: "VBM-10198", date: "May 14, 2026", status: "In Transit", total: 749, items: 1 },
  { id: "VBM-10156", date: "Apr 28, 2026", status: "Delivered", total: 1899, items: 2 },
  { id: "VBM-10089", date: "Mar 11, 2026", status: "Delivered", total: 549, items: 1 },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const statusStyles: Record<Order["status"], string> = {
  Delivered: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Transit": "bg-sky-500/15 text-sky-400 border-sky-500/30",
  Processing: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const accountNav = [
  {
    name: "Overview",
    href: "/account",
    active: true,
    icon: (
      <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
    ),
  },
  {
    name: "Orders",
    href: "/account/orders",
    count: 12,
    icon: (
      <>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
  },
  {
    name: "Addresses",
    href: "/account/addresses",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    name: "Payment Methods",
    href: "/account/payment",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    count: 6,
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
  },
  {
    name: "Settings",
    href: "/account/settings",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </>
    ),
  },
];

const stats = [
  {
    label: "Total Orders",
    value: "12",
    icon: (
      <>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
  },
  {
    label: "Wishlist Items",
    value: "6",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
  },
  {
    label: "Reward Points",
    value: "1,240",
    icon: (
      <>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </>
    ),
  },
  {
    label: "Member Tier",
    value: "Gold",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
  },
];

export default function AccountPage() {
  return (
    <main className="flex-1 w-full bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-500 uppercase">
            My Account
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Welcome back, Alex
          </h1>
          <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-2xl">
            Here&apos;s what&apos;s happening with your account. Manage your
            orders, addresses, and preferences all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            {/* Profile card */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-6 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-2xl font-black text-black mb-4">
                AM
              </div>
              <h2 className="text-lg font-semibold">Alex Morgan</h2>
              <p className="text-sm text-zinc-500 mt-1">
                alex.morgan@vibe.music
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.65 8.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
                Gold Member
              </span>
              <p className="text-xs text-zinc-500 mt-4 pt-4 border-t border-zinc-900">
                Member since January 2024
              </p>
            </div>

            {/* Nav */}
            <nav className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-2">
              {accountNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className="flex-1">{item.name}</span>
                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded ${
                        item.active
                          ? "bg-white text-black"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
              <div className="h-px bg-zinc-900 my-2" />
              <button
                type="button"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-rose-400 hover:bg-rose-500/5 transition-colors"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
                <span className="flex-1 text-left">Sign Out</span>
              </button>
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                      {stat.label}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-amber-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        {stat.icon}
                      </svg>
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white tabular-nums">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent orders */}
            <section className="rounded-2xl border border-zinc-900 bg-zinc-950/50 overflow-hidden">
              <header className="flex items-center justify-between p-6 border-b border-zinc-900">
                <div>
                  <h3 className="text-lg font-semibold">Recent Orders</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Track and review your latest purchases
                  </p>
                </div>
                <Link
                  href="/account/orders"
                  className="text-xs font-semibold text-amber-500 hover:text-amber-400 inline-flex items-center gap-1"
                >
                  View All
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-widest text-zinc-500 border-b border-zinc-900">
                      <th className="text-left font-semibold px-6 py-3">
                        Order
                      </th>
                      <th className="text-left font-semibold px-6 py-3 hidden sm:table-cell">
                        Date
                      </th>
                      <th className="text-left font-semibold px-6 py-3">
                        Status
                      </th>
                      <th className="text-right font-semibold px-6 py-3 hidden md:table-cell">
                        Items
                      </th>
                      <th className="text-right font-semibold px-6 py-3">
                        Total
                      </th>
                      <th className="px-6 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-zinc-900 last:border-0 hover:bg-zinc-900/30 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-white">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 text-zinc-400 hidden sm:table-cell">
                          {order.date}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${statusStyles[order.status]}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-zinc-400 hidden md:table-cell tabular-nums">
                          {order.items}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-white tabular-nums">
                          {formatPrice(order.total)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            type="button"
                            className="text-xs font-semibold text-zinc-400 hover:text-white"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick actions */}
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-amber-500/50 transition-colors text-left"
                >
                  <span className="w-11 h-11 rounded-xl bg-zinc-900 group-hover:bg-amber-500/15 flex items-center justify-center text-amber-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 16l4-4-4-4M20 12H8M12 22a10 10 0 100-20 10 10 0 000 20z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-white">Track an Order</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Check delivery status
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-amber-500/50 transition-colors text-left"
                >
                  <span className="w-11 h-11 rounded-xl bg-zinc-900 group-hover:bg-amber-500/15 flex items-center justify-center text-amber-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 7v6h6M21 17a9 9 0 11-9-9 9.74 9.74 0 016.74 2.74L21 8" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-white">Start a Return</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Easy 30-day returns
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-amber-500/50 transition-colors text-left"
                >
                  <span className="w-11 h-11 rounded-xl bg-zinc-900 group-hover:bg-amber-500/15 flex items-center justify-center text-amber-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-white">Contact Support</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      We&apos;re here to help
                    </p>
                  </div>
                </button>
              </div>
            </section>

            {/* Recommended */}
            <section className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold">Recommended for You</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Based on your recent activity
                  </p>
                </div>
                <Link
                  href="/"
                  className="text-xs font-semibold text-amber-500 hover:text-amber-400"
                >
                  Browse All
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "FP-90 Stage Piano", price: 2199, swatch: "from-amber-900/40 via-zinc-800 to-black" },
                  { name: "TG-67 Stratocaster", price: 1799, swatch: "from-sky-900/40 via-zinc-800 to-black" },
                  { name: "Studio 87 Mic", price: 999, swatch: "from-emerald-900/40 via-zinc-800 to-black" },
                  { name: "Vintage Kick 22\"", price: 749, swatch: "from-rose-900/40 via-zinc-800 to-black" },
                ].map((rec) => (
                  <div
                    key={rec.name}
                    className="group rounded-xl border border-zinc-900 overflow-hidden hover:border-zinc-800 transition-colors"
                  >
                    <div className="relative aspect-square">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${rec.swatch}`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform duration-500"
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-white truncate">
                        {rec.name}
                      </p>
                      <p className="text-xs text-amber-500 font-bold mt-1 tabular-nums">
                        {formatPrice(rec.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | Vibe Music",
  description: "Review the items in your cart before checkout.",
};

type CartItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  swatch: string;
};

const cartItems: CartItem[] = [
  {
    id: "rp-b214",
    name: "Rhodes Piano B-214",
    category: "Electric Pianos",
    price: 4299,
    quantity: 1,
    swatch: "from-amber-900/40 via-zinc-800 to-black",
  },
  {
    id: "sg-custom",
    name: "SG Custom Heritage",
    category: "Electric Guitars",
    price: 2899,
    quantity: 1,
    swatch: "from-red-900/40 via-zinc-800 to-black",
  },
  {
    id: "ml-2x12",
    name: "ML 2x12 Cabinet",
    category: "Guitar Amps",
    price: 1199,
    quantity: 2,
    swatch: "from-emerald-900/40 via-zinc-800 to-black",
  },
  {
    id: "s-link",
    name: "StudioLink Pro Interface",
    category: "Studio & Audio",
    price: 549,
    quantity: 1,
    swatch: "from-sky-900/40 via-zinc-800 to-black",
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
const shipping = subtotal > 0 ? 49 : 0;
const tax = Math.round(subtotal * 0.08);
const total = subtotal + shipping + tax;

export default function CartPage() {
  return (
    <main className="flex-1 w-full bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-amber-500 uppercase">
              Your Bag
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Shopping Cart
            </h1>
            <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-xl">
              Carefully selected pieces, ready to ship. Review your order
              before proceeding to secure checkout.
            </p>
          </div>
          <div className="text-sm text-zinc-400">
            <span className="text-white font-semibold">
              {cartItems.length}
            </span>{" "}
            {cartItems.length === 1 ? "item" : "items"} in your cart
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl py-24 px-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-zinc-500 mb-6">
              Discover instruments worth playing for a lifetime.
            </p>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items List */}
            <section className="lg:col-span-2 space-y-4">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-[11px] uppercase tracking-widest text-zinc-500 border-b border-zinc-900">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Unit Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-colors"
                >
                  {/* Product */}
                  <div className="md:col-span-6 flex items-center gap-4">
                    <div
                      className={`relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-br ${item.swatch}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          className="w-10 h-10 text-white/30"
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-amber-500/80 font-semibold">
                        {item.category}
                      </p>
                      <h3 className="text-base md:text-lg font-semibold text-white truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        SKU: {item.id.toUpperCase()}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-xs text-zinc-500 hover:text-white underline underline-offset-4 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex md:justify-center">
                    <div className="inline-flex items-center border border-zinc-800 rounded-full overflow-hidden">
                      <button
                        type="button"
                        className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <span className="w-10 text-center text-sm font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Unit Price */}
                  <div className="md:col-span-2 md:text-right text-sm text-zinc-300">
                    <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 mr-2">
                      Unit
                    </span>
                    {formatPrice(item.price)}
                  </div>

                  {/* Line Total */}
                  <div className="md:col-span-2 md:text-right text-sm md:text-base font-semibold text-white">
                    <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 mr-2 font-normal">
                      Total
                    </span>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </article>
              ))}

              {/* Cart actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4">
                <div className="flex items-center gap-2 w-full sm:max-w-md">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-full px-4 h-11 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button
                    type="button"
                    className="h-11 px-5 rounded-full border border-zinc-800 text-sm font-semibold hover:bg-zinc-900 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6 md:p-8">
                <h2 className="text-lg font-semibold tracking-wide uppercase mb-6">
                  Order Summary
                </h2>

                <dl className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-zinc-400">Subtotal</dt>
                    <dd className="font-medium tabular-nums">
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-zinc-400">Shipping</dt>
                    <dd className="font-medium tabular-nums">
                      {formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-zinc-400">Estimated Tax</dt>
                    <dd className="font-medium tabular-nums">
                      {formatPrice(tax)}
                    </dd>
                  </div>

                  <div className="h-px bg-zinc-900 my-2" />

                  <div className="flex items-center justify-between text-base">
                    <dt className="text-zinc-200 font-semibold">Total</dt>
                    <dd className="font-bold text-white text-lg tabular-nums">
                      {formatPrice(total)}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="mt-6 w-full h-12 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="mt-4 text-[11px] text-zinc-500 text-center">
                  Free returns within 30 days. Secure 256-bit SSL checkout.
                </p>

                <ul className="mt-6 pt-6 border-t border-zinc-900 space-y-3 text-xs text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Free in-store pickup available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    2-year craftsmanship warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Carbon-neutral delivery
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

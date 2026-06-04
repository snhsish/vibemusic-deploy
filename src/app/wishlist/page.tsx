import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Wishlist | Vibe Music",
  description: "Pieces you love, saved for later.",
};

type WishlistItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  swatch: string;
  accent: string;
};

const wishlistItems: WishlistItem[] = [
  {
    id: "fp-90",
    name: "FP-90 Stage Piano",
    category: "Stage Pianos",
    price: 2199,
    originalPrice: 2499,
    inStock: true,
    swatch: "from-amber-900/40 via-zinc-800 to-black",
    accent: "text-amber-500",
  },
  {
    id: "tg-strat",
    name: 'TG-67 Stratocaster "Surf"',
    category: "Electric Guitars",
    price: 1799,
    inStock: true,
    swatch: "from-sky-900/40 via-zinc-800 to-black",
    accent: "text-sky-400",
  },
  {
    id: "ls-700",
    name: "LS-700 Les Paul Studio",
    category: "Electric Guitars",
    price: 1599,
    inStock: false,
    swatch: "from-orange-900/40 via-zinc-800 to-black",
    accent: "text-orange-400",
  },
  {
    id: "d-kick",
    name: "Vintage Kick Drum 22\"",
    category: "Drums & Percussion",
    price: 749,
    inStock: true,
    swatch: "from-rose-900/40 via-zinc-800 to-black",
    accent: "text-rose-400",
  },
  {
    id: "mic-87",
    name: "Studio 87 Condenser Mic",
    category: "Studio & Audio",
    price: 999,
    inStock: true,
    swatch: "from-emerald-900/40 via-zinc-800 to-black",
    accent: "text-emerald-400",
  },
  {
    id: "syn-x9",
    name: "X-9 Analog Synthesizer",
    category: "Synthesizers",
    price: 3499,
    originalPrice: 3899,
    inStock: true,
    swatch: "from-violet-900/40 via-zinc-800 to-black",
    accent: "text-violet-400",
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function WishlistPage() {
  return (
    <main className="flex-1 w-full bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-amber-500 uppercase">
              Saved for Later
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Your Wishlist
            </h1>
            <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-xl">
              A curated collection of instruments you&apos;re considering. Move
              them to your cart whenever you&apos;re ready to make them yours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-400">
              <span className="text-white font-semibold">
                {wishlistItems.length}
              </span>{" "}
              saved items
            </span>
            <button
              type="button"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full border border-zinc-800 px-5 text-sm font-semibold hover:bg-zinc-900 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl py-24 px-6 text-center">
            <div className="mx-auto w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-zinc-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Nothing saved yet
            </h2>
            <p className="text-zinc-500 mb-6">
              Tap the heart icon on any product to add it to your wishlist.
            </p>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Browse Instruments
            </Link>
          </div>
        ) : (
          <>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  "All",
                  "Electric Guitars",
                  "Pianos",
                  "Studio & Audio",
                  "Drums",
                ].map((filter, i) => (
                  <button
                    key={filter}
                    type="button"
                    className={`px-4 h-9 rounded-full text-xs font-semibold tracking-wide uppercase whitespace-nowrap border transition-colors ${
                      i === 0
                        ? "bg-white text-black border-white"
                        : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>Sort by</span>
                <select
                  className="bg-zinc-950 border border-zinc-800 rounded-full h-9 px-4 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                  defaultValue="recent"
                >
                  <option value="recent">Recently Added</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col rounded-2xl border border-zinc-900 bg-zinc-950/50 overflow-hidden hover:border-zinc-800 transition-colors"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.swatch}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="w-20 h-20 text-white/20 transition-transform duration-500 group-hover:scale-110"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.originalPrice && (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-500 text-black px-2 py-1 rounded">
                          Save {formatPrice(item.originalPrice - item.price)}
                        </span>
                      )}
                      {!item.inStock && (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Remove (heart filled) */}
                    <button
                      type="button"
                      aria-label="Remove from wishlist"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p
                      className={`text-[10px] uppercase tracking-widest font-semibold ${item.accent}`}
                    >
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-white">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white tabular-nums">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-zinc-500 line-through tabular-nums">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto pt-5 flex flex-col gap-2">
                      <button
                        type="button"
                        disabled={!item.inStock}
                        className="w-full h-11 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                        {item.inStock ? "Add to Cart" : "Notify Me"}
                      </button>
                      <button
                        type="button"
                        className="w-full h-10 rounded-full border border-zinc-800 text-xs font-semibold tracking-wide uppercase text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Footer hint */}
            <div className="mt-16 border-t border-zinc-900 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-zinc-500">
                Tip: items in your wishlist stay saved for 90 days.
              </p>
              <Link
                href="/cart"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Go to Cart
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

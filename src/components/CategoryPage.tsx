export type CategoryItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  swatch: string;
  badge?: string;
};

export type CategoryConfig = {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: boolean;
  filters: string[];
  items: CategoryItem[];
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function StarRating({ value, reviews }: { value: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.round(value) ? "text-amber-400" : "text-zinc-700"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.65 8.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      <span className="font-medium text-zinc-300">{value.toFixed(1)}</span>
      <span className="text-zinc-600">·</span>
      <span>{reviews} reviews</span>
    </div>
  );
}

function ProductCard({
  item,
  highlight,
}: {
  item: CategoryItem;
  highlight?: boolean;
}) {
  const onSale =
    item.originalPrice !== undefined && item.originalPrice > item.price;
  const savings = onSale
    ? (item.originalPrice as number) - item.price
    : 0;

  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-900 bg-zinc-950/50 overflow-hidden hover:border-zinc-800 transition-colors">
      <div className="relative aspect-[4/3]">
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

        {/* Top-left badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.badge && (
            <span
              className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                highlight
                  ? "bg-rose-500 text-white"
                  : "bg-amber-500 text-black"
              }`}
            >
              {item.badge}
            </span>
          )}
          {onSale && (
            <span className="text-[10px] font-bold uppercase tracking-widest bg-rose-500 text-white px-2 py-1 rounded">
              Save {formatPrice(savings)}
            </span>
          )}
        </div>

        {/* Wishlist heart */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-amber-500/80">
          {item.brand}
        </p>
        <h3 className="mt-1.5 text-base font-semibold text-white">
          {item.name}
        </h3>
        <div className="mt-2">
          <StarRating value={item.rating} reviews={item.reviews} />
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-bold text-white tabular-nums">
            {formatPrice(item.price)}
          </span>
          {item.originalPrice && (
            <span className="text-sm text-zinc-500 line-through tabular-nums">
              {formatPrice(item.originalPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          className={`mt-4 w-full h-10 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
            highlight
              ? "bg-rose-500 text-white hover:bg-rose-600"
              : "bg-white text-black hover:bg-zinc-200"
          }`}
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
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function CategoryPage({
  category,
}: {
  category: CategoryConfig;
}) {
  const accentText = category.highlight ? "text-rose-500" : "text-amber-500";
  const totalCount = category.items.length + 24;
  const shown = category.items.length;

  return (
    <main className="flex-1 w-full bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span
            className={`text-xs font-semibold tracking-[0.3em] uppercase ${accentText}`}
          >
            {category.eyebrow}
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter uppercase">
            {category.title}
          </h1>
          <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-2xl">
            {category.description}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 pb-6 border-b border-zinc-900">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
            {category.filters.map((filter, i) => (
              <button
                key={filter}
                type="button"
                className={`px-4 h-9 rounded-full text-xs font-semibold tracking-wide uppercase whitespace-nowrap border transition-colors ${
                  i === 0
                    ? category.highlight
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-white text-black border-white"
                    : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="hidden sm:inline">
              Showing {shown} of {totalCount}
            </span>
            <select
              className={`bg-zinc-950 border border-zinc-800 rounded-full h-9 px-4 text-xs text-white focus:outline-none transition-colors ${
                category.highlight
                  ? "focus:border-rose-500"
                  : "focus:border-amber-500"
              }`}
              defaultValue="featured"
            >
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              highlight={category.highlight}
            />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-zinc-500 mb-4">
            You&apos;ve viewed {shown} of {totalCount} products
          </p>
          <div className="w-full max-w-xs h-1 bg-zinc-900 rounded-full overflow-hidden mb-6">
            <div
              className={`h-full rounded-full ${
                category.highlight ? "bg-rose-500" : "bg-amber-500"
              }`}
              style={{ width: `${Math.min(100, (shown / totalCount) * 100)}%` }}
            />
          </div>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 px-8 text-sm font-semibold hover:bg-zinc-900 transition-colors"
          >
            Load More Products
          </button>
        </div>
      </div>
    </main>
  );
}

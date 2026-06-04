import CategoryPage, {
  type CategoryConfig,
} from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guitars & Basses | Vibe Music",
  description: "Browse electric, acoustic, and bass guitars from top brands.",
};

const guitars: CategoryConfig = {
  eyebrow: "Stringed Collection",
  title: "Guitars & Basses",
  description:
    "Bolt-on, set-neck, hollow-body. Find the instrument that defines your sound.",
  filters: [
    "All",
    "Electric",
    "Acoustic",
    "Bass",
    "Hollow Body",
    "Acoustic-Electric",
  ],
  items: [
    {
      id: "tg-67",
      name: 'TG-67 Stratocaster "Surf"',
      brand: "Vibe Co.",
      price: 1799,
      rating: 4.8,
      reviews: 412,
      swatch: "from-sky-900/40 via-zinc-800 to-black",
      badge: "Best Seller",
    },
    {
      id: "ls-700",
      name: "LS-700 Les Paul Studio",
      brand: "Heritage",
      price: 1599,
      rating: 4.7,
      reviews: 287,
      swatch: "from-orange-900/40 via-zinc-800 to-black",
    },
    {
      id: "sg-custom",
      name: "SG Custom Heritage",
      brand: "Heritage",
      price: 2899,
      rating: 4.9,
      reviews: 154,
      swatch: "from-red-900/40 via-zinc-800 to-black",
    },
    {
      id: "jm-65",
      name: "Jazzmaster JM-65",
      brand: "Vintage",
      price: 1999,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 198,
      swatch: "from-emerald-900/40 via-zinc-800 to-black",
    },
    {
      id: "pb-58",
      name: "Precision Bass '58",
      brand: "Fender",
      price: 2299,
      rating: 4.9,
      reviews: 322,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
    },
    {
      id: "jb-classic",
      name: "J-Bass Classic",
      brand: "Fender",
      price: 1899,
      rating: 4.7,
      reviews: 245,
      swatch: "from-stone-600/40 via-zinc-800 to-black",
    },
    {
      id: "es-335",
      name: "ES-335 Vintage",
      brand: "Gibson",
      price: 3499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 167,
      swatch: "from-yellow-900/40 via-zinc-800 to-black",
      badge: "Limited",
    },
    {
      id: "fv-custom",
      name: "Flying V Custom",
      brand: "Heritage",
      price: 2599,
      rating: 4.5,
      reviews: 92,
      swatch: "from-zinc-700/40 via-zinc-800 to-black",
      badge: "New",
    },
  ],
};

export default function GuitarsPage() {
  return <CategoryPage category={guitars} />;
}

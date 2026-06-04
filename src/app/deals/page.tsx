import CategoryPage, {
  type CategoryConfig,
} from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals | Vibe Music",
  description: "Limited-time offers on instruments and gear.",
};

const deals: CategoryConfig = {
  eyebrow: "Limited Time Offers",
  title: "This Week's Deals",
  description:
    "Hand-picked savings on instruments and gear. Prices drop, stock doesn't last.",
  highlight: true,
  filters: [
    "All",
    "Pianos",
    "Guitars",
    "Drums",
    "Studio",
    "Under $500",
  ],
  items: [
    {
      id: "d-fp90",
      name: "FP-90 Stage Piano",
      brand: "Roland",
      price: 1899,
      originalPrice: 2199,
      rating: 4.7,
      reviews: 189,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
    },
    {
      id: "d-jm65",
      name: "Jazzmaster JM-65",
      brand: "Vintage",
      price: 1799,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 198,
      swatch: "from-emerald-900/40 via-zinc-800 to-black",
    },
    {
      id: "d-es335",
      name: "ES-335 Vintage",
      brand: "Gibson",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 167,
      swatch: "from-yellow-900/40 via-zinc-800 to-black",
      badge: "Hot",
    },
    {
      id: "d-tiimp",
      name: "Tama Imperialstar 5pc",
      brand: "Tama",
      price: 949,
      originalPrice: 1299,
      rating: 4.6,
      reviews: 78,
      swatch: "from-red-900/40 via-zinc-800 to-black",
    },
    {
      id: "d-s87",
      name: "Studio 87 Condenser Mic",
      brand: "Neumann",
      price: 899,
      originalPrice: 1149,
      rating: 4.9,
      reviews: 187,
      swatch: "from-sky-900/40 via-zinc-800 to-black",
    },
    {
      id: "d-sub8",
      name: "Sub 8 Subwoofer",
      brand: "Genelec",
      price: 1199,
      originalPrice: 1499,
      rating: 4.8,
      reviews: 76,
      swatch: "from-stone-600/40 via-zinc-800 to-black",
    },
    {
      id: "d-caj",
      name: "Cajon Compact Bundle",
      brand: "Meinl",
      price: 159,
      originalPrice: 199,
      rating: 4.5,
      reviews: 312,
      swatch: "from-amber-800/40 via-zinc-800 to-black",
    },
    {
      id: "d-wu",
      name: "Wurlitzer 200A (Refurb)",
      brand: "Wurlitzer",
      price: 5299,
      originalPrice: 6799,
      rating: 4.9,
      reviews: 32,
      swatch: "from-stone-700/40 via-zinc-800 to-black",
      badge: "Limited",
    },
  ],
};

export default function DealsPage() {
  return <CategoryPage category={deals} />;
}

import CategoryPage, {
  type CategoryConfig,
} from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pianos & Keyboards | Vibe Music",
  description: "Browse grand pianos, stage pianos, synthesizers, and organs.",
};

const pianos: CategoryConfig = {
  eyebrow: "Keys Collection",
  title: "Pianos & Keyboards",
  description:
    "From stage-ready workhorses to heritage grands, explore instruments crafted for expression and longevity.",
  filters: [
    "All",
    "Grand Pianos",
    "Stage Pianos",
    "Synthesizers",
    "Organs",
    "Digital Pianos",
  ],
  items: [
    {
      id: "rh-b214",
      name: "Rhodes B-214 Mark II",
      brand: "Rhodes",
      price: 4299,
      originalPrice: 4799,
      rating: 4.8,
      reviews: 312,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
      badge: "Best Seller",
    },
    {
      id: "fp-90",
      name: "FP-90 Stage Piano",
      brand: "Roland",
      price: 2199,
      rating: 4.7,
      reviews: 189,
      swatch: "from-orange-900/40 via-zinc-800 to-black",
    },
    {
      id: "wu-200a",
      name: "Wurlitzer 200A",
      brand: "Wurlitzer",
      price: 5999,
      originalPrice: 6799,
      rating: 4.9,
      reviews: 76,
      swatch: "from-yellow-900/40 via-zinc-800 to-black",
    },
    {
      id: "cp-80",
      name: "CP-80 Grand Piano",
      brand: "Yamaha",
      price: 12499,
      rating: 4.9,
      reviews: 42,
      swatch: "from-stone-700/40 via-zinc-800 to-black",
      badge: "Limited",
    },
    {
      id: "nord-s4",
      name: "Nord Stage 4",
      brand: "Nord",
      price: 4499,
      rating: 4.8,
      reviews: 245,
      swatch: "from-red-900/40 via-zinc-800 to-black",
    },
    {
      id: "ham-b3",
      name: "Hammond B-3 + Leslie 122",
      brand: "Hammond",
      price: 8999,
      originalPrice: 9499,
      rating: 4.9,
      reviews: 58,
      swatch: "from-amber-700/40 via-zinc-800 to-black",
    },
    {
      id: "korg-sv2",
      name: "Korg SV-2 Stage Vintage",
      brand: "Korg",
      price: 1999,
      rating: 4.6,
      reviews: 134,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
    },
    {
      id: "up-1962",
      name: "Upright U-1962",
      brand: "Vintage",
      price: 3499,
      rating: 4.7,
      reviews: 89,
      swatch: "from-stone-600/40 via-zinc-800 to-black",
      badge: "New",
    },
  ],
};

export default function PianosPage() {
  return <CategoryPage category={pianos} />;
}

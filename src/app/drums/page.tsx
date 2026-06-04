import CategoryPage, {
  type CategoryConfig,
} from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drums & Percussion | Vibe Music",
  description: "Acoustic kits, snares, cymbals, and hand percussion.",
};

const drums: CategoryConfig = {
  eyebrow: "Percussion Collection",
  title: "Drums & Percussion",
  description:
    "Kits, snares, cymbals, and hand percussion — all the tools you need to find your rhythm.",
  filters: [
    "All",
    "Acoustic Kits",
    "Snares",
    "Cymbals",
    "Electronic",
    "Hand Percussion",
  ],
  items: [
    {
      id: "vk-22",
      name: 'Vintage Kick 22"',
      brand: "Ludwig",
      price: 749,
      rating: 4.7,
      reviews: 143,
      swatch: "from-rose-900/40 via-zinc-800 to-black",
    },
    {
      id: "ms-145",
      name: "Maple Snare 14×6.5",
      brand: "Mapex",
      price: 429,
      originalPrice: 499,
      rating: 4.8,
      reviews: 256,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
    },
    {
      id: "zac-18",
      name: 'Zildjian A Custom 18"',
      brand: "Zildjian",
      price: 379,
      rating: 4.9,
      reviews: 189,
      swatch: "from-yellow-900/40 via-zinc-800 to-black",
    },
    {
      id: "hh-14",
      name: 'Hi-Hat 14" Master',
      brand: "Sabian",
      price: 329,
      rating: 4.7,
      reviews: 134,
      swatch: "from-stone-600/40 via-zinc-800 to-black",
    },
    {
      id: "ti-imp",
      name: "Tama Imperialstar 5pc",
      brand: "Tama",
      price: 1099,
      originalPrice: 1299,
      rating: 4.6,
      reviews: 78,
      swatch: "from-red-900/40 via-zinc-800 to-black",
    },
    {
      id: "prp-22",
      name: "Pearl Reference Pure",
      brand: "Pearl",
      price: 3499,
      rating: 4.9,
      reviews: 56,
      swatch: "from-orange-900/40 via-zinc-800 to-black",
      badge: "Limited",
    },
    {
      id: "caj-cmp",
      name: "Cajon Compact",
      brand: "Meinl",
      price: 199,
      rating: 4.5,
      reviews: 312,
      swatch: "from-amber-800/40 via-zinc-800 to-black",
      badge: "Best Seller",
    },
    {
      id: "lp-gal",
      name: "LP Galaxy Congas",
      brand: "LP",
      price: 899,
      rating: 4.7,
      reviews: 87,
      swatch: "from-violet-900/40 via-zinc-800 to-black",
    },
  ],
};

export default function DrumsPage() {
  return <CategoryPage category={drums} />;
}

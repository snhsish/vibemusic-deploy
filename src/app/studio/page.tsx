import CategoryPage, {
  type CategoryConfig,
} from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio & Audio | Vibe Music",
  description: "Interfaces, microphones, monitors, and acoustic treatment.",
};

const studio: CategoryConfig = {
  eyebrow: "Studio Collection",
  title: "Studio & Audio",
  description:
    "Interfaces, microphones, monitors, and acoustic treatment engineered for accurate sound capture.",
  filters: [
    "All",
    "Interfaces",
    "Microphones",
    "Monitors",
    "Headphones",
    "Acoustics",
  ],
  items: [
    {
      id: "sl-pro",
      name: "StudioLink Pro Interface",
      brand: "Universal Audio",
      price: 549,
      rating: 4.8,
      reviews: 421,
      swatch: "from-emerald-900/40 via-zinc-800 to-black",
    },
    {
      id: "s87",
      name: "Studio 87 Condenser Mic",
      brand: "Neumann",
      price: 999,
      originalPrice: 1149,
      rating: 4.9,
      reviews: 187,
      swatch: "from-sky-900/40 via-zinc-800 to-black",
    },
    {
      id: "sm7b",
      name: "SM-7B Dynamic Mic",
      brand: "Shure",
      price: 399,
      rating: 4.9,
      reviews: 654,
      swatch: "from-zinc-600/40 via-zinc-800 to-black",
      badge: "Best Seller",
    },
    {
      id: "hs8",
      name: "HS-8 Studio Monitors (Pair)",
      brand: "Yamaha",
      price: 599,
      rating: 4.7,
      reviews: 298,
      swatch: "from-amber-900/40 via-zinc-800 to-black",
    },
    {
      id: "ap-twin",
      name: "Apollo Twin X",
      brand: "Universal Audio",
      price: 1399,
      rating: 4.9,
      reviews: 234,
      swatch: "from-violet-900/40 via-zinc-800 to-black",
    },
    {
      id: "sub-8",
      name: "Sub 8 Subwoofer",
      brand: "Genelec",
      price: 1299,
      originalPrice: 1499,
      rating: 4.8,
      reviews: 76,
      swatch: "from-stone-600/40 via-zinc-800 to-black",
    },
    {
      id: "hd-660",
      name: "Headphone HD-660",
      brand: "Sennheiser",
      price: 499,
      rating: 4.8,
      reviews: 412,
      swatch: "from-orange-900/40 via-zinc-800 to-black",
    },
    {
      id: "at-kit",
      name: "Acoustic Treatment Kit",
      brand: "GIK",
      price: 749,
      rating: 4.6,
      reviews: 145,
      swatch: "from-emerald-800/40 via-zinc-800 to-black",
      badge: "New",
    },
  ],
};

export default function StudioPage() {
  return <CategoryPage category={studio} />;
}

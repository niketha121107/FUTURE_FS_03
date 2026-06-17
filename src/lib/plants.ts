import monstera from "@/assets/monstera.jpg";
import snake from "@/assets/snake-plant.jpg";
import fiddle from "@/assets/fiddle-leaf.jpg";
import orchid from "@/assets/orchid.jpg";
import succulent from "@/assets/succulent.jpg";
import areca from "@/assets/areca-palm.jpg";
import peaceLily from "@/assets/peace-lily.jpg";
import anthurium from "@/assets/anthurium.jpg";
import zz from "@/assets/zz-plant.jpg";
import bougainvillea from "@/assets/bougainvillea.jpg";
import jade from "@/assets/jade.jpg";
import herbSeeds from "@/assets/herb-seeds.jpg";
import catSeeds from "@/assets/cat-seeds.jpg";
import catBulbs from "@/assets/cat-bulbs.jpg";
import dahliaBulbs from "@/assets/dahlia-bulbs.jpg";

export type Category = "Indoor" | "Outdoor" | "Flowering" | "Succulents" | "Seeds" | "Bulbs";

export type Plant = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
};

export const plants: Plant[] = [
  // Indoor
  { id: "monstera", name: "Monstera Deliciosa", price: 1299, description: "Sculptural split leaves bring an effortless tropical statement to any sunlit corner.", image: monstera, category: "Indoor" },
  { id: "snake", name: "Snake Plant", price: 699, description: "Architectural, low-maintenance and a quiet air purifier — thrives on neglect.", image: snake, category: "Indoor" },
  { id: "fiddle", name: "Fiddle Leaf Fig", price: 1899, description: "The interior designer's favourite — bold violin-shaped leaves and quiet drama.", image: fiddle, category: "Indoor" },
  { id: "zz", name: "ZZ Plant", price: 899, description: "Glossy waxy leaves that shrug off low light and forgetful watering routines.", image: zz, category: "Indoor" },
  { id: "peace-lily", name: "Peace Lily", price: 899, description: "Glossy foliage and pure white spathes — serene, shade-loving, evergreen.", image: peaceLily, category: "Indoor" },

  // Outdoor
  { id: "areca", name: "Areca Palm", price: 1499, description: "Feather-light fronds that soften patios and balconies with resort-style calm.", image: areca, category: "Outdoor" },
  { id: "bougainvillea", name: "Bougainvillea", price: 549, description: "Sun-loving climber drenched in magenta blooms — pure tropical drama.", image: bougainvillea, category: "Outdoor" },

  // Flowering
  { id: "orchid", name: "Phalaenopsis Orchid", price: 1599, description: "Long-lasting blooms in delicate pink — a refined gift for thoughtful spaces.", image: orchid, category: "Flowering" },
  { id: "anthurium", name: "Red Anthurium", price: 1099, description: "Lacquered heart-shaped blooms in deep red — a sculptural statement bloom.", image: anthurium, category: "Flowering" },
  { id: "premium-orchid", name: "Premium Orchid Trio", price: 2499, description: "Three rare orchid varieties in a handcrafted ceramic planter — collector grade.", image: orchid, category: "Flowering" },

  // Succulents
  { id: "echeveria", name: "Echeveria Cluster", price: 549, description: "Rosette succulents in a stone planter — sun-loving, sculptural and easy.", image: succulent, category: "Succulents" },
  { id: "jade", name: "Jade Plant", price: 399, description: "A timeless good-luck succulent with plump emerald leaves and woody stems.", image: jade, category: "Succulents" },
  { id: "succulent-trio", name: "Designer Succulent Trio", price: 1199, description: "Three handpicked rosettes in matte ceramic — a desk-top moodboard in green.", image: succulent, category: "Succulents" },

  // Seeds
  { id: "herb-seeds", name: "Heirloom Herb Seed Set", price: 249, description: "Basil, coriander and mint seed packets — kitchen-garden essentials.", image: herbSeeds, category: "Seeds" },
  { id: "flower-seeds", name: "Cottage Flower Seed Mix", price: 399, description: "A curated mix of marigold, zinnia and cosmos — months of cut-flower colour.", image: catSeeds, category: "Seeds" },
  { id: "veg-seeds", name: "Organic Vegetable Seed Kit", price: 799, description: "Twelve heirloom vegetable varieties for a complete seasonal kitchen garden.", image: catSeeds, category: "Seeds" },

  // Bulbs
  { id: "tulip-bulbs", name: "Dutch Tulip Bulbs (10 pcs)", price: 499, description: "Premium Holland-grown tulip bulbs in mixed pastel shades — spring ready.", image: catBulbs, category: "Bulbs" },
  { id: "dahlia-bulbs", name: "Dahlia Bulb Collection", price: 899, description: "Six dinnerplate dahlia tubers in painterly tones — show-stopping summer blooms.", image: dahliaBulbs, category: "Bulbs" },
  { id: "lily-bulbs", name: "Oriental Lily Bulbs", price: 1299, description: "Fragrant oriental lily bulbs — towering stems and luxurious blossoms.", image: catBulbs, category: "Bulbs" },
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "₹0 – ₹100", min: 0, max: 100 },
  { label: "₹100 – ₹500", min: 100, max: 500 },
  { label: "₹500 – ₹1000", min: 500, max: 1000 },
  { label: "Above ₹1000", min: 1000, max: Infinity },
] as const;

export const WHATSAPP_NUMBER = "919999999999"; // +91 99999 99999
export const PHONE_DISPLAY = "+91 99999 99999";

export function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function waLink(plantName?: string) {
  const text = plantName
    ? `Hi, I'm interested in purchasing ${plantName}. Please share more details.`
    : `Hi Leaf & Bloom, I'd love to know more about your plants.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

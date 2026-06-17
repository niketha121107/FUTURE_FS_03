import monstera from "@/assets/monstera.jpg";
import snake from "@/assets/snake-plant.jpg";
import fiddle from "@/assets/fiddle-leaf.jpg";
import orchid from "@/assets/orchid.jpg";
import succulent from "@/assets/succulent.jpg";
import areca from "@/assets/areca-palm.jpg";
import peaceLily from "@/assets/peace-lily.jpg";

export type Plant = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "Indoor" | "Outdoor" | "Flowering" | "Succulents";
};

export const plants: Plant[] = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    price: "₹1,299",
    description: "Sculptural split leaves bring an effortless tropical statement to any sunlit corner.",
    image: monstera,
    category: "Indoor",
  },
  {
    id: "snake",
    name: "Snake Plant",
    price: "₹699",
    description: "Architectural, low-maintenance and a quiet air purifier — thrives on neglect.",
    image: snake,
    category: "Indoor",
  },
  {
    id: "fiddle",
    name: "Fiddle Leaf Fig",
    price: "₹1,899",
    description: "The interior designer's favourite — bold violin-shaped leaves and quiet drama.",
    image: fiddle,
    category: "Indoor",
  },
  {
    id: "areca",
    name: "Areca Palm",
    price: "₹1,499",
    description: "Feather-light fronds that soften patios and balconies with resort-style calm.",
    image: areca,
    category: "Outdoor",
  },
  {
    id: "orchid",
    name: "Phalaenopsis Orchid",
    price: "₹1,599",
    description: "Long-lasting blooms in delicate pink — a refined gift for thoughtful spaces.",
    image: orchid,
    category: "Flowering",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: "₹899",
    description: "Glossy foliage and pure white spathes — serene, shade-loving, evergreen.",
    image: peaceLily,
    category: "Flowering",
  },
  {
    id: "echeveria",
    name: "Echeveria Cluster",
    price: "₹549",
    description: "Rosette succulents in a stone planter — sun-loving, sculptural and easy.",
    image: succulent,
    category: "Succulents",
  },
];

export const WHATSAPP_NUMBER = "919999999999"; // +91 99999 99999
export const PHONE_DISPLAY = "+91 99999 99999";

export function waLink(plantName?: string) {
  const text = plantName
    ? `Hi, I'm interested in purchasing ${plantName}. Please share more details.`
    : `Hi Leaf & Bloom, I'd love to know more about your plants.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

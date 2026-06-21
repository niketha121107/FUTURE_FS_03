import monstera from "@/assets/monstera.jpg";
import snake from "@/assets/snake-plant.jpg";
import fiddle from "@/assets/fiddle-leaf.jpg";
import phalaenopsisOrchid from "@/assets/phalaenopsisOrchid.jpg";
import premiumOrchidTrio from "@/assets/premiumOrchidTrio.jpg";
import succulent from "@/assets/succulent.jpg";
import areca from "@/assets/areca-palm.jpg";
import peaceLily from "@/assets/peace-lily.jpg";
import anthurium from "@/assets/anthurium.jpg";
import zz from "@/assets/zz.jpg";
import bougainvillea from "@/assets/bougainvillea.jpg";
import jade from "@/assets/jade.jpg";
import herbSeeds from "@/assets/herb-seeds.jpg";
import CottageFlowerSeedMix from "@/assets/CottageFlowerSeedMix.webp";
import OrganicVegetableSeedKit from "@/assets/OrganicVegetableSeedKit.jpg";
import DutchTulipBulbs from "@/assets/DutchTulipBulbs.jpg";
import gladiolusBulbs from "@/assets/gladiolusBulbs.jpg";
import hyacinthBulbs from "@/assets/hyacinthBulbs.jpg";
import crocusBulbs from "@/assets/crocusBulbs.jpg";
import amaryllisBulbs from "@/assets/amaryllisBulbs.jpg";
import freesiaBulbs from "@/assets/freesiaBulbs.jpg";
import ranunculusBulbs from "@/assets/ranunculusBulbs.jpg";
import dahliaBulbs from "@/assets/dahlia-bulbs.jpg";
import cactus from "@/assets/cactus.jpg";
import AlgerianIvy from "@/assets/AlgerianIvy.webp";
import moneyPlant from "@/assets/moneyPlant.webp";
import purplePassionPlant from "@/assets/purplePassionPlant.jpg";
import hibiscus from "@/assets/hibiscus.jpg";
import ixora from "@/assets/ixora.jpg";
import frangipani from "@/assets/frangipani.jpg";
import birdOfParadise from "@/assets/birdOfParadise.jpg";
import jasmine from "@/assets/jasmine.jpg";
import croton from "@/assets/croton.jpg";
import hydrangea from "@/assets/hydrangea.jpg";
import azalea from "@/assets/azalea.jpg";
import camellia from "@/assets/camellia.jpg";
import geranium from "@/assets/geranium.jpg";
import gardenia from "@/assets/gardenia.jpg";
import zebraHaworthia from "@/assets/zebraHaworthia.jpg";
import stringOfPearl from "@/assets/stringOfPearl.jpg";
import burrosTail from "@/assets/burrosTail.jpg";
import pandaPlant from "@/assets/pandaPlant.jpg";
import hensAndChicks from "@/assets/hensAndChicks.jpg";
import moonstone from "@/assets/moonstone.jpg";
import chilliSeeds from "@/assets/chilliSeeds.jpg";
import tomatoSeeds from "@/assets/tomatoSeeds.jpg";
import pollinatorSeeds from "@/assets/pollinatorSeeds.jpg";
import OrientalLilyBulbs from "@/assets/OrientalLilyBulbs.jpg";
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
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    price: 1299,
    description:
      "Sculptural split leaves bring an effortless tropical statement to any sunlit corner.",
    image: monstera,
    category: "Indoor",
  },
  {
    id: "purple-passion-plant",
    name: "Purple Passion Plant",
    price: 849,
    description:
      "A stunning indoor plant with velvety green leaves covered in vibrant purple hairs, adding a bold splash of color and unique texture to any space.",
    image: purplePassionPlant,
    category: "Indoor",
  },
  {
    id: "snake",
    name: "Snake Plant",
    price: 400,
    description: "Architectural, low-maintenance and a quiet air purifier — thrives on neglect.",
    image: snake,
    category: "Indoor",
  },
  {
    id: "fiddle",
    name: "Fiddle Leaf Fig",
    price: 700,
    description: "The interior designer's favourite — bold violin-shaped leaves and quiet drama.",
    image: fiddle,
    category: "Indoor",
  },
  {
    id: "zz",
    name: "ZZ Plant",
    price: 400,
    description: "Glossy waxy leaves that shrug off low light and forgetful watering routines.",
    image: zz,
    category: "Indoor",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 700,
    description: "Glossy foliage and pure white spathes — serene, shade-loving, evergreen.",
    image: peaceLily,
    category: "Indoor",
  },
  {
    id: "pink-christmas-cactus",
    name: "Pink Christmas Cactus",
    price: 700,
    description:
      "A charming indoor succulent with vibrant pink blooms that brighten your home during the festive season and beyond.",
    image: cactus,
    category: "Indoor",
  },
  {
    id: "algerian-ivy",
    name: "Algerian Ivy",
    price: 400,
    description:
      "A fast-growing trailing plant with lush evergreen foliage, perfect for hanging baskets, shelves, and adding a touch of natural elegance indoors.",
    image: AlgerianIvy,
    category: "Indoor",
  },
  {
    id: "money-plant",
    name: "Money Plant",
    price: 250,
    description:
      "Graceful trailing vines and lush green foliage make the Money Plant a symbol of prosperity, bringing freshness, positivity, and effortless elegance to any indoor space.",
    image: moneyPlant,
    category: "Indoor",
  },
  // Outdoor
  {
    id: "areca",
    name: "Areca Palm",
    price: 1499,
    description: "Feather-light fronds that soften patios and balconies with resort-style calm.",
    image: areca,
    category: "Outdoor",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    price: 549,
    description: "Sun-loving climber drenched in magenta blooms — pure tropical drama.",
    image: bougainvillea,
    category: "Outdoor",
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    price: 799,
    description:
      "Known for its large, vibrant blooms, the Hibiscus brings tropical elegance and year-round color to gardens, patios, and outdoor landscapes.",
    image: hibiscus,
    category: "Outdoor",
  },
  {
    id: "ixora",
    name: "Ixora",
    price: 699,
    description:
      "A compact evergreen shrub with clusters of colorful flowers, perfect for creating lively borders and vibrant garden spaces.",
    image: ixora,
    category: "Outdoor",
  },
  {
    id: "frangipani",
    name: "Frangipani",
    price: 700,
    description:
      "Famous for its sweetly scented blossoms, the Frangipani adds tropical beauty and timeless elegance to any outdoor setting.",
    image: frangipani,
    category: "Outdoor",
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    price: 1799,
    description:
      "With striking foliage and exotic flowers, this bold statement plant transforms gardens into a tropical paradise.",
    image: birdOfParadise,
    category: "Outdoor",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    price: 599,
    description:
      "Delicate white flowers and a soothing fragrance make Jasmine a timeless favorite for gardens, balconies, and outdoor pathways.",
    image: jasmine,
    category: "Outdoor",
  },
  {
    id: "croton",
    name: "Croton",
    price: 500,
    description:
      "Featuring vibrant multicolored foliage, the Croton brings bold texture, warmth, and year-round visual interest to outdoor spaces.",
    image: croton,
    category: "Outdoor",
  },

  // Flowering
  {
    id: "orchid",
    name: "Phalaenopsis Orchid",
    price: 999,
    description: "Long-lasting blooms in delicate pink — a refined gift for thoughtful spaces.",
    image: phalaenopsisOrchid,
    category: "Flowering",
  },
  {
    id: "anthurium",
    name: "Red Anthurium",
    price: 700,
    description: "Lacquered heart-shaped blooms in deep red — a sculptural statement bloom.",
    image: anthurium,
    category: "Flowering",
  },
  {
    id: "premium-orchid",
    name: "Premium Orchid Trio",
    price: 999,
    description: "Three rare orchid varieties in a handcrafted ceramic planter — collector grade.",
    image: premiumOrchidTrio,
    category: "Flowering",
  },
  {
    id: "hydrangea",
    name: "Hydrangea",
    price: 900,
    description:
      "Large cloud-like blooms in stunning shades create an elegant garden centerpiece with timeless beauty and charm.",
    image: hydrangea,
    category: "Flowering",
  },
  {
    id: "camellia",
    name: "Camellia",
    price: 1399,
    description:
      "Luxurious rose-like blossoms and glossy evergreen foliage bring sophistication to patios and landscaped gardens.",
    image: camellia,
    category: "Flowering",
  },
  {
    id: "azalea",
    name: "Azalea",
    price: 999,
    description:
      "A vibrant flowering shrub covered in spectacular seasonal blooms that instantly brightens outdoor spaces.",
    image: azalea,
    category: "Flowering",
  },
  {
    id: "geranium",
    name: "Geranium",
    price: 799,
    description:
      "Bright clusters of colorful flowers with lush foliage make Geranium a cheerful addition to balconies and gardens.",
    image: geranium,
    category: "Flowering",
  },
  {
    id: "gardenia",
    name: "Gardenia",
    price: 1199,
    description:
      "Prized for its creamy white blossoms and captivating fragrance, Gardenia adds elegance and freshness to every garden.",
    image: gardenia,
    category: "Flowering",
  },

  // Succulents
  {
    id: "echeveria",
    name: "Echeveria Cluster",
    price: 549,
    description: "Rosette succulents in a stone planter — sun-loving, sculptural and easy.",
    image: succulent,
    category: "Succulents",
  },
  {
    id: "jade",
    name: "Jade Plant",
    price: 399,
    description: "A timeless good-luck succulent with plump emerald leaves and woody stems.",
    image: jade,
    category: "Succulents",
  },
  {
    id: "succulent-trio",
    name: "Designer Succulent Trio",
    price: 499,
    description: "Three handpicked rosettes in matte ceramic — a desk-top moodboard in green.",
    image: succulent,
    category: "Succulents",
  },
  {
    id: "zebra-haworthia",
    name: "Zebra Haworthia",
    price: 499,
    description:
      "Bold white-striped foliage and a compact form make this low-maintenance succulent a stylish choice for modern interiors.",
    image: zebraHaworthia,
    category: "Succulents",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    price: 700,
    description:
      "Graceful cascading vines of bead-like leaves bring unique texture and elegance to hanging planters and shelves.",
    image: stringOfPearl,
    category: "Succulents",
  },
  {
    id: "burros-tail",
    name: "Burro's Tail",
    price: 699,
    description:
      "Trailing stems covered with plump blue-green leaves create a stunning waterfall effect in hanging pots.",
    image: burrosTail,
    category: "Succulents",
  },
  {
    id: "panda-plant",
    name: "Panda Plant",
    price: 649,
    description:
      "Soft, velvety leaves with chocolate-brown edges give this charming succulent a warm and distinctive appearance.",
    image: pandaPlant,
    category: "Succulents",
  },
  {
    id: "hens-and-chicks",
    name: "Hens & Chicks",
    price: 549,
    description:
      "Beautiful rosettes that multiply naturally, creating an eye-catching display in rock gardens and decorative planters.",
    image: hensAndChicks,
    category: "Succulents",
  },
  {
    id: "moonstone",
    name: "Moonstone Succulent",
    price: 749,
    description:
      "Rounded pastel leaves with a soft powdery finish bring a luxurious and contemporary touch to any succulent collection.",
    image: moonstone,
    category: "Succulents",
  },

  // Seeds
  {
    id: "herb-seeds",
    name: "Heirloom Herb Seed Set",
    price: 149,
    description: "Basil, coriander and mint seed packets — kitchen-garden essentials.",
    image: herbSeeds,
    category: "Seeds",
  },
  {
    id: "flower-seeds",
    name: "Cottage Flower Seed Mix",
    price: 299,
    description: "A curated mix of marigold, zinnia and cosmos — months of cut-flower colour.",
    image: CottageFlowerSeedMix,
    category: "Seeds",
  },
  {
    id: "veg-seeds",
    name: "Organic Vegetable Seed Kit",
    price: 299,
    description: "Twelve heirloom vegetable varieties for a complete seasonal kitchen garden.",
    image: OrganicVegetableSeedKit,
    category: "Seeds",
  },
  {
    id: "chilli-seeds",
    name: "Premium Chilli Seed Pack",
    price: 199,
    description:
      "High-germination chilli seeds that produce vibrant, flavorful peppers for home gardens and kitchen harvests.",
    image: chilliSeeds,
    category: "Seeds",
  },
  {
    id: "tomato-seeds",
    name: "Cherry Tomato Seed Kit",
    price: 199,
    description:
      "Grow sweet, juicy cherry tomatoes with an easy-to-grow seed kit perfect for pots, balconies, and backyard gardens.",
    image: tomatoSeeds,
    category: "Seeds",
  },
  {
    id: "pollinator-seeds",
    name: "Pollinator Garden Seed Mix",
    price: 300,
    description:
      "A colorful blend of nectar-rich flowers designed to attract bees, butterflies, and other beneficial pollinators.",
    image: pollinatorSeeds,
    category: "Seeds",
  },

  // Bulbs
  {
    id: "tulip-bulbs",
    name: "Dutch Tulip Bulbs (10 pcs)",
    price: 299,
    description: "Premium Holland-grown tulip bulbs in mixed pastel shades — spring ready.",
    image: DutchTulipBulbs,
    category: "Bulbs",
  },
  {
    id: "dahlia-bulbs",
    name: "Dahlia Bulb Collection",
    price: 299,
    description: "Six dinnerplate dahlia tubers in painterly tones — show-stopping summer blooms.",
    image: dahliaBulbs,
    category: "Bulbs",
  },
  {
    id: "lily-bulbs",
    name: "Oriental Lily Bulbs",
    price: 700,
    description: "Fragrant oriental lily bulbs — towering stems and luxurious blossoms.",
    image: OrientalLilyBulbs,
    category: "Bulbs",
  },
  {
    id: "gladiolus-bulbs",
    name: "Gladiolus Bulb Collection",
    price: 399,
    description:
      "Premium gladiolus bulbs that produce tall, elegant flower spikes in vibrant summer shades.",
    image: gladiolusBulbs,
    category: "Bulbs",
  },
  {
    id: "ranunculus-bulbs",
    name: "Ranunculus Bulbs",
    price: 249,
    description:
      "Layers of delicate, rose-like petals bloom into vibrant flowers, perfect for borders and bouquets.",
    image: ranunculusBulbs,
    category: "Bulbs",
  },
  {
    id: "freesia-bulbs",
    name: "Fragrant Freesia Bulbs",
    price: 499,
    description:
      "Sweetly scented blooms in cheerful colors bring elegance and delightful fragrance to every garden.",
    image: freesiaBulbs,
    category: "Bulbs",
  },
  {
    id: "hyacinth-bulbs",
    name: "Hyacinth Bulbs",
    price: 349,
    description:
      "Dense clusters of richly scented flowers create a stunning spring display in pots and flower beds.",
    image: hyacinthBulbs,
    category: "Bulbs",
  },
  {
    id: "crocus-bulbs",
    name: "Crocus Bulbs",
    price: 249,
    description:
      "One of the earliest spring bloomers, producing charming cup-shaped flowers in vivid seasonal colors.",
    image: crocusBulbs,
    category: "Bulbs",
  },
  {
    id: "amaryllis-bulbs",
    name: "Amaryllis Bulbs",
    price: 299,
    description:
      "Large trumpet-shaped blooms on sturdy stems make Amaryllis a spectacular centerpiece for home gardens.",
    image: amaryllisBulbs,
    category: "Bulbs",
  },
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "₹0 – ₹100", min: 0, max: 100 },
  { label: "₹100 – ₹500", min: 100, max: 500 },
  { label: "₹500 – ₹1000", min: 500, max: 1000 },
  { label: "Above ₹1000", min: 1000, max: Infinity },
] as const;

export const WHATSAPP_NUMBER = "917708328839"; // +91 77083 28839
export const PHONE_DISPLAY = "+91 77083 28839";

export function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function waLink(plantName?: string) {
  const text = plantName
    ? `Hi, I'm interested in purchasing ${plantName}. Please share more details.`
    : `Hi Leaf & Bloom, I'd love to know more about your plants.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

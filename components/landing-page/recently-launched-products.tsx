import { Calendar, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "./product-card";
import EmptyState from "../common/empty-state";

type Product = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
};

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts: Product[] = [
    // {
    //   id: 1,
    //   name: "ParityKit",
    //   description: "Price parity for global SaaS products",
    //   tags: ["Saas", "Pricing", "Global"],
    //   votes: 615,
    //   isFeatured: true,
    // },
    // {
    //   id: 2,
    //   name: "Developer to Leader",
    //   description: "A course on Engineering Leadership",
    //   tags: ["Course", "leadership"],
    //   votes: 503,
    //   isFeatured: true,
    // },
    // {
    //   id: 3,
    //   name: "ProofyBubble",
    //   description: "Social proof notifications that convert visitors",
    //   tags: ["Marketing", "SaaS", "Conversion"],
    //   votes: 531,
    //   isFeatured: true,
    // },
    // {
    //   id: 4,
    //   name: "Modern Full Stack Next.js course",
    //   description: "Learn to build modern full stack applications with Next.js",
    //   tags: ["Next.js", "Tailwind CSS", "Full Stack"],
    //   votes: 124,
    //   isFeatured: true,
    // },
  ];
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Dicover the latest products from our community"
        />
        {recentlyLaunchedProducts.length ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week.Check back soon for new launches."
            icon={Calendar}
          />
        )}
      </div>
    </section>
  );
}

import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../landing-page/product-card";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "ParityKit",
      description: "Price parity for global SaaS products",
      tags: ["Saas", "Pricing", "Global"],
      votes: 615,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Developer to Leader",
      description: "A course on Engineering Leadership",
      tags: ["Course", "leadership"],
      votes: 503,
      isFeatured: true,
    },
    {
      id: 3,
      name: "ProofyBubble",
      description: "Social proof notifications that convert visitors",
      tags: ["Marketing", "SaaS", "Conversion"],
      votes: 531,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Modern Full Stack Next.js course",
      description: "Learn to build modern full stack applications with Next.js",
      tags: ["Next.js", "Tailwind CSS", "Full Stack"],
      votes: 124,
      isFeatured: true,
    },
  ];

  return (
    <section className="bg-muted/20 py-20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from out community this week"
          />
          <Button
            asChild
            variant={"outline"}
            className="hidden  shadow-lg sm:flex hover:bg-secondary/80 hover:text-secondary-foreground"
          >
            <Link href="/explore">
              View All
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

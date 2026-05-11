import FeaturedProducts from "@/components/products/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      {/* As recently launched productws are dynamically rendering due to await
      connection we are adding suspense to handle error */}
      <Suspense
        fallback={
          <div className="wrapper flex items-center gap-2">
            Loading Recently Launched Products...{" "}
            <LoaderIcon className="size-4 animate-spin" />
          </div>
        }
      >
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}

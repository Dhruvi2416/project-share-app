import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import StatsCard from "@/components/landing-page/stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant={"outline"}
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opactiy-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-muted foreground ">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  { icon: RocketIcon, value: "2.5K+", label: "Projects shared" },
  { icon: UsersIcon, value: "10K+", label: "Active creators", hasBorder: true },
  { icon: EyeIcon, value: "50K+", label: "Monthly visitors" },
];
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper flex flex-col lg:py-24 py-12 items-center justify-center text-center">
        <LiveBadge />
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 max-w-5xl font-bold">
          Share What You&apos;ve Built,<br></br>Discover What&apos;s Launching
        </h1>
        <p className="text-lg sm:text-xl text-muted foreground mb-10 max-w-2xl leading-relaxed">
          A community platform for creators to showcase their apps, AI tools,
          SaaS products, and creative projects. Authentic launches, real
          builders, genuine feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg" className="text-base px-8 shadow-lg">
            <Link href="/submit">
              <SparklesIcon className="size-5" />
              Share your project
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant={"secondary"}
            className="text-base px-8 shadow-lg"
          >
            <Link href="/explore">
              Explore Projects
              <ArrowRightIcon className="zixe-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
          {statsData.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

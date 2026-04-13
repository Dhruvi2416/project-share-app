import { CompassIcon, HomeIcon, SparklesIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Show,
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
        <SparklesIcon className=" size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary ">Built</span>
        This
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky z-50 top-0 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex items-center h-16 justify-between">
          <Logo />
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <HomeIcon className="size-4" />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              <span className="text-sm">Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal" />
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
              </div>
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/fwlogo.png"
            alt="FriendlyWeb Company Logo"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="font-bold text-xl">FriendlyWeb</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Navigation />
          <Link href="/order">
            <Button className="hidden md:flex">Order Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

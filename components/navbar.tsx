"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link
          href="/"
          className="font-bold text-2xl text-green-600"
        >
          TechVision
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Button className="bg-green-600 hover:bg-green-700">
          Book Demo
        </Button>
      </div>
    </header>
  );
}
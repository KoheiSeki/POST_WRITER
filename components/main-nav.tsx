"use client";

import { NavItem } from "@/types";
import { ReactNode, useState } from "react";
import Link from "next/link";
import MobileNav from "./mobile-nav";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <div className="flex gap-6 items-center md:gap-8">
      <div className="flex items-center gap-2">
        <Link href={"/"} className="hidden md:flex">
          <span className="font-bold hidden pl-4 sm:inline-block">
            Post Writer
          </span>
        </Link>
      </div>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <span>メニュー</span>
      </button>
      {showMobileNav && <MobileNav items={items} />}
    </div>
  );
}

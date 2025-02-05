"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
   NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
 } from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  type NavigationItem = {
    title: string;
    href: string; // Made href required since we don't have nested items
  };

  const navigationItems: NavigationItem[] = [
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Alumni",
      href: "/alumni",
    },
    {
      title: "Workshop",
      href: "/workshop",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Our Team",
      href: "/team",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex z-40 fixed top-0 left-0 justify-center rounded-xl border-b-4 items-center w-full">
      <header className="w-3/4 text-white border-b border-slate-800">
        <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo.png" alt="IEEE Logo" width={50} height={50} priority />
            </Link>
          </div>
          <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-start gap-4 flex-row">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex justify-end w-full gap-4">
            <Button variant="default">Join Us</Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            {isOpen && (
              <div className="absolute top-20 border-t border-slate-800 flex flex-col w-full right-0 bg-slate-900 shadow-lg py-4 container gap-8">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link href={item.href} className="flex justify-between items-center">
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export { Header1 };

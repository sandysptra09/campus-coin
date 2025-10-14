"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import CampusCoinLogo from "../logo/campus-coin-logo";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "@/app/providers";
import NavbarAvatar from "./navbar-avatar";

export default function CampusCoinNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Event",
      url: "/event",
    },
    {
      title: "Redeem Store",
      url: "/redeem",
    },
    {
      title: "Knowledge Sharing",
      url: "/knowledge-sharing",
    },
  ];

  const hiddenRoutes = ["/login", "/register"];

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  const { isLoggedIn } = useSession();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden cursor-pointer"
        />
        <NavbarBrand>
          <CampusCoinLogo size={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname == "/"}>
          <Link color={pathname == "/" ? "primary" : "foreground"} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/about"}>
          <Link
            color={pathname == "/about" ? "primary" : "foreground"}
            aria-current="page"
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/event"}>
          <Link
            color={pathname == "/event" ? "primary" : "foreground"}
            href="/event"
          >
            Event
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/redeem"}>
          <Link
            color={pathname == "/redeem" ? "primary" : "foreground"}
            href="/redeem"
          >
            Redeem Store
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/knowledge-sharing"'}>
          <Link
            color={pathname == "/knowledge-sharing" ? "primary" : "foreground"}
            href="/knowledge-sharing"
          >
            Knowledge Sharing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn ? (
          <NavbarAvatar />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button
                as={Link}
                color="primary"
                href="/register"
                variant="ghost"
              >
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/login">
                Login
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.url}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

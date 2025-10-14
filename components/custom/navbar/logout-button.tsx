"use client";

import { useSession } from "@/app/providers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const { logout } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    logout();

    router.push("/");
  };

  return (
    <Link
      href="/login"
      color="secondary"
      className="text-base"
      onClick={handleLogout}
    >
      Logout
    </Link>
  );
}

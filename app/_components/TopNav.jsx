"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "대시보드" },
  { href: "/customers", label: "고객" },
  { href: "/bookings", label: "계약/대관" },
  { href: "/calendar", label: "캘린더" },
  { href: "/trash", label: "보관함" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      {NAV.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link key={item.href} href={item.href} className={active ? "active" : ""}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

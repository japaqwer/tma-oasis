"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChartLine, FaUsers, FaHistory } from "react-icons/fa";
import s from "./Navbar.module.scss";

const items = [
  { key: "home", icon: FaHome, label: "Главная", href: "/" },
  { key: "levels", icon: FaChartLine, label: "Уровни", href: "/levels" },
  { key: "history", icon: FaHistory, label: "История", href: "/history" },
  { key: "partners", icon: FaUsers, label: "Партнеры", href: "/partners" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={s.navbar}>
      {items.map(({ key, icon: Icon, label, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            href={href}
            key={key}
            className={`${s.item} ${isActive ? s.active : ""}`}
          >
            <Icon className={s.icon} />
            <span className={s.label}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const pathname = usePathname();

  return [
    ["Features", "/#features"],
    ["Pricing", "/#pricing"],
    ["FAQs", "/#faq"],
    ["Blog", "/blog"],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`relative px-3 py-2 -mx-3 -my-2 text-sm rounded-lg transition-colors delay-150 ${
        href === "/blog" && pathname.startsWith("/blog")
          ? "bg-gray-100 text-foreground"
          : "text-secondary-foreground hover:text-foreground hover:delay-0"
      }`}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        setHoveredIndex(index);
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null);
        }, 200);
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 bg-gray-100 rounded-lg"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ));
}

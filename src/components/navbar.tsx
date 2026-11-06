"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/components/experience-provider";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Explore" },
  { href: "/favorites", label: "Saved" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <>
      <div className="announcement">
        A little further, a little deeper <span>WANDER WELL</span>
      </div>
      <header className="site-header">
        <div className="nav-shell">
          <Link className="brand" href="/" aria-label="Wanderlust Labs home">
            <span className="brand-mark" aria-hidden="true">W</span>
            <span className="brand-copy">
              <span className="brand-name">Wanderlust</span>
              <span className="brand-subtitle">Labs / Field notes</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {links.map(({ href, label }) => {
              const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  className="nav-link"
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="nav-actions">
            <Link className="nav-profile" href="/profile">
              <span className="nav-heart" aria-hidden="true">♡</span>
              <span>Profile</span>
              {favoriteIds.length > 0 && <span>{favoriteIds.length}</span>}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ExperienceProvider } from "@/components/experience-provider";
import Navbar from "@/components/navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ExperienceProvider>
      <Navbar />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <p className="eyebrow">A field guide to feeling elsewhere</p>
              <p className="footer-tagline">Go where the good stories find you.</p>
            </div>
            <p className="footer-note">Curated with care. Collected by you.</p>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Wanderlust Labs</p>
            <p><Link href="/experiences">Find your next somewhere</Link></p>
          </div>
        </div>
      </footer>
    </ExperienceProvider>
  );
}
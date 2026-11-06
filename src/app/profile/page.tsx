"use client";

import Link from "next/link";
import { useFavorites } from "@/components/experience-provider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <section className="page-container simple-page">
      <div className="simple-page__intro">
        <p className="eyebrow">A traveler in good company</p>
        <h1 className="display-title">Your profile.</h1>
        <p className="section-copy">A little corner for your next big somewhere.</p>
      </div>

      <div className="profile-layout">
        <section className="profile-card" aria-label="Traveler profile">
          <div className="profile-avatar" aria-hidden="true">A</div>
          <h2 className="profile-name">Alex Morgan</h2>
          <p className="profile-caption">Curious traveler · Member since 2024</p>
          <div className="profile-stat">
            <span>Saved experiences</span>
            <strong>{favoriteIds.length}</strong>
          </div>
        </section>

        <section className="profile-note">
          <p className="eyebrow">The next chapter</p>
          <h2>Go a little further.</h2>
          <p>
            The best plans leave a little room for surprise. Keep collecting
            places, people, and small moments you want to come back to.
          </p>
          <div className="profile-links">
            <Link className="button button--dark" href="/experiences">Explore the collection</Link>
            <Link className="button button--outline" href="/favorites">View saved experiences</Link>
          </div>
        </section>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import ExperienceGrid from "@/components/experience-grid";
import { useFavorites } from "@/components/experience-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const savedExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <section className="page-container simple-page">
      <div className="simple-page__intro">
        <p className="eyebrow">Your little black book</p>
        <h1 className="display-title">Places to keep close.</h1>
        <p className="section-copy">
          {savedExperiences.length > 0
            ? `${savedExperiences.length} experience${savedExperiences.length === 1 ? "" : "s"} saved for another day.`
            : "Keep the experiences you love in one easy-to-find place."}
        </p>
      </div>
      {savedExperiences.length > 0 ? (
        <ExperienceGrid experiences={savedExperiences} />
      ) : (
        <div className="empty-state">
          <div>
            <p className="eyebrow">Your collection starts here</p>
            <h2>No saved experiences yet</h2>
            <p>Tap the heart on an experience to keep it close for later.</p>
            <Link className="button button--dark" href="/experiences">Explore experiences</Link>
          </div>
        </div>
      )}
    </section>
  );
}
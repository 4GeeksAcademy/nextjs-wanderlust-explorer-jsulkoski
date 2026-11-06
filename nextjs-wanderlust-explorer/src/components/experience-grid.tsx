"use client";

import type { Experience } from "@/data/experiences";
import { useFavorites } from "@/components/experience-provider";
import ExperienceCard from "@/components/experience-card";

type ExperienceGridProps = {
  experiences: Experience[];
  emptyTitle?: string;
  emptyMessage?: string;
};

export default function ExperienceGrid({
  experiences,
  emptyTitle = "No experiences found",
  emptyMessage = "Try adjusting your search or filters to find another way in.",
}: ExperienceGridProps) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (experiences.length === 0) {
    return (
      <div className="empty-state">
        <div>
          <p className="eyebrow">Nothing here just yet</p>
          <h2>{emptyTitle}</h2>
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-grid">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
"use client";

import { useMemo } from "react";
import type { Experience } from "@/data/experiences";

type ExperienceFilters = {
  search: string;
  category: string;
  destination: string;
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperienceFilters(
  items: Experience[],
  { search, category, destination }: ExperienceFilters,
) {
  return useMemo(() => {
    const titlePattern = search.trim()
      ? new RegExp(escapeRegex(search.trim()), "i")
      : null;

    return items.filter((experience) => {
      const matchesTitle = !titlePattern || titlePattern.test(experience.title);
      const matchesCategory = !category || experience.category === category;
      const matchesDestination = !destination ||
        experience.destination.toLowerCase().includes(destination.toLowerCase());

      return matchesTitle && matchesCategory && matchesDestination;
    });
  }, [items, search, category, destination]);
}
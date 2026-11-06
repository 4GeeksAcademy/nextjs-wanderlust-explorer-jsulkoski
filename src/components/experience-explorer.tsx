"use client";

import FilterBar from "@/components/filter-bar";
import ExperienceGrid from "@/components/experience-grid";
import SearchBar from "@/components/search-bar";
import { EXPERIENCE_CATEGORIES, experiences } from "@/data/experiences";
import { useExplorerQuery } from "@/hooks/use-explorer-query";
import { useExperienceFilters } from "@/hooks/use-experience-filters";

const destinationOptions = Array.from(
  new Set(
    experiences.flatMap((experience) => {
      const [city, country] = experience.destination.split(", ");
      return [city, country];
    }),
  ),
).sort((left, right) => left.localeCompare(right));

function normalizedCategory(value: string | null) {
  return EXPERIENCE_CATEGORIES.find(
    (category) => category.toLowerCase() === value?.toLowerCase(),
  ) ?? "";
}

export default function ExperienceExplorer() {
  const {
    search,
    category: categoryParam,
    destination: destinationParam,
    updateQuery,
    clearFilters,
  } = useExplorerQuery();
  const category = normalizedCategory(categoryParam);
  const destination = destinationOptions.find(
    (option) => option.toLowerCase() === destinationParam.toLowerCase(),
  ) ?? "";
  const filteredExperiences = useExperienceFilters(experiences, {
    search,
    category,
    destination: destinationParam,
  });
  const hasFilters = Boolean(search || categoryParam || destinationParam);

  return (
    <section className="page-container explorer-page">
      <div className="explorer-heading">
        <div>
          <p className="eyebrow">The collection / Issue No. 01</p>
          <h1 className="display-title">Find your somewhere.</h1>
          <p className="section-copy">
            One hundred ways to get closer to a place. Start anywhere.
          </p>
        </div>
        <p className="explorer-heading__count">{filteredExperiences.length} experiences to explore</p>
      </div>

      <div className="explorer-toolbar">
        <SearchBar
          value={search}
          onChange={(value) => updateQuery("search", value)}
        />
        <FilterBar
          category={category}
          destination={destination}
          categories={EXPERIENCE_CATEGORIES}
          destinations={destinationOptions}
          onCategoryChange={(value) => updateQuery("category", value)}
          onDestinationChange={(value) => updateQuery("destination", value)}
          onClear={clearFilters}
          hasFilters={hasFilters}
        />
      </div>

      <div className="results-bar" aria-live="polite">
        <span>{filteredExperiences.length} {filteredExperiences.length === 1 ? "experience" : "experiences"}</span>
        <span>Thoughtfully found, never endlessly scrolled.</span>
      </div>

      <ExperienceGrid
        experiences={filteredExperiences}
        emptyTitle="No results found"
        emptyMessage="Try another title, category, or destination. Your next good story is still out there."
      />
    </section>
  );
}
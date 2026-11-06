"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { useFavorites } from "@/components/experience-provider";

export default function ExperienceDetail({ experience }: { experience: Experience }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(experience.id);
  const country = experience.destination.split(", ")[1] ?? "";

  useEffect(() => {
    document.title = `${experience.title} | Wanderlust Labs`;

    return () => {
      document.title = "Wanderlust Labs | Find your somewhere";
    };
  }, [experience.title]);

  return (
    <section className="page-container detail-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/experiences">Explore</Link><span aria-hidden="true">/</span>
        <span>{experience.category}</span>
      </nav>

      <div className="detail-layout">
        <div className="detail-image-wrap">
          <Image
            className="detail-image"
            src={experience.imageUrl}
            alt={experience.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
          />
        </div>
        <article className="detail-copy">
          <p className="detail-location">{experience.destination} · {experience.category}</p>
          <h1 className="detail-title">{experience.title}</h1>
          <p className="detail-rating">★ {experience.rating.toFixed(1)} <span>Guest favorite</span></p>
          <p className="detail-description">{experience.description}</p>

          <div className="detail-facts">
            <div className="detail-fact"><span>Duration</span><strong>{experience.duration}</strong></div>
            <div className="detail-fact"><span>Group size</span><strong>{experience.groupSize}</strong></div>
          </div>

          <p className="eyebrow">A few good details</p>
          <ul className="detail-highlights">
            {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>

          <div className="detail-actions">
            <p className="detail-price"><strong>${experience.price}</strong> per guest</p>
            <button
              className="button button--outline"
              type="button"
              aria-pressed={isFavorite}
              onClick={() => toggleFavorite(experience.id)}
            >
              <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
              {isFavorite ? "Saved" : "Save for later"}
            </button>
            <Link
              className="button button--dark"
              href={`/experiences?destination=${encodeURIComponent(country)}`}
            >
              More in {country} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
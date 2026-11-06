import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experiences";

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="experience-card fade-in">
      <div className="experience-card__visual">
        <Link href={`/experiences/${experience.id}`} aria-label={`View ${experience.title}`}>
          <Image
            className="experience-card__image"
            src={experience.imageUrl}
            alt={experience.imageAlt}
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 1050px) 50vw, 33vw"
          />
        </Link>
        <span className="experience-card__category">{experience.category}</span>
        <button
          className="favorite-toggle"
          type="button"
          aria-label={isFavorite ? `Remove ${experience.title} from favorites` : `Add ${experience.title} to favorites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(experience.id)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="experience-card__body">
        <p className="experience-card__location">{experience.destination}</p>
        <div className="experience-card__title-row">
          <h2 className="experience-card__title">
            <Link href={`/experiences/${experience.id}`}>{experience.title}</Link>
          </h2>
          <span className="experience-card__rating" aria-label={`Rated ${experience.rating} out of 5`}>
            ★ {experience.rating.toFixed(1)}
          </span>
        </div>
        <div className="experience-card__meta">
          <span>{experience.duration} · {experience.groupSize}</span>
          <span className="experience-card__price"><strong>${experience.price}</strong> / guest</span>
        </div>
      </div>
    </article>
  );
}
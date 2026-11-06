import Image from "next/image";
import Link from "next/link";
import ExperienceGrid from "@/components/experience-grid";
import { EXPERIENCE_CATEGORIES, experiences } from "@/data/experiences";

const heroImage =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="home-hero__image"
          src={heroImage}
          alt="A winding trail through a sunlit mountain landscape"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__content fade-in">
          <p className="eyebrow">A field guide to the feeling of elsewhere</p>
          <h1 className="home-hero__title">
            Take the scenic <em>way.</em>
          </h1>
          <p className="home-hero__copy">
            Small-group experiences, thoughtful local hosts, and the kind of
            moments that make a place stay with you.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--lime" href="/experiences">
              Explore experiences <span aria-hidden="true">↗</span>
            </Link>
            <Link className="hero-text-link" href="/experiences?category=Nature">
              Find a little more nature <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <p className="hero-note">Made for the curious, wherever they land</p>
      </section>

      <nav className="category-rail" aria-label="Explore by category">
        <span className="category-rail__label">Find your kind of somewhere</span>
        <div className="category-rail__items">
          {EXPERIENCE_CATEGORIES.map((category) => (
            <Link
              className="category-pill"
              href={`/experiences?category=${encodeURIComponent(category)}`}
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>

      <section className="page-container home-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">A good place to begin</p>
            <h2 className="section-title">Stories worth the detour.</h2>
            <p className="section-copy">
              A few local favorites to put a pin in, then make your own.
            </p>
          </div>
          <Link className="text-link" href="/experiences">
            See all experiences <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ExperienceGrid experiences={experiences.slice(9, 12)} />
      </section>

      <section className="manifesto-band">
        <h2 className="manifesto-band__title">
          Less checklist.<br />More feeling.
        </h2>
        <div>
          <p className="manifesto-band__copy">
            The best travel stories rarely start at the obvious stop. Wanderlust
            Labs brings together the people, flavors, and places that make a
            destination feel personal.
          </p>
          <Link className="button button--dark" href="/experiences">
            Find your somewhere <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

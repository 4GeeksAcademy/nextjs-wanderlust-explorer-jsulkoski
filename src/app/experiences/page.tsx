import { Suspense } from "react";
import ExperienceExplorer from "@/components/experience-explorer";

function ExplorerFallback() {
  return (
    <section className="page-container explorer-page" aria-busy="true">
      <p className="eyebrow">The collection</p>
      <h1 className="display-title">Find your somewhere.</h1>
      <p className="section-copy">Gathering a few good ideas...</p>
    </section>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<ExplorerFallback />}>
      <ExperienceExplorer />
    </Suspense>
  );
}
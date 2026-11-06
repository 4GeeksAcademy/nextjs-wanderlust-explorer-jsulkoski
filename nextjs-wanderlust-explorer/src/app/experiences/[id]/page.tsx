import { notFound } from "next/navigation";
import ExperienceDetail from "@/components/experience-detail";
import { experiences } from "@/data/experiences";

export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}
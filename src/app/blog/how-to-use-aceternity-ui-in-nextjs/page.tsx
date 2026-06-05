import { Suspense } from "react";
import type { Metadata } from "next";
import Content from "./content.mdx";
import { meta } from "./meta";

export function generateMetadata(): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.image],
      type: "article",
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}

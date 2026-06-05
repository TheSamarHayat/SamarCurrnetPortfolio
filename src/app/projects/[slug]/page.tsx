import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";

import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";

import { redirect } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Samar Hayat",
      description:
        "Samar Hayat is a Frontend Developer with over 1 year of professional experience, currently at GlobeWyze Inc. and previously at Xecutors and Zitsol. Explore his projects showcasing high-performance web applications built with React.js, Next.js, TypeScript, and JavaScript.",
    };
  }
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}

export default function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

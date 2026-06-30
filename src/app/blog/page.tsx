import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";

import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Samar Hayat",
  description:
    "Technical notes and tutorials by Samar Hayat, Frontend Developer specializing in React, Next.js, and TypeScript.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <Container>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  );
}

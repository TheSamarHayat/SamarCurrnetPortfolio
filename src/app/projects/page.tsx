import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Samar Hayat",
  description:
    "Samar Hayat is a Frontend Developer with 2.5+ years of professional experience, currently at GlobeWyze Inc. and previously at Xecutors, Citadel Solutions, and ZITSOL. Projects built with React, Next.js, TypeScript, and JavaScript.",
};

export default function Projects() {
  return (
    <Container>
      {/* <span className="text-4xl">⚡</span> */}
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}

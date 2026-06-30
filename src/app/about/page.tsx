import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Samar Hayat",
  description:
    "Samar Hayat, Frontend Developer with 2.5+ years of professional experience in Islamabad, Pakistan. Currently at GlobeWyze Inc.; previously at Xecutors, Citadel Solutions, and ZITSOL. Builds responsive web apps with React, Next.js, and TypeScript.",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}

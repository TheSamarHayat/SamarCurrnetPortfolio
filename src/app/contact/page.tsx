import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Samar Hayat",
  description:
    "Contact Samar Hayat, Frontend Developer with 2.5+ years of experience at GlobeWyze Inc. Reach out via email, LinkedIn, or WhatsApp to discuss React, Next.js, and TypeScript projects.",
};

export default function ContactPage() {
  return (
    <Container>
      <Heading className="font-black pb-4">Contact Me</Heading>
      <Paragraph className="pb-10 max-w-xl">
        Based in <Highlight>Islamabad, Pakistan</Highlight> (PKT, UTC+5). Open
        to remote opportunities. The fastest way to reach me is by email or
        LinkedIn — I typically respond within 1–2 business days.
      </Paragraph>
      <Contact />
    </Container>
  );
}

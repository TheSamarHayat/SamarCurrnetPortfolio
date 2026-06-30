import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { NotAProBut } from "@/components/NotAProBut";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { IconMail } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samar Hayat - Frontend Developer",
  description:
    "Samar Hayat, Frontend Developer with 2.5+ years of experience building responsive web applications using React, Next.js, and TypeScript. Currently at GlobeWyze Inc.; previously at Xecutors, Citadel Solutions, and ZITSOL.",
};

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">
        Hello there! I&apos;m Samar Hayat
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Frontend Developer</Highlight> specializing in
        modern web development with <Highlight>Next.js</Highlight>,{" "}
        <Highlight>React.js</Highlight>, and <Highlight>TypeScript</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I build fast, mobile-friendly websites using{" "}
        <Highlight>Tailwind CSS</Highlight>, <Highlight>ShadCN</Highlight>, and
        work with APIs like <Highlight>GraphQL</Highlight> and{" "}
        <Highlight>REST</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With 2.5+ years of professional experience, currently at{" "}
        <Highlight>GlobeWyze Inc.</Highlight> and previously at{" "}
        <Highlight>Xecutors</Highlight>, <Highlight>Citadel Solutions</Highlight>, and{" "}
        <Highlight>ZITSOL</Highlight>, I&apos;ve focused on creating responsive,
        SEO-optimized interfaces that improve user experience. Based in Islamabad,
        Pakistan — open to remote.
      </Paragraph>
      <div className="mt-4 flex flex-wrap gap-3">
        <Badge
          href="mailto:samarhayat.dev@gmail.com"
          text="Hire Me"
          icon={<IconMail className="h-4 w-4" />}
          showArrow={false}
        />
        <Badge
          href="/resume"
          text="View Resume"
          showArrow={false}
        />
      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
      <NotAProBut />
    </Container>
  );
}

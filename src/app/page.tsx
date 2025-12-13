import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { NotAProBut } from "@/components/NotAProBut";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";
import { IconMail } from "@tabler/icons-react";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">
        Hello there! I&apos;m Samar Hayat
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Front-End Developer</Highlight> specializing in
        modern web development with <Highlight>Next.js</Highlight>,{" "}
        <Highlight>React.js</Highlight>, and <Highlight>JavaScript</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I build fast, mobile-friendly websites using{" "}
        <Highlight>Tailwind CSS</Highlight>, <Highlight>ShadCN</Highlight>, and
        work with APIs like <Highlight>GraphQL</Highlight> and{" "}
        <Highlight>REST</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With over 1 year of professional experience, currently at{" "}
        <Highlight>GlobeWyze Inc.</Highlight> and previously at{" "}
        <Highlight>Xecutors</Highlight> and <Highlight>Zitsol</Highlight>, I&apos;ve
        focused on creating responsive, SEO-optimized interfaces that improve user
        experience.
      </Paragraph>
      <Link
        href={"mailto:samarhayat.dev@gmail.com"}
        className="inline-flex mt-4 items-center gap-1 group/button rounded-full focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 origin-left
        group-hover/button:bg-gray-50/15 group-hover/button:scale-105 hover:scale-105"
      >
        <IconMail />
        Hire Me
      </Link>
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

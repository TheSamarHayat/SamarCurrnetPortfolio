import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samar Hayat - Resume",
  description:
    "Samar Hayat, Frontend Developer with expertise in React and Next.js, creating responsive web applications and enhancing user experiences.",
};

export default function Home() {
  return (
    <Container>
      {/* <span className="text-4xl">💼</span> */}
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Frontend Developer with over 1 year of professional experience in
        building high-performance, responsive web applications using React.js,
        Next.js, TypeScript, and JavaScript.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        My focus is on creating intuitive, user-friendly interfaces that enhance
        user experiences, collaborating with teams to deliver seamless products,
        and contributing to open-source projects.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}

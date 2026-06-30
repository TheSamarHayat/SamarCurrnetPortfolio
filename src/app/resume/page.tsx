import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";
import { IconDownload } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Samar Hayat - Resume",
  description:
    "Samar Hayat, Frontend Developer with 2.5+ years of experience building responsive web applications using React, Next.js, and TypeScript. Work history at GlobeWyze Inc., Xecutors, Citadel Solutions, and ZITSOL.",
};

export default function ResumePage() {
  return (
    <Container>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Frontend Developer with 2.5+ years of professional experience in
        building high-performance, responsive web applications using React.js,
        Next.js, TypeScript, and JavaScript.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        My focus is on creating intuitive, user-friendly interfaces that enhance
        user experiences and collaborating with teams to deliver seamless products
        on schedule.
      </Paragraph>
      <div className="mt-4">
        <Badge
          href="/resume/samar_hayat_resume.pdf"
          text="Download PDF Resume"
          icon={<IconDownload className="h-4 w-4" />}
          showArrow={false}
        />
      </div>
      <WorkHistory />
    </Container>
  );
}

import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "./Highlight";
import ImageGrid from "./ImageGrid";
import MeOne from "@/../public/images/me/MeOne.png";
import MeTwo from "@/../public/images/me/MeTwo.png";
import MeThree from "@/../public/images/me/MeThree.png";
import { ViewTransitionLink as Link } from "./ViewTransitionLink";

export default function About() {
  const images = [MeOne.src, MeTwo.src, MeThree.src];

  return (
    <div>
      <ImageGrid images={images} />

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hi, I&apos;m Samar Hayat — a{" "}
          <Highlight>Frontend Developer</Highlight> specializing in modern web
          development with <Highlight>Next.js</Highlight> and{" "}
          <Highlight>React.js</Highlight>. Based in{" "}
          <Highlight>Islamabad, Pakistan</Highlight> (PKT, UTC+5), I focus on
          creating fast, mobile-friendly websites that deliver exceptional user
          experiences. Open to remote opportunities.
        </Paragraph>
        <Paragraph className="mt-4">
          With 2.5+ years of professional experience, currently working as a{" "}
          <Highlight>Frontend Developer</Highlight> at{" "}
          <Highlight>GlobeWyze Inc.</Highlight> and previously at{" "}
          <Highlight>Xecutors</Highlight>, <Highlight>Citadel Solutions</Highlight>, and{" "}
          <Highlight>ZITSOL</Highlight>, I&apos;ve worked extensively with{" "}
          <Highlight>JavaScript (ES6+)</Highlight>, <Highlight>TypeScript</Highlight>,{" "}
          <Highlight>React.js</Highlight>, <Highlight>Next.js</Highlight>,{" "}
          <Highlight>Tailwind CSS</Highlight>, <Highlight>ShadCN</Highlight>,{" "}
          <Highlight>MUI</Highlight>, and <Highlight>GraphQL</Highlight>. I&apos;m
          skilled at integrating APIs from platforms like LinkedIn, Meta, and TikTok to
          create dynamic, scalable web applications.
        </Paragraph>
        <Paragraph className="mt-4">
          At <Highlight>GlobeWyze Inc.</Highlight>, I transitioned from a{" "}
          <Highlight>QA Engineer</Highlight> role into{" "}
          <Highlight>Frontend Developer</Highlight>, where I develop and maintain
          responsive web applications using <Highlight>React.js</Highlight> and{" "}
          <Highlight>Next.js</Highlight>, implementing pixel-perfect UI components based
          on Figma designs. I integrate <Highlight>GraphQL</Highlight> APIs for seamless
          data management and optimize component performance for enhanced user
          experience.
        </Paragraph>
        <Paragraph className="mt-4">
          At <Highlight>Xecutors</Highlight>, I built and improved websites using{" "}
          <Highlight>Next.js</Highlight> and <Highlight>React</Highlight>, working with
          tools like <Highlight>Nhost</Highlight>, <Highlight>Hasura</Highlight>, and{" "}
          <Highlight>Apollo Client</Highlight> to handle data efficiently. My work
          focused on performance optimization, SEO improvements, and seamless
          collaboration with design teams.
        </Paragraph>
        <Paragraph className="mt-4">
          At <Highlight>Citadel Solutions</Highlight>, I delivered freelance WordPress
          projects with custom JavaScript and on-page SEO. Earlier at{" "}
          <Highlight>ZITSOL</Highlight>, I developed WordPress websites using{" "}
          <Highlight>Elementor</Highlight> and <Highlight>Gutenberg</Highlight>, while
          implementing <Highlight>HTML5</Highlight>, <Highlight>CSS3</Highlight>, and{" "}
          <Highlight>Tailwind CSS</Highlight> to enhance responsiveness and performance.
        </Paragraph>
        <Paragraph className="mt-4">
          When I&apos;m not coding, I&apos;m continuously learning new technologies
          and staying updated with the latest web development trends. I believe in
          writing clean, maintainable code and shipping features that hold up in
          production.
        </Paragraph>
        <Paragraph className="mt-4">
          Let&apos;s connect — reach out via{" "}
          <Link href="mailto:samarhayat.dev@gmail.com">
            <Highlight>Email</Highlight>
          </Link>
          ,{" "}
          <Link href="https://www.linkedin.com/in/thesamarhayatt" target="_blank">
            <Highlight>LinkedIn</Highlight>
          </Link>
          , or view my{" "}
          <Link href="/resume">
            <Highlight>Resume</Highlight>
          </Link>
          .
        </Paragraph>
      </div>
    </div>
  );
}

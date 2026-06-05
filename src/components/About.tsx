import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "./Highlight";
import ImageGrid from "./ImageGrid";
import MeOne from "@/../public/images/me/MeOne.png";
import MeTwo from "@/../public/images/me/MeTwo.png";
import MeThree from "@/../public/images/me/MeThree.png";

export default function About() {
  const images = [MeOne.src, MeTwo.src, MeThree.src];

  return (
    <div>
      {/* Using ImageGrid Component */}
      <ImageGrid images={images} />

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hi, I&apos;m Samar Hayat — a{" "}
          <Highlight>Front-End Developer</Highlight> specializing in modern web
          development with <Highlight>Next.js</Highlight> and{" "}
          <Highlight>React.js</Highlight>. Based in Pakistan, I focus on
          creating fast, mobile-friendly websites that deliver exceptional user
          experiences.
        </Paragraph>
        <Paragraph className="mt-4">
          With 2.5+ years of professional experience, currently working at{" "}
          <Highlight>GlobeWyze Inc.</Highlight> and previously at{" "}
          <Highlight>Xecutors</Highlight> and <Highlight>Zitsol</Highlight>, I&apos;ve
          worked extensively with cutting-edge technologies, including{" "}
          <Highlight>JavaScript (ES6+)</Highlight>, <Highlight>TypeScript</Highlight>,{" "}
          <Highlight>React.js</Highlight>, <Highlight>Next.js</Highlight>,{" "}
          <Highlight>Tailwind CSS</Highlight>, <Highlight>ShadCN</Highlight>,{" "}
          <Highlight>MUI</Highlight>, and <Highlight>GraphQL</Highlight>. I&apos;m
          skilled at integrating APIs from platforms like LinkedIn, Meta, and TikTok to
          create dynamic, scalable web applications.
        </Paragraph>
        <Paragraph className="mt-4">
          Currently at <Highlight>GlobeWyze Inc.</Highlight>, I develop and maintain
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
          Earlier at Zitsol, I developed <Highlight>WordPress</Highlight>{" "}
          websites using <Highlight>Elementor</Highlight> and{" "}
          <Highlight>Gutenberg</Highlight>, while implementing{" "}
          <Highlight>HTML5</Highlight>, <Highlight>CSS3</Highlight>, and{" "}
          <Highlight>Tailwind CSS</Highlight> to enhance responsiveness and
          performance.
        </Paragraph>
        <Paragraph className="mt-4">
          When I&apos;m not coding, I&apos;m continuously learning new
          technologies and contributing to open-source projects. I believe in
          writing clean, maintainable code and staying updated with the latest
          web development trends.
        </Paragraph>
        <Paragraph className="mt-4">
          Let&apos;s connect and discuss how I can help bring your web projects
          to life!
          {/* Reach out via <Highlight>Email</Highlight> or check out my portfolio at{" "}
          <Highlight>portfolio.subsyncpro.com</Highlight>. */}
        </Paragraph>
      </div>
    </div>
  );
}

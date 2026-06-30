import gogencyImage1 from "@/../public/images/gogency_new.png";
import gogencyThumbnail from "@/../public/images/gogency_new.png";
import gogencyImage2 from "@/../public/images/gogency_new2.png";
import NoteSeekLogo from "@/../public/images/NoteSeek/noteseek-logo.png";
import FynnexaLogo from "@/../public/images/Fynnexa/fynnexa-logo.png";
import SilkTravelsImage1 from "@/../public/images/silk_new1.png";
import SilkTravelsThumbnail from "@/../public/images/silk_new.png";
import SilkTravelsImage2 from "@/../public/images/silk_new2.png";
import Xecutors from "@/../public/images/Xecutors/thumbnail.png";
import Xecutorstwo from "@/../public/images/Xecutors/thumbnailtwo.png";
// import ZealSoftOne from "public/images/Zealsoft/Frame1.png";
// import ZealSoftTwo from "public/images/Zealsoft/Frame2.png";
// import ZealSoftThree from "public/images/Zealsoft/Frame3.png";

export const products = [
  {
    href: "#",
    title: "NoteSeek",
    description:
      "A telehealth platform for instantly requesting and receiving medical notes. Patients submit requests, providers fulfill them through a real-time queue, and clinics manage operations — all backed by a secure NestJS BFF API with multi-role auth.",
    thumbnail: NoteSeekLogo,
    images: [NoteSeekLogo],
    stack: ["Next.js", "NestJS", "Prisma", "Supabase", "Stripe"],
    slug: "noteseek",
    content: (
      <div>
        <p>
          NoteSeek is a telehealth platform that lets patients instantly request
          medical notes from licensed providers. I contributed to both the
          backend and frontend, building a full-stack system designed for
          healthcare compliance (PHIPA) with secure, role-based access.
        </p>
        <p>
          The backend is a NestJS BFF API using Prisma with Supabase Postgres.
          Authentication flows through Supabase with httpOnly cookie sessions,
          JWKS/JOSE JWT verification, and a multi-role membership model
          (patient, provider, clinic admin). Key integrations include Stripe
          for payments, SendGrid for transactional email, Firebase for push
          notifications, and Socket.io for real-time provider queue updates
          and chat.
        </p>
        <p>
          The frontend is built with Next.js 14 (App Router), Radix UI, and
          Tailwind CSS. It includes patient request flows, provider queue and
          earnings dashboards, admin panels, Stripe checkout, QR code
          generation, and PDF note export — all connected to the NestJS API
          with cookie-based auth and role context switching.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "Fynnexa",
    description:
      "A comprehensive investment platform for deal management, investor onboarding, and KYC compliance. Features a 10-service NestJS microservices backend and a Next.js 15 frontend with AI assistant, real-time chat, and payment processing.",
    thumbnail: FynnexaLogo,
    images: [FynnexaLogo],
    stack: ["Next.js", "NestJS", "Microservices", "AWS", "Supabase"],
    slug: "fynnexa",
    content: (
      <div>
        <p>
          Fynnexa is an investment platform that streamlines deal management,
          investor onboarding, and regulatory compliance. It connects investors
          with curated private deals while providing robust KYC verification,
          document signing, and portfolio tracking tools.
        </p>
        <p>
          The backend is a NestJS microservices monorepo with 10 independent
          services: chat, AI, deal, KYC, payment, DocuSign, mail, network,
          onboarding, and generic. Each service uses Prisma with Supabase
          Postgres, validates Supabase JWTs via a shared auth library, and
          deploys independently on AWS App Runner. Integrations include AWS
          Bedrock for AI, S3 for document storage, SQS for async messaging,
          Lambda for serverless tasks, Stripe for payments, and Mailchimp for
          email campaigns.
        </p>
        <p>
          The frontend is built with Next.js 15 and React 19, using Redux
          Toolkit for state management, HeroUI for components, Tiptap for rich
          text editing, Framer Motion for animations, and Sumsub for KYC
          verification. Key features include deal creation and analytics,
          investor onboarding flows, real-time chat with data rooms, an
          AI-powered assistant, and Stripe-powered investment processing.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.xecutors.com",
    title: "Xecutors",
    description:
      "A software house offering cutting-edge design and development services, tailored solutions, and a seamless client experience. From web and mobile applications to emerging technologies like AI and AR, Xecutors redefines excellence.",
    thumbnail: Xecutors,
    images: [Xecutors, Xecutorstwo],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "xecutors",
    content: (
      <div>
        <p>
          Xecutors is a full-scale software house specializing in exceptional
          design and development services. With a strong focus on quality, the
          team delivers tailored solutions for clients, ranging from custom
          software to advanced web and mobile applications.
        </p>
        <p>
          Key features include transparent pricing models, an in-house expert
          team, and services in emerging technologies such as Artificial
          Intelligence (AI), Internet of Things (IoT), and Augmented Reality
          (AR). Xecutors also emphasizes streamlined processes and
          confidentiality assurance to help businesses thrive.
        </p>
        <p>
          I had the opportunity to contribute to some parts of this website,
          adding my expertise to enhance its functionality and design. While not
          fully created by me, my work played a significant role in refining
          certain aspects.
        </p>
        <p>
          Whether you&apos;re a startup or scaling enterprise, Xecutors ensures
          that your digital vision is executed flawlessly, providing unmatched
          support and innovative solutions.
        </p>
      </div>
    ),
  },
  {
    href: "https://gogency.com",
    title: "Gogency",
    description:
      "An automated traveling portal where agencies can automate tasks like ticket invoice generation, email messaging, HR system management, and social media integration. Create modern websites with a single click.",
    thumbnail: gogencyThumbnail,
    images: [gogencyImage1, gogencyImage2],
    stack: ["Nextjs", "Tailwindcss", "ShadCn UI"],
    slug: "gogency",
    content: (
      <div>
        <p>
          Gogency is an innovative platform designed for travel agencies to
          automate their day-to-day operations. It offers features such as
          automatic ticket invoice generation, email auto-messaging, and a fully
          automated HR system.
        </p>
        <p>
          Additionally, Gogency provides the ability to create modern,
          fully-functional websites in just one click. It also integrates social
          media management tools directly from the platform, allowing users to
          manage social media posts and updates seamlessly.
        </p>
        <p>
          The platform streamlines multiple processes for travel agencies,
          making it easier to manage tasks and improve overall efficiency. With
          Gogency, agencies can focus more on their business while the platform
          handles the operational workload.
        </p>
      </div>
    ),
  },
  // {
  //   href: "https://www.zealsoftsolutions.com/",
  //   title: "ZealSoft Solutions",
  //   description:
  //     "A dynamic and responsive platform designed to showcase IT services like software development, cloud computing, data analytics, and cybersecurity. Built to enhance user experience and highlight the brand&apos;s expertise, the website features modern design, seamless navigation, and optimized performance.",
  //   thumbnail: ZealSoftOne,
  //   images: [ZealSoftOne, ZealSoftTwo, ZealSoftThree],
  //   stack: ["WordPress", "Elementor", "BeTheme"],
  //   slug: "zealsoftsolutions",
  //   content: (
  //     <div>
  //       <p>
  //         I had the opportunity to develop the website for ZealSoft Solutions, a
  //         company specializing in IT services such as software development,
  //         cloud computing, data analytics, and cybersecurity. My role was to
  //         create a modern, user-friendly platform that effectively showcases
  //         their expertise and services.
  //       </p>
  //       <p>
  //         Using technologies like WordPress, Elementor, and BeTheme, I designed
  //         and developed a responsive and visually engaging website. The project
  //         involved customizing layouts, optimizing performance, and ensuring
  //         seamless navigation to enhance user experience.
  //       </p>
  //       <p>
  //         Through this project, I honed my skills in UI/UX design, theme
  //         customization, and performance optimization while collaborating
  //         closely with the ZealSoft team to align the website with their brand
  //         vision and objectives.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    href: "https://www.silktravels.co.uk/",
    title: "Silk Travels",
    description:
      "A front-end travel website built within Xecutors office using Gogency&apos;s template system. Features flight booking, inquiry management, and consultant portal with CRUD operations, invoice generation, and multiple API integrations.",
    thumbnail: SilkTravelsThumbnail, // Make sure to import this
    images: [SilkTravelsImage1, SilkTravelsImage2], // Import these images
    stack: ["React", "Tailwind CSS", "Multiple APIs"],
    slug: "silk-travels",
    content: (
      <div>
        <p>
          Silk Travels is a comprehensive travel booking platform developed at
          Xecutors using Gogency&apos;s template system. The website serves as
          the front-end interface for Gogency&apos;s travel management system,
          generated with a single click from their portal.
        </p>
        <p>
          The platform integrates multiple APIs including Amadeus API for flight
          data, Google Gmail API for communication, Stripe API for payments, and
          WhatsApp API for customer interactions. Consultants can perform CRUD
          operations, generate invoices, and manage all travel bookings through
          the portal.
        </p>
        <p>
          Built with React.js and Tailwind CSS, the website displays available
          flights and allows users to submit inquiries. These inquiries are sent
          to the backend where consultants can interact with potential
          customers, provide ticket options, and complete bookings.
        </p>
        <p>
          This project demonstrates the power of Gogency&apos;s template system
          while showcasing complex API integrations and a seamless user
          experience for both travelers and travel consultants.
        </p>
      </div>
    ),
  },
];

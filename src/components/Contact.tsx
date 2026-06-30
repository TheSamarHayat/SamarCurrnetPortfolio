import React from "react";
import { Badge } from "./Badge";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { TbBrandWhatsapp } from "react-icons/tb";

export const Contact = () => {
  return (
    <div className="flex flex-wrap gap-3 max-w-xl">
      <Badge
        href="mailto:samarhayat.dev@gmail.com"
        text="samarhayat.dev@gmail.com"
        icon={<IconMail className="h-4 w-4" />}
        showArrow={false}
      />
      <Badge
        href="https://www.linkedin.com/in/thesamarhayatt"
        text="LinkedIn"
        icon={<IconBrandLinkedin className="h-4 w-4" />}
        showArrow={false}
      />
      <Badge
        href="https://github.com/thesamarhayat"
        text="GitHub"
        icon={<IconBrandGithub className="h-4 w-4" />}
        showArrow={false}
      />
      <Badge
        href="https://wa.me/923495129992"
        text="WhatsApp"
        icon={<TbBrandWhatsapp className="h-4 w-4" />}
        showArrow={false}
      />
    </div>
  );
};

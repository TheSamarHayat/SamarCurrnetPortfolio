import React from "react";
import { navlinks } from "@/constants/navlinks";
import { ViewTransitionLink as Link } from "./ViewTransitionLink";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { isMobile } from "@/lib/utils";

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-5 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-emerald-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-5 px-2">
        Socials
      </Heading>
      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon className={twMerge("h-4 w-4 flex-shrink-0")} />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

import React from "react";
import { navlinks } from "@/constants/navlinks";
import { ViewTransitionLink as Link } from "./ViewTransitionLink";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
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
      {navlinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              "group relative text-secondary hover:text-primary transition duration-200 flex items-center space-x-2.5 py-2.5 px-3 rounded-lg text-sm",
              "hover:bg-white/70",
              active &&
                "bg-white shadow-sm text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1 before:rounded-full before:bg-emerald-500"
            )}
          >
            <link.icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5",
                active && "text-emerald-500"
              )}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}

      <div className="pt-6 mt-2 border-t border-neutral-200/80">
        <p className="px-1 mb-3 text-[10px] font-semibold uppercase tracking-widest text-secondary">
          Socials
        </p>
        <div className="flex items-center gap-1.5 px-1">
          {socials.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              title={link.label}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary transition duration-200 hover:bg-white/70 hover:text-primary"
            >
              <link.icon className="h-4 w-4 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

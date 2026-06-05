"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, type ComponentProps } from "react";

type ViewTransitionLinkProps = ComponentProps<typeof Link>;

export function ViewTransitionLink({
  href,
  onClick,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    const target = event.currentTarget;
    const url = target.getAttribute("href");

    if (!url || !url.startsWith("/") || target.target === "_blank" || event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    const navigateTo = () => {
      startTransition(() => {
        router.push(url);
      });
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(navigateTo);
      return;
    }

    navigateTo();
  };

  return (
    <Link href={href} onClick={navigate} {...props}>
      {children}
    </Link>
  );
}

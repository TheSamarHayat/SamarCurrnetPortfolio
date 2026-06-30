import React from "react";
import { Product } from "@/types/products";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { SingleProductClient } from "./SingleProductClient";
import { ViewTransitionLink as Link } from "./ViewTransitionLink";

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <article>
      <header className="flex flex-col">
        <Link
          type="button"
          href="/projects"
          aria-label="Go back to projects"
          className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
        </Link>

        <div className="flex lg:flex-row justify-between items-start lg:items-center flex-col">
          <Heading className="font-black py-2">{product.title}</Heading>
          <div className="flex flex-wrap gap-2 mt-2 lg:mt-0">
            {product.stack?.map((stack: string) => (
              <span
                key={stack}
                className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary border border-neutral-100"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        <SingleProductClient product={product} />
      </header>

      <Paragraph className="max-w-xl mt-8">{product.description}</Paragraph>

      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mt-4">
        {product?.content}
      </div>

      {product.href && product.href !== "#" && (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-8 origin-left"
        >
          Live Preview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      )}
    </article>
  );
};

"use client";
import React, { useState } from "react";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const SingleProductClient = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  const hasMultipleImages = product.images.length > 1;

  return (
    <div className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        key={product.slug}
        className="w-full rounded-lg overflow-hidden bg-gray-100 relative"
      >
        <Image
          src={activeImage}
          alt={`${product.title} - Project screenshot`}
          height={800}
          width={800}
          className="object-cover object-left-top w-full max-h-96"
        />
      </motion.div>

      {hasMultipleImages && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {product.images.map((image, idx) => {
            const isActive = activeImage === image;
            return (
              <button
                onClick={() => setActiveImage(image)}
                key={`image-thumbnail-${idx}`}
                aria-label={`View screenshot ${idx + 1}`}
                aria-pressed={isActive}
                className={`flex-shrink-0 rounded-lg overflow-hidden transition ring-offset-2 ${
                  isActive
                    ? "ring-2 ring-gray-800"
                    : "ring-1 ring-neutral-200 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.title} - Thumbnail ${idx + 1}`}
                  height={80}
                  width={120}
                  className="h-16 w-24 md:h-20 md:w-32 object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

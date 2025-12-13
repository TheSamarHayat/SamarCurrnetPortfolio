"use client";
import React, { useState } from "react";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const SingleProductClient = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt={`${product.title} - Project screenshot`}
          height={1000}
          width={1000}
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>

      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt={`${product.title} - Thumbnail ${idx + 1}`}
              height={240}
              width={240}
              className="h-14 w-16 md:h-40 md:w-60 object-fit object-top mr-4 mb-4 border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
    </>
  );
};

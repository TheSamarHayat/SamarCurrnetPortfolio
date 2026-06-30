import React from "react";

import { Product } from "@/types/products";
import { products } from "@/constants/products";

import { AnimatedProduct } from "./AnimatedProduct";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <AnimatedProduct product={product} idx={idx} key={product.slug ?? product.href} />
        ))}
      </div>
    </div>
  );
};

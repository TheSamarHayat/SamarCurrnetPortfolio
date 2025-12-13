"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ImageGrid = ({ images }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
      {images.map((image: any, index: any) => (
        <motion.div
          key={image}
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: index % 2 === 0 ? 3 : -3,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Image
            src={image}
            width={200}
            height={240}
            alt={`About Samar Hayat - Image ${index + 1}`}
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;

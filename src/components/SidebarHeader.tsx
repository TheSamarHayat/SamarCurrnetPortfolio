import React from "react";
import Image from "next/image";
import me from "@/../public/images/me.png";

export const SidebarHeader = () => {
  return (
    <div className="flex space-x-3">
      <div className="relative flex-shrink-0">
        <div className="bg-gradient-to-tr from-emerald-400 to-sky-400 p-[2px] rounded-full">
          <Image
            src={me}
            alt="Avatar"
            height="40"
            width="40"
            className="object-cover object-top rounded-full ring-2 ring-white"
          />
        </div>
        <span
          className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
          aria-hidden="true"
        />
      </div>
      <div className="flex text-sm flex-col justify-center">
        <p className="font-bold text-primary">Samar Hayat</p>
        <p className="text-xs uppercase tracking-wide text-secondary">
          Developer
        </p>
      </div>
    </div>
  );
};

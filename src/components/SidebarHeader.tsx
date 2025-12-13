import React from "react";
import Image from "next/image";
import me from "@/../public/images/me.png";

export const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src={me}
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Samar Hayat</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};

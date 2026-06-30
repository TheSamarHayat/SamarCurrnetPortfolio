"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  IconDownload,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react";
import { Badge } from "./Badge";

import { isMobile } from "@/lib/utils";

import { SidebarHeader } from "./SidebarHeader";
import { Navigation } from "./Navigation";
import { SidebarAtAGlance } from "./SidebarAtAGlance";

export const ToggleSidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-gradient-to-b from-neutral-50 to-neutral-100 border-r border-neutral-200/70 w-[17rem] max-w-[17rem] lg:w-[17rem] fixed lg:relative h-screen left-0 flex flex-col"
          >
            <div className="min-h-0 flex-1 overflow-y-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div
              className="shrink-0 space-y-3 border-t border-neutral-200/80 pt-5 mt-4"
              onClick={() => isMobile() && setOpen(false)}
            >
              <SidebarAtAGlance />
              <div className="flex flex-col gap-2">
                <Badge href="/resume" text="Read Resume" />
                <a
                  href="/resume/samar_hayat_resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-4 py-2 text-xs font-semibold text-secondary transition hover:bg-white hover:text-primary"
                >
                  <IconDownload className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="fixed lg:hidden bottom-4 right-4 h-12 w-12 border border-white/10 bg-slate-900 shadow-2xl shadow-zinc-900 rounded-full backdrop-blur-sm flex items-center justify-center z-50 group"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Sidebar"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex items-center justify-center z-10">
          <IconLayoutSidebarRightCollapse className="h-6 w-6 text-white" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
  );
};

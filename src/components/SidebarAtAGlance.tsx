const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export const SidebarAtAGlance = () => {
  return (
    <div className="space-y-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
        At a glance
      </p>
      <div className="space-y-1.5 text-xs text-secondary leading-relaxed">
        <p className="flex items-center gap-1.5 text-primary">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Open to remote
        </p>
        <p>Islamabad, Pakistan · PKT</p>
        <p>2.5+ years · Frontend Developer</p>
        <p className="font-medium text-primary">GlobeWyze Inc.</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-sm border border-neutral-200/80 bg-white/60 px-2 py-0.5 text-[10px] font-medium text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

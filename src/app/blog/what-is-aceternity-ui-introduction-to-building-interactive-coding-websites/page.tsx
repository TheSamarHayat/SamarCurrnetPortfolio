import { Suspense } from "react";
import Content from "./content.mdx";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}

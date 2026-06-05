import glob from "fast-glob";
import * as path from "path";
import { cacheLife, cacheTag } from "next/cache";

async function importBlog(blogFileName: string) {
  const slug = blogFileName.replace(/\/content\.mdx$/, "").replace(/\.mdx$/, "");
  const { meta } = await import(`@/app/blog/${slug}/meta`);
  return {
    slug,
    ...meta,
  };
}

export async function getAllBlogs() {
  "use cache";
  cacheLife("hours");
  cacheTag("blogs");

  const blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),
  });

  const blogs = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

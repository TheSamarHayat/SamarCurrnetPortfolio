/** @type {import('next-sitemap').IConfig} */
const path = require("path");
const glob = require("fast-glob");

async function getAdditionalPaths() {
  const additionalPaths = [];

  // Static pages with priorities and changefreq
  const staticPages = [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/about", priority: 0.9, changefreq: "weekly" },
    { loc: "/resume", priority: 0.9, changefreq: "weekly" },
    { loc: "/projects", priority: 0.8, changefreq: "weekly" },
    { loc: "/blog", priority: 0.8, changefreq: "weekly" },
    { loc: "/contact", priority: 0.6, changefreq: "monthly" },
  ];

  additionalPaths.push(...staticPages);

  // Get project pages from products
  try {
    // Read products file and extract slugs
    const fs = require("fs");
    const productsPath = path.join(process.cwd(), "src/constants/products.tsx");
    const productsContent = fs.readFileSync(productsPath, "utf-8");
    
    // Extract slugs using regex, but exclude commented lines
    // Match slug: "value" that's not in a comment
    const lines = productsContent.split("\n");
    const slugs = [];
    let inCommentBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for comment block start/end
      if (line.includes("/*")) inCommentBlock = true;
      if (line.includes("*/")) {
        inCommentBlock = false;
        continue;
      }
      
      // Skip if in comment block or line starts with //
      if (inCommentBlock || line.startsWith("//")) continue;
      
      // Extract slug from uncommented lines
      const slugMatch = line.match(/slug:\s*["']([^"']+)["']/);
      if (slugMatch) {
        slugs.push(slugMatch[1]);
      }
    }
    
    slugs.forEach((slug) => {
      additionalPaths.push({
        loc: `/projects/${slug}`,
        priority: 0.7,
        changefreq: "monthly",
        lastmod: new Date().toISOString(),
      });
    });
  } catch (error) {
    console.warn("Could not read products file:", error.message);
  }

  // Get blog posts with dates from meta.ts
  try {
    const blogDirs = await glob(["*/meta.ts"], {
      cwd: path.join(process.cwd(), "src/app/blog"),
    });

    for (const metaFile of blogDirs) {
      try {
        const slug = path.dirname(metaFile);
        const metaPath = path.join(process.cwd(), "src/app/blog", metaFile);
        const metaContent = require("fs").readFileSync(metaPath, "utf-8");
        const dateMatch = metaContent.match(/date:\s*["']([^"']+)["']/);

        additionalPaths.push({
          loc: `/blog/${slug}`,
          priority: 0.7,
          changefreq: "monthly",
          lastmod: dateMatch
            ? new Date(dateMatch[1]).toISOString()
            : new Date().toISOString(),
        });
      } catch (error) {
        console.warn(`Could not process blog meta ${metaFile}:`, error.message);
      }
    }
  } catch (error) {
    console.warn("Could not read blog files:", error.message);
  }

  return additionalPaths;
}

module.exports = {
  siteUrl: "https://www.thesamarhayat.com",
  generateRobotsTxt: true,
  additionalPaths: async () => {
    return await getAdditionalPaths();
  },
  transform: async (config, path) => {
    // Find the path in additionalPaths to get custom priority/changefreq
    const additionalPaths = await getAdditionalPaths();
    const customPath = additionalPaths.find((p) => p.loc === path);

    if (customPath) {
      return {
        loc: path,
        changefreq: customPath.changefreq || config.changefreq,
        priority: customPath.priority || config.priority,
        lastmod: customPath.lastmod || config.lastmod,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod,
    };
  },
};

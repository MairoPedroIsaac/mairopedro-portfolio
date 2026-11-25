import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mairopedro.com";
  const paths = [
    "", "/projects", "/services", "/about", "/contact",
    "/projects/swiftbill", "/projects/powerhand-design", "/projects/nephrosasa-rwanda", "/projects/hibare-stays", "/projects/influence-trading-house",
  ];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}

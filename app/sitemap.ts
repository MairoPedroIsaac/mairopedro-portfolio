import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mairopedro.com";
  return ["", "/projects", "/services", "/about", "/contact", ...projects.map((p) => `/projects/${p.slug}`)].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

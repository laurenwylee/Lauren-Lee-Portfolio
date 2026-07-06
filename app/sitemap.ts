import type { MetadataRoute } from "next";

const siteUrl = "https://www.laurenwylee.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/courses", "/experience", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}

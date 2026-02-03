import { PROJECTS } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://peacejp.dev";

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];

	const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
		url: `${baseUrl}/projects/${project.title.toLowerCase()}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticRoutes, ...projectRoutes];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const date = new Date();
    return [
        {
            url: "https://taamco.com",
            lastModified: date,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://taamco.com/about",
            lastModified: date,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://taamco.com/services",
            lastModified: date,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://taamco.com/projects",
            lastModified: date,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];
}

import { MetadataRoute } from "next";

const SITE_URL = 'https://taamco.com';

type PageConfig = {
    path: string;
    priority: number;
    changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    lastModified?: string;
};

// Define page configurations with more granular control
const pages: PageConfig[] = [
    { path: '', priority: 1.0, changeFreq: 'daily', lastModified: new Date().toISOString() }, // Homepage
    { path: 'about', priority: 0.8, changeFreq: 'monthly' },
    { path: 'services', priority: 0.9, changeFreq: 'weekly' },
    { path: 'services/installation', priority: 0.8, changeFreq: 'weekly' },
    { path: 'services/maintenance', priority: 0.8, changeFreq: 'weekly' },
    { path: 'services/shipping', priority: 0.8, changeFreq: 'weekly' },
    { path: 'projects', priority: 0.9, changeFreq: 'weekly' }
];

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString();
    
    return pages.map(page => ({
        url: page.path ? `${SITE_URL}/${page.path}` : SITE_URL,
        lastModified: page.lastModified || currentDate,
        changeFrequency: page.changeFreq,
        priority: page.priority,
    }));
}

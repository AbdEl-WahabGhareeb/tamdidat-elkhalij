import { MetadataRoute } from "next";

const SITE_URL = 'https://taamco.com';

type PageConfig = {
    path: string;
    priority: number;
    changeFreq: 'monthly' | 'weekly';
};

// Define page configurations
const pages: PageConfig[] = [
    { path: '', priority: 1.0, changeFreq: 'monthly' },
    { path: 'about', priority: 0.8, changeFreq: 'monthly' },
    { path: 'services', priority: 0.9, changeFreq: 'weekly' },
    { path: 'projects', priority: 0.9, changeFreq: 'weekly' }
];

export default function sitemap(): MetadataRoute.Sitemap {
    const date = new Date();
    
    return pages.map(page => ({
        url: page.path ? `${SITE_URL}/${page.path}` : SITE_URL,
        lastModified: date,
        changeFrequency: page.changeFreq,
        priority: page.priority,
    }));
}

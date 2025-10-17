import { getStructuredData as getBaseStructuredData } from './structured-data/base';
import { getServiceStructuredData } from './structured-data/service';
import { getAboutStructuredData } from './structured-data/about';
import { getProjectsStructuredData } from './structured-data/projects';

export function getStructuredData(path: string) {
    // Base structured data for all pages
    const baseData = getBaseStructuredData();

    // Add page-specific structured data
    if (path.startsWith('/services')) {
        return {
            ...baseData,
            ...getServiceStructuredData(path)
        };
    }

    if (path.startsWith('/about')) {
        return {
            ...baseData,
            ...getAboutStructuredData()
        };
    }

    if (path.startsWith('/projects')) {
        return {
            ...baseData,
            ...getProjectsStructuredData()
        };
    }

    return baseData;
}
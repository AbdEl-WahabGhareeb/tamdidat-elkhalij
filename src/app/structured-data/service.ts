export interface ServiceData {
    '@context': 'https://schema.org';
    '@type': string[];
    name: string;
    provider: {
        '@type': string;
        name: string;
        url: string;
    };
    areaServed: Array<{
        '@type': string;
        name: string;
    }>;
    hasOfferCatalog: {
        '@type': string;
        name: string;
        itemListElement: Array<{
            '@type': string;
            itemOffered: {
                '@type': string;
                name: string;
                description: string;
            };
        }>;
    };
}

export function getServiceStructuredData(path: string): ServiceData {
    const baseService = {
        '@context': 'https://schema.org' as const,
        '@type': ['Service', 'LocalBusiness'],
        name: 'خدمات تمديدات الغاز المركزي',
        provider: {
            '@type': 'Organization',
            name: 'تمديدات الخليج',
            url: 'https://taamco.com'
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'الرياض'
            },
            {
                '@type': 'City',
                name: 'جدة'
            },
            {
                '@type': 'City',
                name: 'الدمام'
            }
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات تمديدات الغاز',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'تصميم شبكات الغاز',
                        description: 'خدمات تصميم شبكات الغاز للمباني السكنية والتجارية'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'تركيب شبكات الغاز',
                        description: 'تركيب وتمديد شبكات الغاز بأعلى معايير السلامة'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'صيانة شبكات الغاز',
                        description: 'خدمات صيانة دورية وطارئة لشبكات الغاز'
                    }
                }
            ]
        }
    };

    // Add location-specific data if on a location page
    if (path.includes('/riyadh')) {
        return {
            ...baseService,
            name: 'خدمات تمديدات الغاز في الرياض',
            areaServed: [{
                '@type': 'City',
                name: 'الرياض'
            }]
        };
    }

    if (path.includes('/jeddah')) {
        return {
            ...baseService,
            name: 'خدمات تمديدات الغاز في جدة',
            areaServed: [{
                '@type': 'City',
                name: 'جدة'
            }]
        };
    }

    return {
        ...baseService,
        name: 'خدمات تمديدات الغاز'
    };
}
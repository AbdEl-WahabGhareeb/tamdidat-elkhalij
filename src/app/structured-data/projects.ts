export interface ProjectsData {
    '@context': 'https://schema.org';
    '@type': string;
    name: string;
    itemListElement: Array<{
        '@type': string;
        item: {
            '@type': string;
            name: string;
            description: string;
            image: string;
            location: {
                '@type': string;
                name: string;
            };
            temporalCoverage: string;
        };
        position: number;
    }>;
}

export function getProjectsStructuredData(): ProjectsData {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'مشاريع تمديدات الخليج',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@type': 'Project',
                    name: 'مجمع سكني في الرياض',
                    description: 'تصميم وتنفيذ شبكة غاز متكاملة لمجمع سكني يضم 100 وحدة سكنية',
                    image: 'https://taamco.com/assets/projects/project1.jpg',
                    location: {
                        '@type': 'Place',
                        name: 'الرياض'
                    },
                    temporalCoverage: '2024'
                }
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@type': 'Project',
                    name: 'مجمع تجاري في جدة',
                    description: 'تركيب شبكة غاز لمجمع مطاعم ومحلات تجارية',
                    image: 'https://taamco.com/assets/projects/project2.jpg',
                    location: {
                        '@type': 'Place',
                        name: 'جدة'
                    },
                    temporalCoverage: '2023'
                }
            },
            {
                '@type': 'ListItem',
                position: 3,
                item: {
                    '@type': 'Project',
                    name: 'مصنع في الدمام',
                    description: 'تصميم وتنفيذ شبكة غاز صناعية لمصنع كبير',
                    image: 'https://taamco.com/assets/projects/project3.jpg',
                    location: {
                        '@type': 'Place',
                        name: 'الدمام'
                    },
                    temporalCoverage: '2023'
                }
            }
        ]
    };
}
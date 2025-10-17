export interface AboutData {
    '@context': 'https://schema.org';
    '@type': string[];
    name: string;
    description: string;
    foundingDate: string;
    founder: {
        '@type': string;
        name: string;
    };
    numberOfEmployees: {
        '@type': string;
        value: string;
    };
    award: string[];
    certification: string[];
}

export function getAboutStructuredData(): AboutData {
    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'LocalBusiness'],
        name: 'تمديدات الخليج',
        description: 'شركة تمديدات الخليج المحدودة، شركة رائدة في تصميم وتنفيذ وصيانة شبكات الغاز في المملكة العربية السعودية',
        foundingDate: '2015', // Replace with actual founding date
        founder: {
            '@type': 'Person',
            name: 'مؤسس تمديدات الخليج' // Replace with actual founder name
        },
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '50+'
        },
        award: [
            'شهادة الجودة ISO',
            'شهادة معتمدة من الدفاع المدني السعودي'
        ],
        certification: [
            'ISO 9001:2015',
            'شهادة السلامة المهنية',
            'عضوية الغرفة التجارية'
        ]
    };
}
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://taamco.com/#website',
    url: 'https://taamco.com',
    name: 'تمديدات الخليج',
    description: 'شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز',
    publisher: {
        '@id': 'https://taamco.com/#organization'
    },
    potentialAction: [
        {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://taamco.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    ],
    inLanguage: 'ar-SA'
};
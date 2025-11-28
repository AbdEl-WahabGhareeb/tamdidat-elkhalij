const SITE_URL = 'https://taamco.com';

export const organizationLDJson = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'GasStation'],
    '@id': `${SITE_URL}/#organization`,
    name: 'تمديدات الخليج',
    alternateName: 'Tamdidat Elkhalij',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-search.png`,
    image: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        inLanguage: 'ar-SA',
        url: `${SITE_URL}/assets/logo-search.png`,
        width: 112,
        height: 112,
        caption: 'تمديدات الخليج'
    },
    description: 'شركة تمديدات الخليج المبتكرة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز وشحن خزانات الغاز للمنازل والمنشآت التجارية والصناعية.',
    sameAs: [
        'https://www.facebook.com/tamdidat.elkhalij',
        'https://twitter.com/tamdidat_elkhalij',
        'https://www.instagram.com/tamdidat.elkhalij',
        'https://www.linkedin.com/company/tamdidat-elkhalij'
    ]
};
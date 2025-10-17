export interface LocalBusinessData {
    '@context': 'https://schema.org';
    '@type': string | string[];
    name: string;
    image: string;
    '@id': string;
    url: string;
    telephone: string;
    priceRange: string;
    address: {
        '@type': 'PostalAddress';
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        '@type': 'GeoCoordinates';
        latitude: number;
        longitude: number;
    };
    openingHoursSpecification: Array<{
        '@type': 'OpeningHoursSpecification';
        dayOfWeek: string[];
        opens: string;
        closes: string;
    }>;
}

export function getStructuredData(): LocalBusinessData {
    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'ProfessionalService'],
        '@id': 'https://taamco.com/#organization',
        name: 'تمديدات الخليج',
        image: 'https://taamco.com/assets/Logo.svg',
        url: 'https://taamco.com',
        telephone: '+966500000000', // Replace with actual phone number
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'طريق الملك فهد', // Replace with actual address
            addressLocality: 'الرياض',
            addressRegion: 'منطقة الرياض',
            postalCode: '12345', // Replace with actual postal code
            addressCountry: 'SA'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.7136, // Replace with actual coordinates
            longitude: 46.6753
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday'
                ],
                opens: '08:00',
                closes: '17:00'
            }
        ]
    };
}
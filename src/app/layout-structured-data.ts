import { LocalBusinessData } from './structured-data/base';

export const localBusinessData: LocalBusinessData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GasStation', 'HomeAndConstructionBusiness'],
    name: 'تمديدات الخليج',
    image: [
        'https://taamco.com/assets/favicon.ico',
        'https://taamco.com/assets/og-image.png'
    ],
    '@id': 'https://taamco.com/#organization',
    url: 'https://taamco.com',
    telephone: '+966500700572',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Al Khomrah District',
        addressLocality: 'Jeddah',
        addressRegion: 'Makkah Province',
        postalCode: '23212',
        addressCountry: 'SA'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.422510,  // Update with exact coordinates
        longitude: 39.219980  // Update with exact coordinates
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
            closes: '20:00'
        }
    ]
};
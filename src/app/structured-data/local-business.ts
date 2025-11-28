export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://taamco.com/#organization',
  name: 'تمديدات الخليج',
  alternateName: ['تامكو', 'TAAMCO', 'Tamdidat Alkhalij'],
  description: 'شركة سعودية متخصصة في تصميم وتركيب وصيانة شبكات الغاز والخدمات المتكاملة',
  url: 'https://taamco.com',
  telephone: '+966500000000',
  email: 'info@taamco.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'الرياض، المملكة العربية السعودية',
    addressLocality: 'الرياض',
    addressRegion: 'SA',
    postalCode: '11111',
    addressCountry: 'SA'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia'
  },
  image: 'https://taamco.com/assets/og-image.jpg',
  logo: {
    '@type': 'ImageObject',
    url: 'https://taamco.com/assets/logo.jpg',
    width: 300,
    height: 300
  },
  sameAs: [
    'https://www.linkedin.com/company/taamco/',
    'https://twitter.com/tamdidat_elkhalij',
    'https://www.tiktok.com/@taamco'
  ],
  priceRange: '$$',
  knowsAbout: [
    'Gas Lines Installation',
    'Gas Lines Maintenance',
    'Gas Tank Filling',
    'Central Gas Systems',
    'Industrial Gas Services'
  ],
  award: 'معتمدة من الدفاع المدني السعودي',
  foundingDate: '2008',
  foundingLocation: {
    '@type': 'Place',
    name: 'الرياض، السعودية'
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50-100'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات شبكات الغاز',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'تصميم وتركيب شبكات الغاز',
          description: 'خدمات تصميم هندسي دقيق وتركيب احترافي لشبكات الغاز'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'صيانة شبكات الغاز',
          description: 'صيانة دورية وعلاجية وطارئة لأنظمة الغاز'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'شحن خزانات الغاز',
          description: 'خدمة شحن فورية 24/7 للغاز عالي الجودة'
        }
      }
    ]
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Organization',
        name: 'عملائنا الكرام'
      },
      reviewBody: 'خدمات متميزة وفريق احترافي'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '250',
    bestRating: '5'
  }
};

import { generateMetadata } from '../metadata-generator';

const SITE_URL = 'https://taamco.com';
const SERVICES_OG_IMAGE = `${SITE_URL}/assets/services-og.jpg`;
const FALLBACK_OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

export const metadata = {
    ...generateMetadata('/services'),
    title: 'خدمات تمديدات الخليج - تصميم وتركيب وصيانة شبكات الغاز في السعودية',
    description: 'خدمات متكاملة من تمديدات الخليج - تصميم وتركيب وصيانة وشحن خزانات الغاز للمشاريع السكنية والتجارية والصناعية. معايير جودة عالمية وفريق معتمد. اتصل بنا الآن.',
    keywords: ['خدمات الغاز', 'تصميم الغاز', 'تركيب الغاز', 'صيانة الغاز', 'شحن الغاز', 'تمديدات الخليج'],
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: `${SITE_URL}/services`,
        siteName: 'تمديدات الخليج المبتكرة',
        title: 'خدمات تمديدات الخليج - حلول غاز متكاملة',
        description: 'خدمات تصميم وتركيب وصيانة وشحن شبكات الغاز بمعايير جودة عالمية',
        images: [
            {
                url: SERVICES_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'خدمات تمديدات الخليج المتكاملة لشبكات الغاز',
                type: 'image/jpeg',
                secureUrl: SERVICES_OG_IMAGE,
            },
            {
                url: FALLBACK_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'تمديدات الخليج المبتكرة',
                type: 'image/jpeg',
                secureUrl: FALLBACK_OG_IMAGE,
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@tamdidat_elkhalij',
        creator: '@tamdidat_elkhalij',
        title: 'خدمات تمديدات الخليج - حلول غاز متكاملة',
        description: 'خدمات متكاملة لشبكات الغاز - تصميم وتركيب وصيانة وشحن',
        images: [SERVICES_OG_IMAGE, FALLBACK_OG_IMAGE],
    }
};
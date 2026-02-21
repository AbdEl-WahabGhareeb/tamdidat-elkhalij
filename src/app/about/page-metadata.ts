import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';
const ABOUT_OG_IMAGE = `${SITE_URL}/assets/about-og.jpg`;
const FALLBACK_OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'عن تمديدات الخليج - شركة سعودية رائدة في خدمات الغاز منذ 2008',
    description: 'تعرف على تمديدات الخليج - شركة سعودية متخصصة في تصميم وتركيب وصيانة شبكات الغاز. فريق معتمد وخبرة تزيد عن 15 عاماً في خدمات الغاز المتكاملة.',
    keywords: ['عن تمديدات الخليج', 'شركة غاز سعودية', 'خدمات الغاز', 'تاريخ الشركة', 'رؤية الشركة'],
    alternates: {
        canonical: `${SITE_URL}/about`
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: `${SITE_URL}/about`,
        siteName: 'تمديدات الخليج المبتكرة',
        title: 'عن تمديدات الخليج - شركة الغاز المتكاملة',
        description: 'شركة سعودية رائدة في خدمات تصميم وتركيب وصيانة شبكات الغاز مع فريق متخصص معتمد',
        images: [
            {
                url: ABOUT_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'شركة تمديدات الخليج - الشركة الرائدة في خدمات الغاز',
                type: 'image/jpeg',
                secureUrl: ABOUT_OG_IMAGE,
            },
            {
                url: FALLBACK_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'تمديدات الخليج المبتكرة',
                type: 'image/jpeg',
                secureUrl: FALLBACK_OG_IMAGE,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@tamdidat_elkhalij',
        creator: '@tamdidat_elkhalij',
        title: 'عن تمديدات الخليج - شركة الغاز السعودية',
        description: 'شركة سعودية متخصصة في خدمات الغاز المتكاملة',
        images: [ABOUT_OG_IMAGE, FALLBACK_OG_IMAGE],
    }
};
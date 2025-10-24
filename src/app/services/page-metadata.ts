import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'الخدمات | تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
    description: 'خدمات شركة تمديدات الخليج المتخصصة في تصميم وتركيب وصيانة وشحن شبكات الغاز للمشاريع السكنية والتجارية والصناعية في المملكة العربية السعودية',
    alternates: {
        canonical: `${SITE_URL}/services`
    },
    openGraph: {
        title: 'خدمات تمديدات الخليج',
        description: 'خدمات متكاملة لشبكات الغاز - تصميم، تركيب، صيانة، وشحن خزانات',
        url: `${SITE_URL}/services`,
        images: [{ url: `${SITE_URL}/assets/services-og.jpg` }],
    },
};
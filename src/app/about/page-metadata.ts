import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

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
        title: 'عن تمديدات الخليج - شركة الغاز المتكاملة',
        description: 'شركة سعودية رائدة في خدمات تصميم وتركيب وصيانة شبكات الغاز مع فريق متخصص معتمد',
        url: `${SITE_URL}/about`,
        locale: 'ar_SA',
        images: [
            {
                url: `${SITE_URL}/assets/about-og.jpg`,
                width: 1200,
                height: 630,
                alt: 'شركة تمديدات الخليج - الشركة الرائدة في خدمات الغاز'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'عن تمديدات الخليج',
        description: 'شركة سعودية متخصصة في خدمات الغاز المتكاملة',
        images: [`${SITE_URL}/assets/about-og.jpg`],
    }
};
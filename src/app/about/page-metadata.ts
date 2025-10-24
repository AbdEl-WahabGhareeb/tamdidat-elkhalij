import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'عن الشركة | تمديدات الخليج - الشركة الرائدة في خدمات الغاز',
    description: 'تعرف على شركة تمديدات الخليج المحدودة، الشركة الرائدة في مجال تصميم وتنفيذ وصيانة شبكات الغاز في المملكة العربية السعودية بخبرة تزيد عن عشر سنوات',
    alternates: {
        canonical: `${SITE_URL}/about`
    },
    openGraph: {
        title: 'عن تمديدات الخليج',
        description: 'خبرة طويلة وفريق متخصص في خدمات شبكات الغاز',
        url: `${SITE_URL}/about`,
        images: [{ url: `${SITE_URL}/assets/about-og.jpg` }],
    },
};
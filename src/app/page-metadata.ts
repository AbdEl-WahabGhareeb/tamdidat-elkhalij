import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
    alternates: {
        canonical: SITE_URL
    }
};
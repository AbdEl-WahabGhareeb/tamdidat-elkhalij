import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'مشاريعنا | تمديدات الخليج - إنجازات في جميع أنحاء المملكة',
    description: 'اكتشف مشاريع تمديدات الخليج في المملكة العربية السعودية. نفخر بتنفيذ مشاريع متميزة في القطاعات السكنية والتجارية والصناعية بأعلى معايير الجودة',
    alternates: {
        canonical: `${SITE_URL}/projects`
    },
    openGraph: {
        title: 'مشاريع تمديدات الخليج',
        description: 'مشاريع ناجحة في جميع أنحاء المملكة العربية السعودية',
        url: `${SITE_URL}/projects`,
        images: [{ url: `${SITE_URL}/assets/projects-og.jpg` }],
    },
    keywords: [
        'مشاريع تمديد الغاز',
        'تمديدات الخليج',
        'مشاريع غاز مركزي',
        'تمديد غاز الرياض',
        'تمديد غاز جدة',
        'تمديد غاز الدمام',
        'مشاريع سكنية',
        'مشاريع تجارية',
        'مشاريع صناعية',
        'شبكات الغاز',
        'تركيب غاز مركزي'
    ]
};
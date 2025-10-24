import { Metadata } from 'next';

const SITE_URL = 'https://taamco.com';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: '%s | تمديدات الخليج',
        default: 'تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز'
    },
    description: 'شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز وشحن خزانات الغاز للمنازل والمنشآت التجارية والصناعية.',
    keywords: [
        'تمديدات الغاز',
        'شبكات الغاز',
        'صيانة الغاز',
        'تعبئة الغاز',
        'خدمات الغاز في السعودية',
        'تمديدات الخليج',
        'تصميم شبكات الغاز',
        'تنفيذ شبكات الغاز',
        'صيانة شبكات الغاز'
    ],
    publisher: 'تمديدات الخليج',
    applicationName: 'تمديدات الخليج',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'تمديدات الخليج' }],
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    verification: {
        google: 'WrItQ08BRXtWf6oCMt3qJBj16zucGd1oRKttlFafcWs'
    },
    alternates: {
        canonical: SITE_URL
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: SITE_URL,
        siteName: 'تمديدات الخليج',
        title: 'تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
        description: 'شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز',
        images: [
            {
                url: `${SITE_URL}/assets/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'تمديدات الخليج - خدمات تمديد الغاز المركزي',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'تمديدات الخليج',
        description: 'خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
        images: [`${SITE_URL}/assets/og-image.png`],
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/assets/logo-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/logo-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: [{ url: "/favicon.ico" }],
        apple: [
            { url: '/assets/logo-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/logo-512x512.png', sizes: '512x512', type: 'image/png' },
        ]
    },
    themeColor: '#1e3a8a'
};
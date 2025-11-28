import { generateMetadata } from '../metadata-generator';

export const metadata = {
    ...generateMetadata('/services'),
    title: 'خدمات تمديدات الخليج - تصميم وتركيب وصيانة شبكات الغاز في السعودية',
    description: 'خدمات متكاملة من تمديدات الخليج - تصميم وتركيب وصيانة وشحن خزانات الغاز للمشاريع السكنية والتجارية والصناعية. معايير جودة عالمية وفريق معتمد. اتصل بنا الآن.',
    keywords: ['خدمات الغاز', 'تصميم الغاز', 'تركيب الغاز', 'صيانة الغاز', 'شحن الغاز', 'تمديدات الخليج'],
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        title: 'خدمات تمديدات الخليج - حلول غاز متكاملة',
        description: 'خدمات تصميم وتركيب وصيانة وشحن شبكات الغاز بمعايير جودة عالمية',
        url: 'https://taamco.com/services',
        images: [{ 
            url: 'https://taamco.com/assets/services-og.jpg',
            width: 1200,
            height: 630,
            alt: 'خدمات تمديدات الخليج المتكاملة لشبكات الغاز'
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'خدمات تمديدات الخليج',
        description: 'خدمات متكاملة لشبكات الغاز - تصميم وتركيب وصيانة وشحن',
        images: ['https://taamco.com/assets/services-og.jpg'],
    }
};
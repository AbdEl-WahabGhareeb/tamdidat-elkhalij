import { generateMetadata } from '../metadata-generator';

export const metadata = {
    ...generateMetadata('/services'),
    title: 'الخدمات | تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
    description: 'خدمات شركة تمديدات الخليج المتخصصة في تصميم وتركيب وصيانة وشحن شبكات الغاز للمشاريع السكنية والتجارية والصناعية في المملكة العربية السعودية',
    openGraph: {
        title: 'خدمات تمديدات الخليج',
        description: 'خدمات متكاملة لشبكات الغاز - تصميم، تركيب، صيانة، وشحن خزانات',
        images: [{ 
            url: '/assets/services-og.jpg',
            width: 1200,
            height: 630,
            alt: 'خدمات تمديدات الخليج'
        }],
    },
};
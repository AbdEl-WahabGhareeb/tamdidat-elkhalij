import { Metadata } from 'next';
import { generateAlternateLinks, SITE_URL } from '@/lib/i18n';

export function generateMetadata(path: string = '/'): Metadata {
  const alternateLinks = generateAlternateLinks(path);
  const ogImage = `${SITE_URL}/assets/og-image.jpg`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: '%s | تمديدات الخليج المبتكرة',
      default: 'تمديدات الخليج المبتكرة - خدمات تمديد الغاز في السعودية | تصميم وتركيب وصيانة'
    },
    description: 'تمديدات الخليج المبتكرة - شركة سعودية رائدة في تصميم وتركيب وصيانة شبكات الغاز. خدمات متكاملة للمشاريع السكنية والتجارية والصناعية مع معايير جودة عالمية. اتصل بنا الآن.',
    keywords: [
      'تمديدات الغاز',
      'شبكات الغاز',
      'صيانة الغاز',
      'شحن خزانات الغاز',
      'خدمات الغاز في السعودية',
      'تمديدات الخليج',
      'تصميم شبكات الغاز',
      'تركيب شبكات الغاز',
      'صيانة شبكات الغاز',
      'غاز مركزي',
      'خزان غاز',
      'تامكو',
      'taamco'
    ],
    publisher: 'تمديدات الخليج المبتكرة',
    applicationName: 'تمديدات الخليج المبتكرة',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'تمديدات الخليج المبتكرة' }],
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    verification: {
      google: 'WrItQ08BRXtWf6oCMt3qJBj16zucGd1oRKttlFafcWs'
    },
    alternates: {
      canonical: alternateLinks.find(link => link.rel === 'canonical')?.href,
      languages: Object.fromEntries(
        alternateLinks
          .filter(link => link.rel === 'alternate' && link.hrefLang !== 'x-default')
          .map(link => [link.hrefLang, link.href])
      )
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
      alternateLocale: ['en_US'],
      url: SITE_URL,
      siteName: 'تمديدات الخليج المبتكرة',
      title: 'تمديدات الخليج المبتكرة - خدمات تمديد الغاز في السعودية',
      description: 'شركة سعودية رائدة متخصصة في تصميم وتركيب وصيانة شبكات الغاز والخدمات المتكاملة. فريق معتمد وخبرة تزيد عن 15 عاماً.',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'تمديدات الخليج المبتكرة - خدمات الغاز المتكاملة',
          type: 'image/jpeg',
          secureUrl: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tamdidat_elkhalij',
      creator: '@tamdidat_elkhalij',
      title: 'تمديدات الخليج المبتكرة - خدمات تمديد الغاز',
      description: 'شركة سعودية رائدة في تصميم وتركيب وصيانة شبكات الغاز - خدمات متكاملة',
      images: [ogImage],
    },
  };
}
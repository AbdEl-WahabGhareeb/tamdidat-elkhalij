export const generateBreadcrumbSchema = (path: string) => {
  const breadcrumbs: { name: string; url: string }[] = [
    { name: 'الرئيسية', url: 'https://taamco.com' }
  ];

  const pathSegments = path.split('/').filter(Boolean);
  let currentPath = 'https://taamco.com';

  const breadcrumbLabels: { [key: string]: string } = {
    services: 'الخدمات',
    installation: 'تصميم وتركيب',
    maintenance: 'الصيانة',
    shipping: 'شحن الغاز',
    about: 'عن الشركة',
  };

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: breadcrumbLabels[segment] || segment,
      url: currentPath,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

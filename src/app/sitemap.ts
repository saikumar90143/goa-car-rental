import { siteConfig } from '@/lib/config';
import { getAllCarSlugs } from '@/data/cars';

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  // Define static routes
  const staticRoutes = [
    '',
    '/cars',
    '/about',
    '/contact',
    '/book-now',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cancellation-policy',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic car routes
  const carSlugs = getAllCarSlugs();
  const carRoutes = carSlugs.map(({ slug }) => ({
    url: `${baseUrl}/cars/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...carRoutes];
}

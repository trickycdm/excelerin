export default function sitemap () {
  const base = 'https://www.excelerin.co.uk'
  const routes = [
    '',
    '/about',
    '/services',
    '/jobs',
    '/jobs/ai-discovery-partnership',
    '/jobs/software-engineer',
    '/services/ai-consultancy',
    '/services/ai-readiness-assessments',
    '/services/ai-discovery-workshops',
    '/services/ai-training',
    '/services/ai-implementation',
    '/case-studies',
    '/contact',
    '/privacy',
    '/terms'
  ]
  const now = new Date().toISOString()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.7
  }))
}



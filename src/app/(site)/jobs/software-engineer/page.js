import SectionHeading from '@/components/section/SectionHeading'
import CTASection from '@/components/cta/CTASection'

export const metadata = {
  title: 'Software Engineer',
  description: 'Build practical AI‑enabled products and pipelines for SMEs. We value clarity, impact, and safe AI adoption.',
  alternates: { canonical: '/jobs/software-engineer' },
  openGraph: {
    type: 'article',
    title: 'Software Engineer — Excelerin',
    description: 'Build pragmatic features and AI‑enabled workflows for SMEs.',
    url: 'https://www.excelerin.co.uk/jobs/software-engineer'
  }
}

export default function JobSoftwareEngineer () {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: 'Software Engineer',
      description: 'Build pragmatic features and AI‑enabled workflows with Next.js/Node.js. Use AI responsibly to improve clarity and reliability.',
      hiringOrganization: { '@type': 'Organization', name: 'Excelerin', sameAs: 'https://www.excelerin.co.uk/' },
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: { '@type': 'Country', name: 'United Kingdom' },
      employmentType: 'CONTRACTOR',
      validThrough: '2099-12-31',
      url: 'https://www.excelerin.co.uk/jobs/software-engineer'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Jobs', item: 'https://www.excelerin.co.uk/jobs' },
        { '@type': 'ListItem', position: 2, name: 'Software Engineer', item: 'https://www.excelerin.co.uk/jobs/software-engineer' }
      ]
    }
  ]
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Jobs'
            title='Software Engineer'
            lead='Build clear, maintainable systems and apply AI tools responsibly to deliver outcomes for SMEs.'
            align='left'
          />

          <div className='mt-10 grid gap-10 lg:grid-cols-3'>
            <div className='lg:col-span-2 space-y-10 text-gray-700'>
              <section>
                <h3 className='text-xl font-semibold text-gray-900'>Overview</h3>
                <p className='mt-3'>Excelerin helps organisations adopt AI safely and practically. You’ll work across modern JavaScript stacks to ship pragmatic features, integrations, and small AI‑enabled services that are measurable and maintainable — across our own products as well as client integration work.</p>
              </section>

              <section className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>What you’ll do</h4>
                  <ul className='mt-3 space-y-2 list-disc list-inside'>
                    <li>Implement features across Next.js/Node.js, integrating third‑party APIs and data services.</li>
                    <li>Prototype and productionise AI‑assisted workflows (retrieval, classification, summarisation, automation).</li>
                    <li>Work on both our products and client integrations; scope clearly and hand off cleanly.</li>
                    <li>Set up and maintain CI/CD (e.g. GitHub Actions, Vercel, Docker) and keep deployments healthy.</li>
                    <li>Ship small, frequent changes with solid testing and clear observability.</li>
                    <li>Collaborate with consultants to translate outcomes into scoped, buildable work.</li>
                  </ul>
                </div>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>What you’ll bring</h4>
                  <ul className='mt-3 space-y-2 list-disc list-inside'>
                    <li>Strong JavaScript and TypeScript fundamentals; React/Next.js in production.</li>
                    <li>Experience with Node.js APIs, queues, and basic data modelling.</li>
                    <li>Comfort with AI tooling (OpenAI/Anthropic APIs, embeddings, vector stores, RAG basics).</li>
                    <li>Solid CI/CD skills (pipelines, environments, release hygiene).</li>
                    <li>Organised and comfortable in an agile environment (small PRs, standups, iteration).</li>
                    <li><span className='font-medium text-gray-900'>Knows the difference between “vibe coding” and “AI‑augmented engineering”.</span> You use AI to enhance clarity and correctness, not to skip design, tests, or security.</li>
                  </ul>
                </div>
              </section>

              <section className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>Role details</h4>
                  <ul className='mt-3 space-y-2'>
                    <li><span className='font-medium text-gray-900'>Type:</span> Contract or part‑time to start; potential to extend</li>
                    <li><span className='font-medium text-gray-900'>Location:</span> Remote (UK); Scotland preferred</li>
                    <li><span className='font-medium text-gray-900'>Stack:</span> Next.js, Node.js, TypeScript, Tailwind, Postgres/Prisma (or equivalent)</li>
                  </ul>
                </div>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>Nice to have</h4>
                  <ul className='mt-3 space-y-2'>
                    <li>Python for scripting or data tasks</li>
                    <li>Basic MLOps or data engineering familiarity</li>
                    <li>Observability (logging/metrics/tracing)</li>
                    <li>Security/gdpr awareness for AI features</li>
                  </ul>
                </div>
              </section>
            </div>

            <aside className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                <div className='rounded-2xl border border-gray-200 bg-gray-50 p-6'>
                  <h4 className='text-base font-semibold text-gray-900'>How to apply</h4>
                  <p className='mt-3 text-gray-700'>Share a few links (GitHub, projects) and note an example where you used AI to improve reliability or speed without compromising quality.</p>
                  <div className='mt-4'>
                    <a
                      href={'/contact?role=' + encodeURIComponent('Software Engineer')}
                      className='inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-gray-800'
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <CTASection title='Build practical AI for real businesses' subtitle='Help SMEs adopt AI safely and deliver measurable outcomes.' href={'/contact?role=' + encodeURIComponent('Software Engineer')} label='Apply now' />
    </>
  )
}



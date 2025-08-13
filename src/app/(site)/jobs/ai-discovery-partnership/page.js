import SectionHeading from '@/components/section/SectionHeading'
import CTASection from '@/components/cta/CTASection'

export const metadata = {
  title: 'Business Development Partner (AI Discovery)',
  description: 'Help us scale Excelerin’s AI consultancy by introducing prospects to our AI Discovery platform and driving qualified opportunities.',
  alternates: { canonical: '/jobs/ai-discovery-partnership' },
  openGraph: {
    type: 'article',
    title: 'Business Development Partner (AI Discovery) — Excelerin',
    description: 'Partner role helping scale our AI Discovery platform and qualified opportunities.',
    url: 'https://www.excelerin.co.uk/jobs/ai-discovery-partnership'
  }
}

export default function JobAIDiscoveryBDP () {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: 'Business Development Partner (AI Discovery)',
      description: 'Introduce prospects to our AI Discovery platform and drive qualified opportunities with warm handoffs to consultants.',
      hiringOrganization: { '@type': 'Organization', name: 'Excelerin', sameAs: 'https://www.excelerin.co.uk/' },
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: { '@type': 'Country', name: 'United Kingdom' },
      employmentType: 'CONTRACTOR',
      validThrough: '2099-12-31',
      url: 'https://www.excelerin.co.uk/jobs/ai-discovery-partnership'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Jobs', item: 'https://www.excelerin.co.uk/jobs' },
        { '@type': 'ListItem', position: 2, name: 'Business Development Partner (AI Discovery)', item: 'https://www.excelerin.co.uk/jobs/ai-discovery-partnership' }
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
            title='Business Development Partner (AI Discovery)'
            lead='Help us scale our AI consultancy by introducing the right prospects and amplifying value with AI‑generated insights.'
            align='left'
          />

          <div className='mt-10 grid gap-10 lg:grid-cols-3'>
            <div className='lg:col-span-2 space-y-10 text-gray-700'>
              <section>
                <h3 className='text-xl font-semibold text-gray-900'>Overview</h3>
                <p className='mt-3'>Excelerin helps SMEs adopt AI safely and practically. We use an AI Discovery platform to run a high‑quality, consistent first conversation with prospects — qualifying fit and surfacing actionable opportunities in minutes.</p>
                <p className='mt-3'>We’re looking for a Business Development Partner to introduce suitable prospects, shape early conversations using the platform’s insights, and collaborate with our consultants through to a warm handoff.</p>
              </section>

              <section className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>What you’ll do</h4>
                  <ul className='mt-3 space-y-2 list-disc list-inside'>
                    <li>Identify and approach AI‑interested organisations (SMEs and mid‑market).</li>
                    <li>Introduce prospects to our AI Discovery conversation and encourage completion.</li>
                    <li>Use AI‑generated assessments and talking points to run effective follow‑ups.</li>
                    <li>Coordinate warm handoffs to consultants for qualified opportunities.</li>
                    <li>Maintain relationships and spot expansion opportunities.</li>
                  </ul>
                </div>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>What you’ll bring</h4>
                  <ul className='mt-3 space-y-2 list-disc list-inside'>
                    <li>Track record in B2B business development or partnerships.</li>
                    <li>Comfort discussing AI opportunities and business outcomes (no coding required).</li>
                    <li>Strong communication and relationship management skills.</li>
                    <li>Proactive, organised, and comfortable working autonomously.</li>
                  </ul>
                </div>
              </section>

              <section className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>Role details</h4>
                  <ul className='mt-3 space-y-2'>
                    <li><span className='font-medium text-gray-900'>Type:</span> Partner/commission‑based</li>
                    <li><span className='font-medium text-gray-900'>Location:</span> Remote (UK); Scotland preferred for in‑person sessions</li>
                    <li><span className='font-medium text-gray-900'>Time:</span> Flexible; outcomes‑focused</li>
                  </ul>
                </div>
                <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                  <h4 className='text-base font-semibold text-gray-900'>Compensation</h4>
                  <p className='mt-3'>Commission‑based revenue share with performance bonuses. Specifics discussed during interview and aligned to opportunity value.</p>
                </div>
              </section>
            </div>

            <aside className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                <div className='rounded-2xl border border-gray-200 bg-gray-50 p-6'>
                  <h4 className='text-base font-semibold text-gray-900'>How to apply</h4>
                  <p className='mt-3 text-gray-700'>Send a short note about your background and why this role fits you. Include examples of relevant deals, partnerships, or networks.</p>
                  <div className='mt-4'>
                    <a
                      href={'/contact?role=' + encodeURIComponent('Business Development Partner (AI Discovery)')}
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

      <CTASection title='Help SMEs adopt AI safely and practically' subtitle='Join us to bring qualified opportunities and deliver real outcomes.' href={'/contact?role=' + encodeURIComponent('Business Development Partner (AI Discovery)')} label='Apply now' />
    </>
  )
}



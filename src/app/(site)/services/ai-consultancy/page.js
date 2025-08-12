import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Consultancy' }

export default function AIConsultancyPage () {
  return (
    <>
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Service'
            title='AI Consultancy'
            lead='Strategic guidance to identify opportunities, reduce risk, and roadmap your AI adoption.'
            align='left'
          />
          <div className='mt-8 grid gap-8 md:grid-cols-2'>
            <div className='space-y-4 text-gray-700'>
              <p>We help you cut through the noise to prioritise high–value AI initiatives that align to business outcomes. From opportunity mapping to governance and measurement, we make sure AI drives tangible benefit.</p>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Outcome-led strategy', icon: 'compass' },
                  { label: 'Use–case discovery', icon: 'lightbulb' },
                  { label: 'Risk & compliance', icon: 'shield-check' },
                  { label: 'Data readiness', icon: 'database' },
                  { label: 'Capability & org design', icon: 'academic-cap' },
                  { label: 'Roadmapping & KPIs', icon: 'rocket' }
                ].map((item) => (
                  <li key={item.label} className='flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm'>
                    <span className='inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-200'>
                      <Icon name={item.icon} className='h-5 w-5' />
                    </span>
                    <span className='text-gray-800'>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='rounded-2xl border border-gray-200 bg-gray-50 p-6'>
              <h3 className='text-base font-semibold text-gray-900'>Typical deliverables</h3>
              <ul className='mt-3 space-y-2 text-gray-700'>
                {[
                  'Executive briefing & strategy outline',
                  'Use–case backlog (prioritised)',
                  'Data & risk assessment',
                  'Operating model & capability plan',
                  '90–day implementation roadmap'
                ].map((d) => (
                  <li key={d} className='flex items-start gap-2'>
                    <svg className='mt-1 h-4 w-4 text-gray-900' viewBox='0 0 20 20' fill='currentColor'>
                      <path fillRule='evenodd' d='M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.432.018L3.29 9.97a1 1 0 1 1 1.42-1.407l3.17 3.2 6.54-6.61a1 1 0 0 1 1.283-.137Z' clipRule='evenodd' />
                    </svg>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        variant='timeline'
        tone='subtle'
        heading={{ eyebrow: 'How we work', title: 'A clear, practical approach', lead: 'Move from ideas to outcomes with confidence.' }}
        steps={[
          { icon: 'compass', title: 'Assess', description: 'Clarify objectives, risks, and readiness across data, process, and people.' },
          { icon: 'lightbulb', title: 'Discover', description: 'Identify and prioritise high–impact, feasible AI use cases.' },
          { icon: 'rocket', title: 'Implement', description: 'Pilot, measure, and scale solutions with governance.' },
          { icon: 'academic-cap', title: 'Train', description: 'Upskill key teams on safe and effective AI workflows.' },
        ]}
        aside={{
          title: 'What to expect',
          body: [
            'A focused advisory sprint designed to move quickly and reduce uncertainty.',
            'Most engagements take 2–6 weeks depending on scope and availability.'
          ],
          cta: { label: 'Book a discovery call', href: '/contact' }
        }}
      />


      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'How long does an initial engagement take?', a: 'Most advisory engagements run 2–6 weeks depending on scope and availability.' },
          { q: 'Can you work with non–technical teams?', a: 'Yes. Our approach is outcomes–focused and brings stakeholders along with clear language and practical steps.' },
          { q: 'What size of business do you work with?', a: 'We primarily support SMEs, but our team has run large–scale programmes for enterprise as well.' }
        ]}
      />

      <CTASection title='Ready to explore AI for your business?' subtitle='Book a discovery call — we’ll help you find the best next step.' />
    </>
  )
}



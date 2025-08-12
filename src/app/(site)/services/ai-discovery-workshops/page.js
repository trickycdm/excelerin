import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Discovery Workshops' }

export default function AIDiscoveryWorkshopsPage () {
  return (
    <>
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Service'
            title='AI Discovery Workshops'
            lead='Collaborative sessions to uncover high–impact, feasible AI use cases with clear next steps.'
            align='left'
          />
          <div className='mt-8 grid gap-8 md:grid-cols-2'>
            <div className='space-y-4 text-gray-700'>
              <p>Bring the right people together to explore where AI can create real value. We facilitate structured conversations and hands-on exercises to turn ideas into a prioritised plan.</p>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Facilitated ideation', icon: 'lightbulb' },
                  { label: 'Outcome alignment', icon: 'compass' },
                  { label: 'Risk & feasibility', icon: 'shield-check' },
                  { label: 'Data considerations', icon: 'database' },
                  { label: 'Hands-on examples', icon: 'academic-cap' },
                  { label: 'Quick wins focus', icon: 'rocket' }
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
              <h3 className='text-base font-semibold text-gray-900'>Typical outputs</h3>
              <ul className='mt-3 space-y-2 text-gray-700'>
                {[
                  'Use–case backlog (prioritised)',
                  'Value / effort matrix',
                  'Risk & feasibility notes',
                  'Prototype ideas & prompts',
                  'Next–step plan (30/60/90 days)'
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
        heading={{ eyebrow: 'How it works', title: 'From ideas to a focused plan', lead: 'Fast, collaborative and practical.' }}
        steps={[
          { icon: 'compass', title: 'Align', description: 'Set objectives, success metrics, and constraints with stakeholders.' },
          { icon: 'lightbulb', title: 'Explore', description: 'Map processes and pain points; surface candidate AI ideas.' },
          { icon: 'shield-check', title: 'Evaluate', description: 'Assess value, feasibility, data and risk for each idea.' },
          { icon: 'rocket', title: 'Prioritise', description: 'Rank opportunities and shape the first pilots.' }
        ]}
        aside={{
          title: 'Format & timing',
          body: [
            'Remote or on‑site sessions with your cross‑functional team.',
            'Typically 2–3 workshops over 1–2 weeks, or a single intensive day.'
          ],
          cta: { label: 'Book a workshop', href: '/contact' }
        }}
      />

      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'Who should attend?', a: 'A cross‑functional group: product/ops, domain experts, data/IT, and an exec sponsor.' },
          { q: 'What preparation is needed?', a: 'We share a short checklist (process examples, policies, key systems) to speed things up.' },
          { q: 'Do we need data or models ready?', a: 'No — we focus on business problems first and validate feasibility early.' }
        ]}
      />

      <CTASection title='Ready to run a discovery workshop?' subtitle='Book a session and leave with a prioritised plan.' />
    </>
  )
}



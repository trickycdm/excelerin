import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Discovery Workshops', description: 'Structured, collaborative AI discovery workshops for SMEs to uncover high‑value use cases, assess feasibility and risk, and leave with a prioritised plan.' }

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

      {/* Who we help / Why Excelerin */}
      <section className='bg-gray-50 border-y border-gray-200'>
        <div className='container py-16 sm:py-20'>
          <div className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div>
                <h3 className='text-base font-semibold text-gray-900'>Who we help</h3>
                <ul className='mt-3 space-y-2 text-gray-700'>
                  {[
                    'Leaders wanting clarity on where to start with AI',
                    'Ops and product teams seeking quick wins and pilot ideas',
                    'Data/IT teams needing alignment on feasibility and constraints',
                    'Cross‑functional groups aligning on outcomes and governance'
                  ].map((text) => (
                    <li key={text} className='flex items-start gap-2'>
                      <svg className='mt-1 h-4 w-4 text-gray-900' viewBox='0 0 20 20' fill='currentColor'>
                        <path fillRule='evenodd' d='M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.432.018L3.29 9.97a1 1 0 1 1 1.42-1.407l3.17 3.2 6.54-6.61a1 1 0 0 1 1.283-.137Z' clipRule='evenodd' />
                      </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-base font-semibold text-gray-900'>Why Excelerin</h3>
                <ul className='mt-3 space-y-2 text-gray-700'>
                  {[
                    'SME‑focused facilitation with practical outputs',
                    'Vendor‑neutral, outcome‑led approach',
                    'Security, privacy, and GDPR considerations built in',
                    'Clear next steps with prioritised pilots and KPIs'
                  ].map((text) => (
                    <li key={text} className='flex items-start gap-2'>
                      <svg className='mt-1 h-4 w-4 text-gray-900' viewBox='0 0 20 20' fill='currentColor'>
                        <path fillRule='evenodd' d='M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.432.018L3.29 9.97a1 1 0 1 1 1.42-1.407l3.17 3.2 6.54-6.61a1 1 0 0 1 1.283-.137Z' clipRule='evenodd' />
                      </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        variant='timeline'
        tone='white'
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

      {/* Workshop formats */}
      <section className='bg-gray-50 border-y border-gray-200'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading eyebrow='Formats' title='Workshop formats' lead='Pick the format that suits your team and timeline.' />
          <ul className='mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[{
              title: 'Ideation sprint',
              meta: '1 day',
              desc: 'Intensive workshop to generate and shortlist high‑value ideas.'
            }, {
              title: 'Series',
              meta: '2–3 sessions',
              desc: 'Structured exploration, evaluation, and prioritisation with homework between sessions.'
            }, {
              title: 'Executive session',
              meta: '90 minutes',
              desc: 'Leadership briefing and targeted ideation aligned to strategic outcomes.'
            }].map((item) => (
              <li key={item.title} className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-gray-900'>{item.title}</h3>
                  <span className='text-xs font-medium text-gray-600'>{item.meta}</span>
                </div>
                <p className='mt-2 text-gray-700'>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'Who should attend?', a: 'A cross‑functional group: product/ops, domain experts, data/IT, and an exec sponsor.' },
          { q: 'What preparation is needed?', a: 'We share a short checklist (process examples, policies, key systems) to speed things up.' },
          { q: 'Do we need data or models ready?', a: 'No — we focus on business problems first and validate feasibility early.' },
          { q: 'Remote or in person?', a: 'Either. Remote sessions are effective and flexible; on‑site is great for momentum.' },
          { q: 'What do we leave with?', a: 'A prioritised use‑case backlog, value/effort matrix, risk/feasibility notes, and a next‑step plan.' }
        ]}
      />

      <CTASection title='Ready to run a discovery workshop?' subtitle='Book a session and leave with a prioritised plan.' />
    </>
  )
}



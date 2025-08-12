import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Implementation', description: 'Design, build, and deploy AI solutions for SMEs in any sector — integrate with workflows, measure outcomes, and scale responsibly.' }

export default function AIImplementationPage () {
  return (
    <>
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Service'
            title='AI Implementation'
            lead='Design, build, and deploy AI solutions that integrate with your workflows and deliver measurable outcomes.'
            align='left'
          />
          <div className='mt-8 grid gap-8 md:grid-cols-2'>
            <div className='space-y-4 text-gray-700'>
              <p>From shaping an MVP to scaling across teams, we implement AI responsibly with the right mix of product, data, and change management.</p>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Solution design', icon: 'compass' },
                  { label: 'MVP prototyping', icon: 'lightbulb' },
                  { label: 'Data & infrastructure', icon: 'database' },
                  { label: 'Integration & automation', icon: 'rocket' },
                  { label: 'Measurement & KPIs', icon: 'shield-check' },
                  { label: 'Governance & rollout', icon: 'academic-cap' }
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
                  'Technical architecture & implementation plan',
                  'MVP or pilot solution',
                  'Integrations (apps, data, automations)',
                  'Evaluation & risk report',
                  'Rollout & change plan'
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
                    'Owner‑managed and non‑technical teams',
                    'Any sector — manufacturing, trades, professional services, retail, public/third sector',
                    'Teams moving from pilot to production',
                    'Businesses needing safe integrations and change support'
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
                    'Vendor‑neutral choices aligned to your environment and budget',
                    'Security, privacy, and GDPR built in',
                    'Outcome‑led delivery with clear KPIs',
                    'Right‑sized engagement for SMEs'
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
        heading={{ eyebrow: 'How it works', title: 'Pilot to scale, safely', lead: 'Prove value early, integrate, and scale with governance.' }}
        steps={[
          { icon: 'compass', title: 'Design', description: 'Define scope, success metrics, risks, and technical approach.' },
          { icon: 'lightbulb', title: 'Prototype', description: 'Build an MVP with real data and workflows to validate value.' },
          { icon: 'database', title: 'Integrate', description: 'Connect systems, automate steps, and ensure quality and security.' },
          { icon: 'rocket', title: 'Launch & scale', description: 'Roll out, measure KPIs, and iterate with governance.' }
        ]}
        aside={{
          title: 'Timeline & engagement',
          body: [
            'Pilot sprints typically run 3–6 weeks with weekly check‑ins.',
            'We can embed with your team or deliver end‑to‑end.'
          ],
          cta: { label: 'Plan your pilot', href: '/contact' }
        }}
      />

      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'Can you work with our engineers?', a: 'Yes — we pair with in‑house teams or deliver independently depending on your needs.' },
          { q: 'What stack do you use?', a: 'We select tools to fit the problem and your environment — cloud APIs, LLMs, orchestration and vector stores as needed.' },
          { q: 'How do you handle risk?', a: 'We address security, privacy, and model risk with guardrails, reviews, and measurement from the start.' }
        ]}
      />

      <CTASection title='Ready to implement an AI pilot?' subtitle='Let’s design a focused MVP that proves value fast.' />
    </>
  )
}



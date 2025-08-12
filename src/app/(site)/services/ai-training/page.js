import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Training' }

export default function AITrainingPage () {
  return (
    <>
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Service'
            title='AI Training'
            lead='Practical, role‑based training to help teams use AI safely and effectively.'
            align='left'
          />
          <div className='mt-8 grid gap-8 md:grid-cols-2'>
            <div className='space-y-4 text-gray-700'>
              <p>We design hands‑on sessions tailored to your workflows. Participants learn by doing with your tools and data, leaving with reusable patterns and guardrails.</p>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Role‑based curricula', icon: 'academic-cap' },
                  { label: 'Safe usage & policies', icon: 'shield-check' },
                  { label: 'Prompting & evaluation', icon: 'lightbulb' },
                  { label: 'Real‑world workflows', icon: 'compass' },
                  { label: 'Tooling & integrations', icon: 'database' },
                  { label: 'Impact measurement', icon: 'rocket' }
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
              <h3 className='text-base font-semibold text-gray-900'>Training formats</h3>
              <ul className='mt-3 space-y-2 text-gray-700'>
                {[
                  'Intro to AI for business',
                  'Prompting & evaluation fundamentals',
                  'Ops workflows with automation',
                  'Product & data team enablement',
                  'Custom team programmes'
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
        heading={{ eyebrow: 'How it works', title: 'Learn by doing', lead: 'Focused, hands‑on sessions with your context.' }}
        steps={[
          { icon: 'compass', title: 'Scope', description: 'Identify roles, workflows, and outcomes to target.' },
          { icon: 'lightbulb', title: 'Design', description: 'Create exercises, datasets, and examples relevant to your team.' },
          { icon: 'academic-cap', title: 'Deliver', description: 'Run interactive sessions with coaching and guardrails.' },
          { icon: 'rocket', title: 'Embed', description: 'Provide materials, follow‑ups, and measurement to sustain impact.' }
        ]}
        aside={{
          title: 'Format & timing',
          body: [
            'Workshops from 2 hours to 1 day; programmes over 2–4 weeks.',
            'Remote or on‑site. Materials provided.'
          ],
          cta: { label: 'Plan a training', href: '/contact' }
        }}
      />

      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'Do you certify participants?', a: 'We provide completion certificates and can align with internal L&D frameworks.' },
          { q: 'Can you tailor to our tools?', a: 'Yes — we adapt to your stack and create examples with your data where possible.' },
          { q: 'How do you measure success?', a: 'Pre/post measures and follow‑ups focus on workflow gains and safe usage.' }
        ]}
      />

      <CTASection title='Ready to upskill your teams?' subtitle='Design a training plan that sticks.' />
    </>
  )
}



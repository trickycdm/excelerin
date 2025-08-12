import SectionHeading from '@/components/section/SectionHeading'
import Icon from '@/components/icons/Icon'
import ProcessSteps from '@/components/process/ProcessSteps'
import FAQAccordion from '@/components/faq/FAQAccordion'
import CTASection from '@/components/cta/CTASection'

export const metadata = { title: 'AI Readiness Assessments' }

export default function AIReadinessAssessmentsPage () {
  return (
    <>
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Service'
            title='AI Readiness Assessments'
            lead='Evaluate your data, processes, and risk posture to de‑risk AI and identify the right starting points.'
            align='left'
          />
          <div className='mt-8 grid gap-8 md:grid-cols-2'>
            <div className='space-y-4 text-gray-700'>
              <p>We provide a pragmatic view of where you are today and what’s needed to enable safe, effective AI. Clear recommendations, prioritised actions, and a path forward.</p>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Data quality & access', icon: 'database' },
                  { label: 'Security & privacy', icon: 'shield-check' },
                  { label: 'Processes & change', icon: 'compass' },
                  { label: 'Capability & training', icon: 'academic-cap' },
                  { label: 'Use‑case fit & value', icon: 'lightbulb' },
                  { label: 'Measurement & KPIs', icon: 'rocket' }
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
              <h3 className='text-base font-semibold text-gray-900'>What you get</h3>
              <ul className='mt-3 space-y-2 text-gray-700'>
                {[
                  'Readiness score & findings',
                  'Risk register & mitigations',
                  'Data & access recommendations',
                  'Prioritised action plan',
                  'Roadmap options (30/60/90 days)'
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
        heading={{ eyebrow: 'How it works', title: 'Clarity before code', lead: 'Understand risks and enablers, then act with confidence.' }}
        steps={[
          { icon: 'compass', title: 'Kick‑off', description: 'Align on scope, stakeholders, and context.' },
          { icon: 'database', title: 'Assess', description: 'Review data, systems, controls, and workflows.' },
          { icon: 'shield-check', title: 'Evaluate risk', description: 'Identify risks and define mitigations and guardrails.' },
          { icon: 'rocket', title: 'Recommend', description: 'Provide readiness score and prioritised action plan.' }
        ]}
        aside={{
          title: 'Timing',
          body: [
            'Most assessments complete in 2–4 weeks with light stakeholder input.',
            'We can tailor depth by risk level and regulatory needs.'
          ],
          cta: { label: 'Request an assessment', href: '/contact' }
        }}
      />

      <FAQAccordion
        heading={{ eyebrow: 'FAQ', title: 'Common questions' }}
        faqs={[
          { q: 'What access do you need?', a: 'We work with interviews, sample data schemas, and read‑only access where possible.' },
          { q: 'Will this slow delivery down?', a: 'No — the goal is to reduce risk and accelerate progress by focusing on what matters.' },
          { q: 'Is this vendor specific?', a: 'No — our approach is technology‑agnostic and tailored to your environment.' }
        ]}
      />

      <CTASection title='Ready to assess AI readiness?' subtitle='Get a clear view of risks, enablers, and priorities.' />
    </>
  )
}



import PropTypes from 'prop-types'
import Icon from '@/components/icons/Icon'
import Link from 'next/link'
import SectionHeading from '@/components/section/SectionHeading'

export default function ProcessSteps ({ heading, steps, variant = 'cards', tone = 'white', aside }) {
  const sectionBg = tone === 'subtle' ? 'bg-gray-50' : 'bg-white'
  const sectionBorder = tone === 'subtle' ? 'border-y border-gray-200' : ''

  if (variant === 'timeline') {
    return (
      <section className={`${sectionBg} ${sectionBorder}`}>
        <div className='container py-16 sm:py-20'>
          {heading && (
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} lead={heading.lead} />
          )}

          <div className='mt-10 mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.6fr_1fr]'>
            {/* Timeline column */}
            <div>
              <ol className='relative space-y-8 before:absolute before:left-5 before:top-0 before:bottom-0 before:w-px before:bg-gray-200'>
                {steps.map((step, idx) => (
                  <li key={step.title} className='relative pl-14'>
                    <span className='absolute left-5 top-1.5 z-10 inline-flex h-9 w-9 -translate-x-1/2 transform items-center justify-center rounded-full bg-white text-gray-900 ring-2 ring-gray-200'>
                      <Icon name={step.icon} className='h-5 w-5' />
                    </span>
                    <p className='text-xs font-medium text-gray-500'>Step {idx + 1}</p>
                    <h3 className='mt-1 text-lg font-semibold text-gray-900'>{step.title}</h3>
                    <p className='mt-2 text-gray-600'>{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Aside column */}
            {aside && (
              <aside>
                <div className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24'>
                  {aside.title && (
                    <h3 className='text-base font-semibold text-gray-900'>{aside.title}</h3>
                  )}
                  {aside.body && (
                    <div className='mt-2 space-y-3 text-gray-600'>
                      {Array.isArray(aside.body)
                        ? aside.body.map((p, i) => (<p key={i}>{p}</p>))
                        : <p>{aside.body}</p>}
                    </div>
                  )}
                  {aside.cta && aside.cta.href && aside.cta.label && (
                    <div className='mt-5'>
                      <Link href={aside.cta.href} className='inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
                        {aside.cta.label}
                      </Link>
                    </div>
                  )}
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Default: card grid
  return (
    <section className={sectionBg}>
      <div className='container py-16 sm:py-20'>
        {heading && (
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} lead={heading.lead} />
        )}
        <ol className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, idx) => (
            <li key={step.title} className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
              <span className='inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-200'>
                <Icon name={step.icon} className='h-6 w-6' />
              </span>
              <p className='mt-3 text-xs font-medium text-gray-500'>Step {idx + 1}</p>
              <h3 className='mt-1 text-lg font-semibold text-gray-900'>{step.title}</h3>
              <p className='mt-2 text-gray-600'>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

ProcessSteps.propTypes = {
  heading: PropTypes.shape({ eyebrow: PropTypes.string, title: PropTypes.string, lead: PropTypes.string }),
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  variant: PropTypes.oneOf(['cards', 'timeline']),
  tone: PropTypes.oneOf(['white', 'subtle']),
  aside: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    cta: PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })
  })
}



import PropTypes from 'prop-types'
import SectionHeading from '@/components/section/SectionHeading'

export default function FAQAccordion ({ heading, faqs }) {
  return (
    <section className='bg-white'>
      <div className='container py-16 sm:py-20'>
        {heading && (
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} lead={heading.lead} />
        )}
        <div className='mx-auto mt-10 max-w-3xl'>
          <div className='hs-accordion-group' data-hs-accordion='{ "toggleClass": "active" }'>
            {faqs.map((item, idx) => (
              <div key={idx} className={`hs-accordion rounded-xl border border-gray-200 bg-white ${idx > 0 ? 'mt-4' : ''}`}>
                <button type='button' className='hs-accordion-toggle flex w-full items-center justify-between px-5 py-4 text-left'>
                  <span className='text-base font-medium text-gray-900'>{item.q}</span>
                  <svg className='h-5 w-5 text-gray-500 hs-accordion-active:hidden block' viewBox='0 0 20 20' fill='currentColor'>
                    <path fillRule='evenodd' d='M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1Z' clipRule='evenodd' />
                  </svg>
                  <svg className='h-5 w-5 text-gray-500 hs-accordion-active:block hidden' viewBox='0 0 20 20' fill='currentColor'>
                    <path fillRule='evenodd' d='M4 9h12a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2Z' clipRule='evenodd' />
                  </svg>
                </button>
                <div className='hs-accordion-content hidden overflow-hidden transition-[height] duration-300'>
                  <div className='px-5 pb-5 text-gray-700'>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

FAQAccordion.propTypes = {
  heading: PropTypes.shape({ eyebrow: PropTypes.string, title: PropTypes.string, lead: PropTypes.string }),
  faqs: PropTypes.arrayOf(PropTypes.shape({ q: PropTypes.string.isRequired, a: PropTypes.string.isRequired })).isRequired
}



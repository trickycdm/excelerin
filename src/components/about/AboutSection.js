import Link from 'next/link'
import PropTypes from 'prop-types'

export function AboutSection ({
  title = 'About Us',
  paragraphs = []
}) {
  return (
    <section aria-labelledby='about-heading' className='relative isolate overflow-hidden bg-gray-50'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-10 right-10 h-40 w-40 rounded-full bg-gray-200/70 blur-3xl' />
      </div>
      <div className='container py-16 sm:py-20'>
        <div className='mx-auto max-w-3xl'>
          <h2 id='about-heading' className='text-3xl font-semibold text-gray-900 sm:text-4xl'>{title}</h2>
          <div className='mt-5 space-y-4 text-gray-700 text-lg'>
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className='mt-8'>
            <Link href='/about' className='inline-flex items-center text-gray-900 font-medium hover:underline'>
              Learn more about us
              <svg className='ml-1 h-4 w-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
                <path fillRule='evenodd' d='M3 10a1 1 0 0 1 1-1h9.586L11.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 0 1-1-1Z' clipRule='evenodd' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutSection.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string)
}

export default AboutSection



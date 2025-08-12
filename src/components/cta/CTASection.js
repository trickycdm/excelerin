import Link from 'next/link'
import PropTypes from 'prop-types'

export default function CTASection ({ title, subtitle, href = '/contact', label = 'Book a discovery call' }) {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='container py-16 sm:py-20'>
        <div className='relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 px-6 py-12 text-white shadow-sm sm:px-10'>
          <div className='absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(white,transparent_65%)]'>
            <div className='absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white blur-3xl' />
            <div className='absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white blur-3xl' />
          </div>
          <div className='mx-auto max-w-3xl text-center'>
            <h3 className='text-2xl font-semibold sm:text-3xl'>{title}</h3>
            {subtitle && <p className='mt-3 text-white/80'>{subtitle}</p>}
            <div className='mt-6'>
              <Link href={href} className='inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900'>
                {label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string
}



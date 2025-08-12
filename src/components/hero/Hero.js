import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function Hero ({
  eyebrow = 'Excelerin',
  title = 'Accelerate your business with AI',
  subtitle = 'Practical, risk-aware consultancy and implementation for SMEs across Scotland and the UK.',
  primaryCta = { href: '/contact', label: 'Book a discovery call' },
  secondaryCta = { href: '/services', label: 'See services' },
  imageSrc = '/excelerin.png'
}) {
  return (
    <section className='relative isolate overflow-hidden bg-white'>
      {/* background accents */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gray-200 blur-3xl opacity-60' />
        <div className='absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gray-100 blur-3xl opacity-60' />
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />
      </div>

      <div className='container py-20 sm:py-28'>
        <div className='grid items-center gap-12 md:grid-cols-2'>
          <div>
            <p className='text-xs uppercase tracking-widest text-gray-500'>{eyebrow}</p>
            <h1 className='mt-3 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl'>{title}</h1>
            <p className='mt-4 text-lg text-gray-600'>{subtitle}</p>

            {/* value chips */}
            <ul className='mt-6 flex flex-wrap gap-2'>
              {['Clarity', 'Practicality', 'Measurable outcomes', 'Risk-aware'].map((pill) => (
                <li key={pill} className='rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700'>
                  {pill}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href={primaryCta.href}
                aria-label={primaryCta.label}
                className='inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
                prefetch
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                aria-label={secondaryCta.label}
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-900 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                prefetch
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* trust blurb */}
            <p className='mt-6 text-sm text-gray-500'>From AI readiness to hands-on implementation — we guide SMEs from idea to execution.</p>
          </div>

          <div className='relative'>
            <div className='relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm'>
              <Image
                src={imageSrc}
                alt='Abstract Excelerin visual'
                fill
                sizes='(min-width: 1024px) 32rem, 100vw'
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primaryCta: PropTypes.shape({ href: PropTypes.string.isRequired, label: PropTypes.string.isRequired }),
  secondaryCta: PropTypes.shape({ href: PropTypes.string.isRequired, label: PropTypes.string.isRequired }),
  imageSrc: PropTypes.string
};

export default Hero;



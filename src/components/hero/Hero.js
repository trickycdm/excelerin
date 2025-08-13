import Link from 'next/link';
import PropTypes from 'prop-types';
import Threads from '@/components/backgrounds/Threads';
import RotatingText from '@/components/text/RotatingText';

export function Hero ({
  eyebrow = 'Practical AI for businesses',
  title = 'Make your business AI‑ready',
  subtitle = 'Approachable, outcome‑driven consultancy and implementation for businesses across Scotland and the UK — from idea to measurable results.',
  primaryCta = { href: '/contact', label: 'Book a discovery call' },
  secondaryCta = { href: '/services', label: 'See services' }
}) {
  return (
  <section className='relative isolate overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-[100svh]'>
      {/* background accents */}
      <div className='absolute inset-0 -z-10'>
        <Threads
          color={[0.65, 0.92, 0.88]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
          className='absolute inset-0'
        />
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gray-200 blur-3xl opacity-60' />
          <div className='absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gray-100 blur-3xl opacity-60' />
          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />
        </div>
      </div>

      <div className='container py-20 sm:py-28'>
        <div className='grid items-center gap-12'>
          <div className='max-w-full lg:max-w-[60%]'>
            <p className='text-xs uppercase tracking-widest text-gray-500'>{eyebrow}</p>
            <h1 className='mt-3 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl'>
              Make your business{' '}
              <span className='inline-flex items-baseline rounded-md bg-teal-200 text-gray-900 px-1.5 sm:px-2 py-0.5 sm:py-1 align-middle'>
                <span className='mr-0.5'>AI‑</span>
                <RotatingText
                  texts={['Aware', 'Trained', 'Empowered', 'Ready']}
                  loop
                  mainClassName='overflow-hidden'
                  staggerFrom='last'
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.02}
                  splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1'
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={1800}
                  pauseOnLastMs={7000}
                />
              </span>
            </h1>
            <p className='mt-4 text-lg text-gray-600'>{subtitle}</p>

            {/* value chips */}
            <ul className='mt-6 flex flex-wrap gap-2'>
              {['Accessible', 'Practical', 'Measured results', 'Privacy‑first'].map((pill) => (
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
            <p className='mt-6 text-sm text-gray-500'>From readiness and governance to hands‑on delivery — we guide businesses from idea to measurable wins.</p>
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
  secondaryCta: PropTypes.shape({ href: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
};

export default Hero;



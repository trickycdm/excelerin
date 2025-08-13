import PropTypes from 'prop-types';
import ServiceCard from '@/components/services/ServiceCard';

const serviceIntroBlurb = 'We use a custom built AI solution to get to know your business inside out. We then give you a simple, easy to understand roadmap showing where AI can fit into your business. Our team can then help implement and support bespoke solutions, as well as train your team and measure the results. We deliver safe, AI solutions that result in tangible results.'

export function ServicesGrid ({ services, gridClassName = 'mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3', eyebrow = 'Services', title = 'What we do', lead = serviceIntroBlurb }) {
  return (
    <section className='bg-white'>
      <div className='container py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-xs uppercase tracking-widest text-gray-500'>{eyebrow}</p>
          <h2 className='mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl'>{title}</h2>
          <p className='mt-4 text-gray-600'>{lead}</p>
        </div>

        <ul className={gridClassName}>
          {services.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </ul>
      </div>
    </section>
  );
}

ServicesGrid.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired
    })
  ).isRequired,
  gridClassName: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string
};

export default ServicesGrid;



import PropTypes from 'prop-types';
import ServiceCard from '@/components/services/ServiceCard';

export function ServicesGrid ({ services, gridClassName = 'mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <section className='bg-white'>
      <div className='container py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-xs uppercase tracking-widest text-gray-500'>Services</p>
          <h2 className='mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl'>What we do</h2>
          <p className='mt-4 text-gray-600'>Clear, outcome-focused services to unlock value from AI safely and effectively.</p>
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
  gridClassName: PropTypes.string
};

export default ServicesGrid;



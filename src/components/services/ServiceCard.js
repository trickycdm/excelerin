import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon } from '@/components/icons/Icon';

export function ServiceCard ({ href, icon, title, excerpt, className = '' }) {
  return (
    <li className={`group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 ${className}`}>
      <Link href={href} className='flex h-full flex-col'>
        <span className='inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-200'>
          <Icon name={icon} className='h-6 w-6' />
        </span>
        <h3 className='mt-4 text-lg font-semibold text-gray-900'>{title}</h3>
        <p className='mt-2 text-gray-600'>{excerpt}</p>
        <span className='mt-4 inline-flex items-center text-sm font-medium text-gray-900'>
          Learn more
          <svg className='ml-1 h-4 w-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
            <path fillRule='evenodd' d='M10.293 3.293a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 16 9h-3v7a1 1 0 1 1-2 0V9H8a1 1 0 1 1 0-2h8a1 1 0 0 1 .707-.293Z' clipRule='evenodd' />
          </svg>
        </span>
      </Link>
    </li>
  );
}

ServiceCard.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ServiceCard;



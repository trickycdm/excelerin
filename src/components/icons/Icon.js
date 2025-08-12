import PropTypes from 'prop-types';

function CompassIcon ({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
      <circle cx='12' cy='12' r='9' strokeWidth='2' />
      <path d='M14.5 9.5 10 10l-.5 4.5 4.5-.5.5-4.5Z' strokeWidth='2' />
    </svg>
  );
}

function ShieldCheckIcon ({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
      <path d='M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z' strokeWidth='2' />
      <path d='m8.5 12.5 2.5 2.5 4.5-4.5' strokeWidth='2' />
    </svg>
  );
}

function LightBulbIcon ({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
      <path d='M12 3a7 7 0 0 0-4 12c.6.6 1 1.3 1 2v1h6v-1c0-.7.4-1.4 1-2a7 7 0 0 0-4-12Z' strokeWidth='2' />
      <path d='M9 21h6' strokeWidth='2' />
    </svg>
  );
}

function AcademicCapIcon ({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
      <path d='M3 9 12 5l9 4-9 4-9-4Z' strokeWidth='2' />
      <path d='M7 12v4c1.7 1.2 3.5 2 5 2s3.3-.8 5-2v-4' strokeWidth='2' />
      <path d='M19 10v5' strokeWidth='2' />
    </svg>
  );
}

function RocketIcon ({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
      <path d='M7 14c-2 0-4 2-4 4 2-1 3-1 4 0 1-1 2-1 4 0 0-2-2-4-4-4Z' strokeWidth='2' />
      <path d='M14 3c3 0 7 4 7 7-3 1-6 3-9 6-2-2-4-4-6-6 3-3 5-6 8-7Z' strokeWidth='2' />
      <circle cx='15' cy='9' r='1.5' />
    </svg>
  );
}

export function Icon ({ name, className = 'h-6 w-6' }) {
  switch (name) {
    case 'compass':
      return <CompassIcon className={className} />;
    case 'shield-check':
      return <ShieldCheckIcon className={className} />;
    case 'lightbulb':
      return <LightBulbIcon className={className} />;
    case 'academic-cap':
      return <AcademicCapIcon className={className} />;
    case 'rocket':
      return <RocketIcon className={className} />;
    default:
      return <CompassIcon className={className} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;



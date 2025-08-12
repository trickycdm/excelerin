import PropTypes from 'prop-types';

export function Notice ({ type = 'info', title, children }) {
  const colors =
    type === 'success'
      ? 'bg-green-50 text-green-800 ring-green-200'
      : type === 'error'
        ? 'bg-red-50 text-red-800 ring-red-200'
        : 'bg-blue-50 text-blue-800 ring-blue-200';
  return (
    <div className={`rounded-lg p-4 ring-1 ${colors}`} role='status' aria-live='polite'>
      {title && <p className='font-medium'>{title}</p>}
      {children && <p className='mt-1 text-sm'>{children}</p>}
    </div>
  );
}

Notice.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error']),
  title: PropTypes.string,
  children: PropTypes.node
};

export default Notice;



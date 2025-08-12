import PropTypes from 'prop-types';

export function FormField ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  error,
  maxLength,
  children
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const baseInputClasses = 'mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900';
  const invalidClasses = error ? 'border-red-400 focus:border-red-600 focus:ring-red-600' : '';

  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='text-sm font-medium text-gray-900'>
        {label}{required ? ' *' : ''}
      </label>
      {children ?? (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          maxLength={maxLength}
          className={`${baseInputClasses} ${invalidClasses}`}
        />
      )}
      {error && (
        <p id={`${id}-error`} className='mt-1 text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  children: PropTypes.node
};

export default FormField;



import PropTypes from 'prop-types'

export default function SectionHeading ({ eyebrow, title, lead, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  return (
    <div className={`mx-auto ${alignClass} ${align === 'left' ? '' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className='text-xs uppercase tracking-widest text-gray-500'>{eyebrow}</p>
      )}
      {title && (
        <h2 className='mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl'>{title}</h2>
      )}
      {lead && (
        <p className='mt-3 text-gray-600'>{lead}</p>
      )}
    </div>
  )
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left'])
}



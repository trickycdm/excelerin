const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const SERVICE_OPTIONS = [
  'AI Consultancy',
  'AI Readiness Assessments',
  'AI Discovery Workshops',
  'AI Training',
  'AI Implementation',
  'Other'
];

export function sanitize (value) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

export function validateContactPayload (input) {
  const errors = {};
  const data = {
    name: sanitize(input.name).slice(0, 100),
    company: sanitize(input.company).slice(0, 100),
    email: sanitize(input.email).slice(0, 200),
    phone: sanitize(input.phone).slice(0, 30),
    service: sanitize(input.service),
    message: sanitize(input.message).slice(0, 2000),
    website: sanitize(input.website || '') // honeypot
  };

  if (!data.name) errors.name = 'Please enter your name.';
  if (!data.company) errors.company = 'Please enter your company.';
  if (!data.email || !EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!data.message || data.message.length < 10) errors.message = 'Tell us a little more (10+ characters).';
  if (!SERVICE_OPTIONS.includes(data.service)) errors.service = 'Select a service.';
  if (data.website) errors.form = 'Spam detected.';

  return { ok: Object.keys(errors).length === 0, errors, data };
}



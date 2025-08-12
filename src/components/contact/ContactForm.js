"use client";

import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import FormField from '@/components/forms/FormField';
import Notice from '@/components/notice/Notice';
import { SERVICE_OPTIONS, validateContactPayload } from '@/lib/validation/contact';

export default function ContactForm ({ defaultService }) {
  const options = useMemo(() => SERVICE_OPTIONS, []);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService && options.includes(defaultService) ? defaultService : options[0],
    message: '',
    consent: false,
    website: '' // honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const onChange = useCallback((e) => {
    const { id, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [id]: type === 'checkbox' ? checked : value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setResult(null);
    const { ok, errors: fieldErrors, data } = validateContactPayload(form);
    if (!ok) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error(json?.message || 'Failed to send message');
      }
      setResult({ type: 'success', message: 'Thanks—your message has been sent. We’ll reply shortly.' });
      setForm((f) => ({ ...f, message: '' }));
    } catch (err) {
      setResult({ type: 'error', message: err.message || 'Sending failed. Please email us instead.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [form]);

  const isDisabled = isSubmitting || !form.name || !form.company || !form.email || !form.message || !form.consent;

  return (
    <form onSubmit={handleSubmit} noValidate className='space-y-6'>
      {result?.type === 'success' && <Notice type='success' title='Message sent'>{result.message}</Notice>}
      {result?.type === 'error' && <Notice type='error' title='There was a problem'>{result.message}</Notice>}

      <div className='grid gap-6 sm:grid-cols-2'>
        <FormField id='name' label='Your name' value={form.name} onChange={onChange} required error={errors.name} maxLength={100} />
        <FormField id='company' label='Company' value={form.company} onChange={onChange} required error={errors.company} maxLength={100} />
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <FormField id='email' label='Email' type='email' value={form.email} onChange={onChange} required error={errors.email} maxLength={200} />
        <FormField id='phone' label='Phone (optional)' type='tel' value={form.phone} onChange={onChange} maxLength={30} />
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <FormField id='service' label='Service of interest' required error={errors.service}>
          <select
            id='service'
            value={form.service}
            onChange={onChange}
            className='mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900'
            aria-invalid={Boolean(errors.service)}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </FormField>
        {/* Honeypot (hidden) */}
        <div className='sr-only' aria-hidden='true'>
          <label htmlFor='website'>Website</label>
          <input id='website' type='text' value={form.website} onChange={onChange} autoComplete='off' tabIndex='-1' />
        </div>
      </div>

      <FormField id='message' label='How can we help?' error={errors.message}>
        <textarea
          id='message'
          value={form.message}
          onChange={onChange}
          rows={6}
          maxLength={2000}
          className='mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900'
          aria-invalid={Boolean(errors.message)}
          required
        />
      </FormField>

      <div className='flex items-start gap-3'>
        <input id='consent' type='checkbox' checked={form.consent} onChange={onChange} className='mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900' />
        <label htmlFor='consent' className='text-sm text-gray-700'>I consent to Excelerin contacting me about my enquiry.</label>
      </div>
      {errors.consent && <p className='text-sm text-red-600'>{errors.consent}</p>}

      <div>
        <button
          type='submit'
          disabled={isDisabled}
          className='inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow-sm transition-colors hover:bg-gray-800 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  defaultService: PropTypes.string
};



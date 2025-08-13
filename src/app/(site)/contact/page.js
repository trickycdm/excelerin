import ContactForm from '@/components/contact/ContactForm'
import { headers } from 'next/headers'

export const metadata = {
  title: 'Contact',
  description: 'Contact Excelerin — book a discovery call or send us a message. We’ll reply within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact — Excelerin',
    description: 'Get in touch to discuss AI opportunities and next steps for your business.',
    url: 'https://www.excelerin.co.uk/contact'
  }
}

export default function ContactPage () {
  const h = headers()
  const url = h.get('x-url') || ''
  const role = (() => {
    try {
      const u = new URL(url, 'http://localhost')
      return u.searchParams.get('role') || ''
    } catch (e) {
      return ''
    }
  })()
  return (
    <main className='container py-16'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='text-3xl font-semibold'>Tell us your goals</h1>
        <p className='mt-4 text-gray-600'>Share a few details and we’ll get back to you within one business day.</p>
      </div>
      <div className='mx-auto mt-8 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
        <ContactForm defaultService={role ? 'AI Consultancy' : undefined} />
        <p className='mt-6 text-sm text-gray-500'>Prefer email? Contact us at <a href='mailto:hello@excelerin.co.uk' className='underline'>hello@excelerin.co.uk</a>.</p>
      </div>
    </main>
  )
}



import ContactForm from '@/components/contact/ContactForm'

export const metadata = { title: 'Contact' }

export default function ContactPage () {
  return (
    <main className='container py-16'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='text-3xl font-semibold'>Tell us your goals</h1>
        <p className='mt-4 text-gray-600'>Share a few details and we’ll get back to you within one business day.</p>
      </div>
      <div className='mx-auto mt-8 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
        <ContactForm />
        <p className='mt-6 text-sm text-gray-500'>Prefer email? Contact us at <a href='mailto:hello@excelerin.co.uk' className='underline'>hello@excelerin.co.uk</a>.</p>
      </div>
    </main>
  )
}



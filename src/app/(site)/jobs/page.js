import SectionHeading from '@/components/section/SectionHeading'

export const metadata = {
  title: 'Jobs',
  description: 'Open roles at Excelerin.',
  alternates: { canonical: '/jobs' },
  openGraph: {
    type: 'website',
    title: 'Jobs — Excelerin',
    description: 'Join Excelerin to help SMEs adopt AI safely and practically.',
    url: 'https://www.excelerin.co.uk/jobs'
  }
}

export default function JobsPage () {
  return (
    <main className='bg-white'>
      <div className='container py-16 sm:py-20'>
        <SectionHeading eyebrow='Jobs' title='Join Excelerin' lead='Help SMEs adopt AI safely and practically.' align='left' />

        <ul className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <li className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-gray-900'>Business Development Partner (AI Discovery)</h3>
              <span className='text-xs font-medium text-gray-600'>Partner/Commission</span>
            </div>
            <p className='mt-2 text-gray-700'>Introduce prospects to our AI Discovery platform and drive qualified opportunities with warm handoffs to consultants.</p>
            <div className='mt-4 flex items-center gap-3'>
              <a href='/jobs/ai-discovery-partnership' className='inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-gray-800'>View role</a>
              <a href={'/contact?role=' + encodeURIComponent('Business Development Partner (AI Discovery)')} className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm transition-colors hover:bg-gray-50'>Apply</a>
            </div>
          </li>
          <li className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-gray-900'>Software Engineer</h3>
              <span className='text-xs font-medium text-gray-600'>Contract/Part‑time</span>
            </div>
            <p className='mt-2 text-gray-700'>Build pragmatic features and AI‑enabled workflows with Next.js/Node.js. Use AI responsibly to improve clarity and reliability.</p>
            <div className='mt-4 flex items-center gap-3'>
              <a href='/jobs/software-engineer' className='inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-gray-800'>View role</a>
              <a href={'/contact?role=' + encodeURIComponent('Software Engineer')} className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm transition-colors hover:bg-gray-50'>Apply</a>
            </div>
          </li>
        </ul>

        <p className='mt-10 text-sm text-gray-600'>Don’t see the right role? <a href='/contact' className='underline'>Get in touch</a> — we’re always happy to hear from talented people.</p>
      </div>
    </main>
  )
}



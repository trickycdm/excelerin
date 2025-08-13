export const metadata = {
  title: 'Terms',
  description: 'Excelerin terms of service.',
  alternates: { canonical: '/terms' },
  openGraph: {
    type: 'website',
    title: 'Terms — Excelerin',
    description: 'Terms of service for Excelerin.',
    url: 'https://www.excelerin.co.uk/terms'
  }
}

export default function TermsPage () {
  return (
    <main className='container py-16'>
      <h1 className='text-3xl font-semibold'>Terms</h1>
      <p className='mt-4 text-gray-600'>Placeholder terms of service.</p>
    </main>
  )
}



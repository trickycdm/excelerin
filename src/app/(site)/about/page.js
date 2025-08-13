export const metadata = {
  title: 'About',
  description: 'Excelerin is an AI consultancy helping SMEs across the UK adopt AI safely and practically — from strategy to implementation and training.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    title: 'About Excelerin',
    description: 'Who we are, how we work, and why SMEs choose Excelerin.',
    url: 'https://www.excelerin.co.uk/about'
  }
}

export default function AboutPage () {
  return (
    <main className='container py-16'>
      <h1 className='text-3xl font-semibold'>About Excelerin</h1>
      <p className='mt-4 text-gray-600'>Our mission, approach, and credentials.</p>
    </main>
  )
}



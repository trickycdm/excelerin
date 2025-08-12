export default function Home () {
  return (
    <div className='min-h-screen'>
      <main className='container py-16'>
        <section className='text-center max-w-3xl mx-auto'>
          <p className='text-sm uppercase tracking-wide text-gray-500'>Excelerin</p>
          <h1 className='mt-3 text-4xl sm:text-5xl font-semibold'>Accelerate your business with AI</h1>
          <p className='mt-4 text-lg text-gray-600'>Practical, risk-aware consultancy and implementation for SMEs.</p>
          <div className='mt-8 flex items-center justify-center gap-3'>
            <a href='/contact' className='inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
              Book a discovery call
            </a>
            <a href='/services' className='inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'>
              See services
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

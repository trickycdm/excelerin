'use client'

export default function Error ({ error, reset }) {
  return (
    <main className='container py-32 text-center'>
      <h1 className='text-4xl font-semibold'>Something went wrong</h1>
      <p className='mt-4 text-gray-600'>{error?.message || 'Unexpected error'}</p>
      <button onClick={() => reset?.()} className='mt-8 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800'>Try again</button>
    </main>
  )
}



import Link from 'next/link'

export default function NotFound () {
  return (
    <main className='container py-32 text-center'>
      <h1 className='text-4xl font-semibold'>Page not found</h1>
      <p className='mt-4 text-gray-600'>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href='/' className='mt-8 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800'>Go home</Link>
    </main>
  )
}



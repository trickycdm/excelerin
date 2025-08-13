import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='border-t border-gray-200 mt-24'>
      <div className='container py-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <p className='text-sm text-gray-600'>© {new Date().getFullYear()} Excelerin. All rights reserved.</p>
          <nav className='flex items-center gap-6'>
            <Link href='/services' className='text-sm text-gray-700 hover:text-gray-900'>Services</Link>
            <Link href='/jobs' className='text-sm text-gray-700 hover:text-gray-900'>Jobs</Link>
            <Link href='/privacy' className='text-sm text-gray-700 hover:text-gray-900'>Privacy</Link>
            <Link href='/terms' className='text-sm text-gray-700 hover:text-gray-900'>Terms</Link>
            <Link href='/contact' className='text-sm text-gray-700 hover:text-gray-900'>Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}



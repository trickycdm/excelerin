import Link from 'next/link'

export default function Header () {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container h-16 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link href='/' className='inline-flex items-center gap-2 font-semibold'>
            <span className='inline-block w-6 h-6 rounded bg-gray-900' aria-hidden />
            <span>Excelerin</span>
          </Link>
        </div>
        <nav className='hidden md:flex items-center gap-6'>
          <Link href='/services' className='text-sm text-gray-700 hover:text-gray-900'>Services</Link>
          <Link href='/about' className='text-sm text-gray-700 hover:text-gray-900'>About</Link>
          <Link href='/case-studies' className='text-sm text-gray-700 hover:text-gray-900'>Case Studies</Link>
          <Link href='/contact' className='inline-flex items-center justify-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800'>Contact</Link>
        </nav>
        <button type='button' className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300' aria-label='Open menu' data-hs-overlay='#mobile-menu'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' className='w-5 h-5'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
      <div id='mobile-menu' className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-gray-200 md:hidden z-50'>
        <div className='p-6 space-y-4'>
          <Link href='/services' className='block text-base text-gray-700'>Services</Link>
          <Link href='/about' className='block text-base text-gray-700'>About</Link>
          <Link href='/case-studies' className='block text-base text-gray-700'>Case Studies</Link>
          <Link href='/contact' className='block text-base text-gray-900 font-medium'>Contact</Link>
        </div>
      </div>
    </header>
  )
}



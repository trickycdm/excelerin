"use client";

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import Image from "next/image";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const onKeyDown = (e) => {
        if (e.key === 'Escape') closeMenu()
      }
      document.addEventListener('keydown', onKeyDown)
      // lock body scroll
      const { overflow } = document.body.style
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', onKeyDown)
        document.body.style.overflow = overflow
      }
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header className='sticky top-0 z-40 w-full border-b border-gray-200 bg-white'>
      <div className='container h-16 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link href='/' className='inline-flex items-center gap-2 font-semibold'>
            <Image src="/excelerin-logo.png" alt="Excelerin" width={24} height={24} />
            <span>Excelerin</span>
          </Link>
        </div>
        <nav className='hidden md:flex items-center gap-6'>
          <Link href='/services' className='text-sm text-gray-700 hover:text-gray-900'>Services</Link>
          <Link href='/about' className='text-sm text-gray-700 hover:text-gray-900'>About</Link>
          <Link href='/jobs' className='text-sm text-gray-700 hover:text-gray-900'>Jobs</Link>
          {/* <Link href='/case-studies' className='text-sm text-gray-700 hover:text-gray-900'>Case Studies</Link> */}
          <Link href='/contact' className='inline-flex items-center justify-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800'>Contact</Link>
        </nav>
        <button
          type='button'
          className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls='mobile-menu'
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' className='w-5 h-5'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' className='w-5 h-5'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        id='mobile-menu'
        className={`fixed inset-0 z-50 bg-white md:hidden transition-transform duration-200 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role='dialog'
        aria-modal='true'
      >
        <div className='container h-16 flex items-center justify-between border-b border-gray-200'>
          <span className='font-semibold'>Menu</span>
          <button
            type='button'
            className='inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300'
            aria-label='Close menu'
            onClick={closeMenu}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' className='w-5 h-5'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <nav className='px-4 sm:px-6 lg:px-8 py-6 space-y-4'>
          <Link href='/services' className='block text-base text-gray-700' onClick={closeMenu}>Services</Link>
          <Link href='/about' className='block text-base text-gray-700' onClick={closeMenu}>About</Link>
          <Link href='/jobs' className='block text-base text-gray-700' onClick={closeMenu}>Jobs</Link>
          <Link href='/case-studies' className='block text-base text-gray-700' onClick={closeMenu}>Case Studies</Link>
          <Link href='/contact' className='inline-flex items-center justify-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800' onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}



"use client";

import { useEffect } from 'react'

export default function PrelineInit () {
  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        const preline = await import('preline/dist/index.mjs')
        if (!isMounted) return
        if (typeof window !== 'undefined' && window?.HSStaticMethods?.autoInit) {
          window.HSStaticMethods.autoInit()
        } else if (preline?.HSStaticMethods?.autoInit) {
          preline.HSStaticMethods.autoInit()
        }
      } catch (err) {
        // no-op
      }
    }
    load()
    return () => { isMounted = false }
  }, [])

  return null
}



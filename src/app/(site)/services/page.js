import ServicesGrid from '@/components/services/ServicesGrid'

export const metadata = {
  title: 'Services',
  description: 'AI services for SMEs — consultancy, readiness assessments, discovery workshops, training, and implementation.',
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    title: 'Services — Excelerin',
    description: 'Explore Excelerin’s AI services for SMEs in any sector.',
    url: 'https://www.excelerin.co.uk/services'
  }
}

export default function ServicesPage () {
  const services = [
    { href: '/services/ai-consultancy', icon: 'compass', title: 'AI Consultancy', excerpt: 'Vendor‑neutral guidance to identify opportunities, reduce risk, and create a clear 90‑day plan.' },
    { href: '/services/ai-readiness-assessments', icon: 'shield-check', title: 'AI Readiness Assessments', excerpt: 'Independent view of data, risk, and processes with a prioritised 30/60/90‑day action plan.' },
    { href: '/services/ai-discovery-workshops', icon: 'lightbulb', title: 'AI Discovery Workshops', excerpt: 'Facilitated sessions to surface high‑value ideas and shape pilots with clear next steps.' },
    { href: '/services/ai-training', icon: 'academic-cap', title: 'AI Training', excerpt: 'Hands‑on, role‑based training for non‑technical and technical teams to use AI safely.' },
    { href: '/services/ai-implementation', icon: 'rocket', title: 'AI Implementation', excerpt: 'Design, build, and integrate AI solutions that deliver measurable outcomes.' }
  ]

  return (
    <>
      <ServicesGrid
        services={services}
        eyebrow='Services'
        title='AI services for every business'
        lead='We work with SMEs in any sector — from trades and manufacturing to professional services, retail, health, and the public/third sector.'
      />
    </>
  )
}



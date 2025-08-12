import Hero from '@/components/hero/Hero';
import ServicesGrid from '@/components/services/ServicesGrid';
import AboutSection from '@/components/about/AboutSection';

export default function Home () {
  return (
    <>
      <Hero />
      <AboutSection
        paragraphs={[
          'At Excelerin, we bring over 15 years of experience designing and delivering advanced technology solutions for organisations of all sizes — from nimble startups to some of the world’s best-known brands.',
          'Our roots are in big data and full-stack system development, but when the new wave of generative AI emerged in 2022, we recognised an opportunity to combine our deep technical expertise with this transformative technology to solve real business problems. Since then, we’ve been at the forefront of AI adoption, building some of the largest and most impactful AI systems in the industry.',
          'We’ve applied these capabilities not just for clients, but within our own network — including a complete AI-driven overhaul of a successful public affairs business, delivering measurable gains in efficiency, insight, and client service.',
          'Today, we help SMEs across the UK harness AI with clarity and confidence — guiding them from initial exploration through to practical, results-driven implementation.'
        ]}
      />
      <ServicesGrid
        services={[
          {
            href: '/services/ai-consultancy',
            icon: 'compass',
            title: 'AI Consultancy',
            excerpt: 'Strategic guidance to identify opportunities and roadmap your AI adoption.'
          },
          {
            href: '/services/ai-readiness-assessments',
            icon: 'shield-check',
            title: 'AI Readiness Assessments',
            excerpt: 'Evaluate data, processes, and risk to ensure safe and effective AI implementation.'
          },
          {
            href: '/services/ai-discovery-workshops',
            icon: 'lightbulb',
            title: 'AI Discovery Workshops',
            excerpt: 'Collaborative sessions to surface high-impact use cases tailored to your business.'
          },
          {
            href: '/services/ai-training',
            icon: 'academic-cap',
            title: 'AI Training',
            excerpt: 'Practical, hands-on training to upskill your teams on modern AI tools and methods.'
          },
          {
            href: '/services/ai-implementation',
            icon: 'rocket',
            title: 'AI Implementation',
            excerpt: 'Design, build, and deploy AI solutions that deliver measurable outcomes.'
          }
        ]}
      />
    </>
  )
}

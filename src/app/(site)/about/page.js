import SectionHeading from '@/components/section/SectionHeading';
import ProcessSteps from '@/components/process/ProcessSteps';
import CTASection from '@/components/cta/CTASection';
import Threads from '@/components/backgrounds/Threads';
import Icon from '@/components/icons/Icon';

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
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Excelerin',
    url: 'https://www.excelerin.co.uk/about',
    description: 'Who we are, how we work, and why SMEs choose Excelerin — practical, privacy-first AI for every business.',
    publisher: {
      '@type': 'Organization',
      name: 'Excelerin'
    }
  };

  return (
    <main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className='relative isolate overflow-hidden bg-gradient-to-br from-gray-50 to-white'>
        <div className='absolute inset-0 -z-10'>
          <Threads
            color={[0.65, 0.92, 0.88]}
            amplitude={0.8}
            distance={0.15}
            enableMouseInteraction
            className='absolute inset-0'
          />
          <div className='pointer-events-none absolute inset-0'>
            <div className='absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gray-200 blur-3xl opacity-60' />
            <div className='absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gray-100 blur-3xl opacity-60' />
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />
          </div>
        </div>
        <div className='container py-20 sm:py-28'>
          <div className='max-w-full lg:max-w-[68%]'>
            <p className='text-xs uppercase tracking-widest text-gray-500'>About Excelerin</p>
            <h1 className='mt-3 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl'>
              Practical AI, built for every business
            </h1>
            <p className='mt-4 text-lg text-gray-600'>
              We help SMEs across the UK adopt AI safely and effectively — from early discovery and readiness, to hands‑on implementation and training. Approachable, privacy‑first, and focused on measurable outcomes.
            </p>

            <ul className='mt-6 flex flex-wrap gap-2'>
              {['Approachable', 'Privacy‑first', 'Results‑driven', 'SME specialists'].map((pill) => (
                <li key={pill} className='rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700'>
                  {pill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Excelerin */}
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Why SMEs choose us'
            title='Clear guidance, safe delivery, measurable value'
            lead='We make AI accessible for non‑technical teams while respecting data privacy and organisational risk.'
          />

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {[{
              icon: 'lightbulb',
              title: 'Accessible & practical',
              body: 'Plain‑English guidance and hands‑on delivery. No hype, just outcomes.'
            }, {
              icon: 'shield-check',
              title: 'Privacy‑first & risk‑aware',
              body: 'Readiness, governance and safe adoption embedded from day one.'
            }, {
              icon: 'rocket',
              title: 'From idea to live',
              body: 'Discovery, design, build, training and iteration — end to end.'
            },
            {
              icon: 'database',
              title: 'Measured results',
              body: 'We track impact — time saved, errors reduced, revenue unlocked.'
            }].map((card) => (
              <div key={card.title} className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-200'>
                  <Icon name={card.icon} className='h-6 w-6' />
                </span>
                <h3 className='mt-3 text-lg font-semibold text-gray-900'>{card.title}</h3>
                <p className='mt-2 text-gray-600'>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <ProcessSteps
        variant='timeline'
        tone='subtle'
        heading={{
          eyebrow: 'How we work',
          title: 'A clear path from idea to impact',
          lead: 'Simple steps, minimal jargon, continuous measurement.'
        }}
        steps={[
          { icon: 'lightbulb', title: 'Discover opportunities', description: 'We explore your goals, processes, and challenges to surface high‑impact use cases.' },
          { icon: 'shield-check', title: 'Readiness & risk assessment', description: 'We assess data, governance, privacy, and operational readiness to de‑risk delivery.' },
          { icon: 'compass', title: 'Roadmap & design', description: 'We define a practical roadmap and design solutions aligned to your constraints.' },
          { icon: 'rocket', title: 'Build & integrate', description: 'We implement and integrate solutions with your tools and teams.' },
          { icon: 'academic-cap', title: 'Train & enable', description: 'We upskill your team to use and maintain solutions with confidence.' },
          { icon: 'database', title: 'Measure & iterate', description: 'We track value and refine — focusing on outcomes that matter.' }
        ]}
        aside={{
          title: 'What to expect',
          body: [
            'Straight‑talking guidance for non‑technical teams.',
            'Flexible engagements from workshops to delivery sprints.',
            'Clear metrics and simple documentation.'
          ],
          cta: { label: 'Book a discovery call', href: '/contact' }
        }}
      />

      {/* Our story */}
      <section className='bg-white'>
        <div className='container py-16 sm:py-20'>
          <SectionHeading
            eyebrow='Our story'
            title='Deep engineering roots, SME‑first mindset'
            align='left'
          />
          <div className='mt-6 max-w-3xl space-y-4 text-lg text-gray-700'>
            <p>We bring over 15 years of experience designing and delivering advanced technology solutions for organisations of all sizes — from nimble startups to some of the world’s best‑known brands.</p>
            <p>Our roots are in big data and full‑stack system development, but when the new wave of generative AI emerged in 2022, we recognised an opportunity to combine deep technical expertise with this transformative technology to solve real business problems.</p>
            <p>We’ve applied these capabilities not just for clients, but within our own network — including a complete AI‑driven overhaul of a successful public affairs business, delivering measurable gains in efficiency, insight, and client service.</p>
            <p>Today, we help SMEs harness AI with clarity and confidence — guiding them from initial exploration through to practical, results‑driven implementation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title='Ready to make your business AI‑ready?'
        subtitle='Let’s identify a small, high‑impact starting point and prove the value together.'
        href='/contact'
        label='Book a discovery call'
      />
    </main>
  );
}



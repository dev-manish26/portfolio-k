// app/page.tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Logofolio from '@/components/sections/Logofolio'
import Logos from '@/components/sections/Logos'
import PosterShowcase from '@/components/sections/PosterShowcase'
import Kriptees from '@/components/sections/Kriptees'
import Gallety from '@/components/sections/Gallery'
import Graphics from '@/components/sections/Graphics'
import Illustration from '@/components/sections/Illustration'

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about" className="scroll-mt-0">
        <About />
      </section>
      
      {/* Logofolio Section */}
      <section id="logofolio" className="scroll-mt-0">
        <Logofolio />
      </section>

      {/* Logos Section */}
      <section className="scroll-mt-0">
        <Logos />
      </section>

      {/* Graphics Section */}
      <section id="graphics" className="scroll-mt-0">
        <Graphics />
      </section>

      {/* PosterShowcase Section */}
      <section className="scroll-mt-0">
        <PosterShowcase />
      </section>
      
      {/* Kriptees Section */}
      <section className="scroll-mt-0">
        <Kriptees />
      </section>

      {/* Illustrations Section */}
      <section id="illustrations" className="scroll-mt-0">
        <Illustration />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="scroll-mt-0 m-0 p-0">
        <Gallety />
      </section>
      
      
      
    </main>
  )
}

// Metadata for SEO
export const metadata = {
  title: 'KR_SCRIBBLES - Creative Portfolio 2024',
  description: 'Explore the creative portfolio of KR_SCRIBBLES featuring logos, graphics, and illustrations.',
  keywords: 'portfolio, design, graphics, logos, illustrations, creative, art',
  authors: [{ name: 'KR_SCRIBBLES' }],
  openGraph: {
    title: 'KR_SCRIBBLES - Creative Portfolio 2024',
    description: 'Explore the creative portfolio featuring logos, graphics, and illustrations.',
    images: ['/images/og-image.jpg'], // Add your OG image
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KR_SCRIBBLES - Creative Portfolio 2024',
    description: 'Explore the creative portfolio featuring logos, graphics, and illustrations.',
    images: ['/images/og-image.jpg'],
  },
}
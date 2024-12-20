import Hero from '@/components/HorizontalScroll/HeroSection'
import VerticalScrolling from '@/components/VerticalScroll/VerticalScrolling'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
      <Hero />
      <VerticalScrolling />
    </div>
  )
}

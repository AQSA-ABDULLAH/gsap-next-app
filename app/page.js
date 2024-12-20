import Hero from '@/components/HorizontalScroll/HeroSection'
import HorScroll from '@/components/HorizontalScroll/HorSec'
import VerticalScrolling from '@/components/VerticalScroll/VerticalScrolling'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
      {/* <Hero /> */}
      <HorScroll />
      <VerticalScrolling />
    </div>
  )
}


import Hero from '@/components/HorizontalScroll/HeroSection'
import Scroll from '@/components/VerticalScroll/Scroll'
import VerticalScrolling from '@/components/VerticalScroll/VerticalScrolling'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
      {/* <Hero /> */}
      <VerticalScrolling />
      {/* <Scroll /> */}
    </div>
  )
}

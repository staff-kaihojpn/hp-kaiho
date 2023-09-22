import Image from 'next/image'

import HelloWorld from './hello.mdx'
import { HeroSection, ItemSection, AssessmentSection, ReviewSection } from './_components/Section'

export default function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <HeroSection />
      <ItemSection />
      <AssessmentSection />
      <ReviewSection />
      {/*<HelloWorld />*/}
    
    </div>
  )
}

import Image from 'next/image'

import HelloWorld from './hello.mdx'
import { HeroSection, ItemSection, AssessmentSection, ReviewSection, HowtoSection } from './_components/Section'

export default function Home() {
  return (
    <div className='flex flex-col whitespace-pre-wrap'>
      <HeroSection />
      <HowtoSection />
      <ItemSection />
      <AssessmentSection />
      <ReviewSection />
      {/*<HelloWorld />*/}
    
    </div>
  )
}

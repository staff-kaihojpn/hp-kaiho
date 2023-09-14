import Image from 'next/image'

import HelloWorld from './hello.mdx'
import { HeroSection, ItemSection, AssessmentSection, ReviewSection } from './_components/Section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ItemSection />
      <AssessmentSection />
      <ReviewSection />
      {/*<HelloWorld />*/}
    
    </>
  )
}

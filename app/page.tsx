import Image from 'next/image'

import HelloWorld from './hello.mdx'
import { HeroSection, ItemSection, AssessmentSection } from './_components/Section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ItemSection />
      <AssessmentSection />
      {/*<HelloWorld />*/}
    
    </>
  )
}

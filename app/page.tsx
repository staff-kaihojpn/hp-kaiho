import Image from 'next/image'

import HelloWorld from './hello.mdx'
import Hero from './_components/Hero'
import { Assessments, Items } from './_components/Section'

export default function Home() {
  return (
    <>
      <Hero />
      <Items />
      <Assessments />
      {/*<HelloWorld />*/}
    
    </>
  )
}

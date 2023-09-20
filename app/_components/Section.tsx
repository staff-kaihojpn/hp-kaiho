'use client'

import {GiJapan} from 'react-icons/gi'
import {BsChatLeftText} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {SiLine} from 'react-icons/si'
import {Card, ReviewCard} from './Card'
import Heading from './Heading'
import Image from 'next/image'
import classNames from 'classnames'
import { Button } from './Button'
import { digitalNumbers } from '@/app/styles/fonts'
import { CountUp } from 'use-count-up'


export type SectionProps = {
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
}
export function Section({title, description, className, children}:SectionProps) {
  return (
    <div className={classNames('w-full', className)}>
      <section className='px-6 mx-auto max-w-6xl'>
        <Heading className="py-16" title={title} description={description}/>
        {children}
      </section>
    </div>
  )
}


export function HeroSection() {
  const heading = {
    title: 
`ご自宅に眠っている
骨董品・古美術品
無料で査定いたします
`,
    description: 
`開豊ジャパンは、八王子市の古美術品店

古美術の確かな目利きと、高価買取実績があります。

眠ったままの骨董品、故人の思いの詰まった遺品など、
１点１点しっかり、丁寧に鑑定します。

どんなお品物でも高価買取、
LINEやチャットで、スピーディに鑑定・買取!!
`
  }
  return (
    <div className={classNames('w-full')} style={{backgroundImage:"linear-gradient(170deg, transparent 0%, transparent 25%, #D0E7D2 25%, #D0E7D2 80%, transparent 80%, transparent 100%)"}}>
      <section className='p-6 mx-auto max-w-6xl '>
        <div className='relative flex flex-col whitespace-pre-wrap gap-8'>
          {heading.title && 
            <h2 className='text-3xl md:max-w-xl text-center md:text-left tracking-widest leading-relaxed font-bold text-stone-900'>{heading.title}</h2>
          }
          {
            <div className="flex gap-6 md:max-w-xl justify-center md:justify-normal">
              <Button href="/" className=' bg-green-700 text-stone-50 rounded-full px-12' label="LINE査定" />
              <Button href="/" className=' bg-stone-50 border-stone-300 border rounded-full px-12' label="チャット相談" />
            </div>
          }

          <div className='mx-auto md:absolute md:top-0 md:right-0'>
              
            <div className='flex flex-col items-center mb-6 gap-2'>
              <p className='text-center fukidashi px-6 font-bold'>いまだけ！ LINE査定なら<br />査定額が、20%アップ</p>
            
              <div className='flex rounded-lg bg-stone-500 '>
                <p className='vertical-rl bg-stone-600 text-green-50 rounded-l-lg font-bold text-center'>査定額</p>
                <p className={classNames("inline-block text-5xl text-green-50 p-4 text-right", digitalNumbers.className)}>
                  <CountUp isCounting start={58000} end={63800} thousandsSeparator=',' duration={1.5} />
                </p>
              </div>
            </div>
            <Image className='' src={'/items/other.webp'} width={420} height={420} style={{objectFit:'contain'}} alt={'logo image'} />
          </div>
          
          {heading.description && 
            <p className='md:text-lg md:max-w-xl text-center md:text-left text-stone-700'>{heading.description}</p>
          }
          
        </div>
      </section>
    </div>
  )
}


export function ItemSection() {
  const heading = {
    title:"買取しています",
    description:'あなたの家族の大切にしていたものを、確かな目利きで高く買取いたします。'
  }

  const items = [
    {name:'金製品', src:'/items/gold.webp'},
    {name:'鉄瓶', src:'/items/iron.webp'},
    {name:'銀製品', src:'/items/silver.webp'},
    {name:'煎茶道具', src:'/items/sencha.webp'},
    {name:'竹花籠', src:'/items/basket.webp'},
    {name:'蒔絵', src:'/items/makie.webp'},
    {name:'御茶道具', src:'/items/tea.webp'},
    {name:'陶磁器', src:'/items/ceramics.webp'},
    {name:'仏教美術', src:'/items/statue.webp'},
    {name:'その他', src:'/items/other.webp'},
  ]

  return (
    <Section {...heading}>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item, i) => (
          <div className='flex flex-col items-center gap-2' style={{backgroundImage:"linear-gradient(170deg, transparent 0%, transparent 50%, #D0E7D2 50%, #D0E7D2 80%, transparent 80%, transparent 100%)"}} key={i}>
            <div className='relative aspect-square w-60 max-w-full'>
              <Image className='transition-filter-shadow filter-shadow-md hover:filter-shadow-lg' src={item.src} fill style={{objectFit:'contain'}} alt={item.name} />
            </div>
            <h3 className='text-center text-xl'>{item.name}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}


export const assessments = [
  {title:'LINE査定' , description:'LINEから写真を送るだけ' , icon:SiLine, href:'/assessments/line'},
  {title:'チャット査定' , description:'チャットでご相談ください' , icon:BsChatLeftText, href:'/assessments/chat'},
  {title:'メール査定' , description:'メールに写真を添付' , icon:AiOutlineMail, href:'/assessments/mail'},
  {title:'出張査定' , description:'スタッフが直接査定に伺います。"日本全国対応"' , icon:GiJapan, href:'/assessments/visit'},
]

export function AssessmentSection() {
  const heading = {
    title:"査定方法",
    description:'様々な鑑定・買取をさせていただいております、まずはお気軽にご相談ください。'
  }

  return (
    <Section {...heading}>
      <div className='grid grid-cols-2 gap-4'>
        {assessments.map((assessment, i) => (
          <Card className='flex-1 ' {...assessment} href={assessment.href} key={i}/>
        ))}
      </div>
    </Section>
  )
}

export function ReviewSection() {
  const heading = {
    title:"お客様の声",
    description:''
  }
  const reviews = [
    {title:'亡くなった父の遺品整理の際に利用しました', description:'亡くなった父が、集めていた骨董品の処分に困り、とりあえず鑑定してもらうため、開豊ジャパンさんに査定をお願いしました。 父の思い入れのある骨董品を一つ一つ丁寧に鑑定していただき、親身に相談にも乗っていただき大変心強かったです。', rating:4.5, author:'30代・男性'},
    {title:'量も多かったので、 まずは「LINE査定」してもらいました。', description:'実家の蔵の整理で、大量に出てきた古い品々があり、価値もわからなかったため、開豊ジャパンさんの「LINE査定」を利用しました。写真を撮って送るだけで、 簡単に査定判断をしてもらえ手間も少なく助かりました。また思っていた以上の買取額で驚いています。', rating:5, author:'40代・女性'}
  ]
  return (
    <Section {...heading}>
      <div className='flex flex-col gap-4'>
        {reviews.map((review, i) => (
          <ReviewCard {...review} key={i} />
        ))}
      </div>
    </Section>
  )
}
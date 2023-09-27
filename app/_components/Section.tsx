'use client'

import {GiJapan} from 'react-icons/gi'
import {BsChatLeftText} from 'react-icons/bs'
import {AiOutlineShop} from 'react-icons/ai'
import {SiLine} from 'react-icons/si'
import {Card, ReviewCard} from './Card'
import Heading from './Heading'
import Image from 'next/image'
import classNames from 'classnames'

import Counter from './Counter'
import { ChatButton, LineButton } from './Button'

import { blurDataURL } from '@/lib/blur'

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
        <Heading className="pb-12" title={title} description={description}/>
        {children}
      </section>
    </div>
  )
}


export function HeroSection() {
  const heading = {
    title: 
`骨董品・古美術品
無料で査定いたします
LINE・チャットで受付中
`,
    description: 
`開豊ジャパンは、八王子市の古美術品店

確かな目利きと、多数の高価買取実績あり

眠ったままの骨董品、思いの詰まった遺品など、
１点１点しっかり丁寧に鑑定します。

どんなお品物でも高価買取、
LINEやチャットで、スピーディに鑑定・買取!!
`
  }
  const counter = {
    innerComment: '58,000 →',
    start: 58000,
    end: 72500, 
    outerComment:
`いまだけ！ LINE査定なら
査定額が、20%アップ`

  }
  return (
    <div className={classNames('w-full')} style={{backgroundImage:"linear-gradient(170deg, transparent 0%, transparent 25%, #D0E7D2 25%, #D0E7D2 80%, transparent 80%, transparent 100%)"}}>
      <section className='px-6 mx-auto max-w-6xl '>
        <div className='relative flex flex-col whitespace-pre-wrap gap-8'>
          {heading.title && 
            <h2 className='text-3xl md:max-w-xl text-center md:text-left tracking-widest leading-relaxed font-bold text-stone-900'>{heading.title}</h2>
          }
          {
            <div className="flex gap-6 md:max-w-xl justify-center md:justify-normal">
              <LineButton />
              <ChatButton />
            </div>
          }

          
          <div className='mx-auto md:absolute md:top-0 md:right-0'>
            <Counter {...counter} outerCommentClassName=' text-amber-600 animate-bounce'/>
            <Image priority={true} placeholder="blur" blurDataURL={blurDataURL} className='' src={'/items/other.webp'} width={420} height={420} style={{objectFit:'contain'}} alt={'logo image'} />
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
    {name:'金製品', src:'/items/gold.webp', end:3500000},
    {name:'鉄瓶', src:'/items/iron.webp', end:500000},
    {name:'銀製品', src:'/items/silver.webp', end:40000},
    {name:'煎茶道具', src:'/items/sencha.webp', end:18000},
    {name:'竹花籠', src:'/items/basket.webp', end:80000},
    {name:'蒔絵', src:'/items/makie.webp', end:750000},
    {name:'御茶道具', src:'/items/tea.webp', end:50000},
    {name:'陶磁器', src:'/items/ceramics.webp', end:800000},
    {name:'仏教美術', src:'/items/statue.webp', end:1200000},
    {name:'その他', src:'/items/other.webp', end:58000},
  ]

  return (
    <Section {...heading}>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item, i) => (
          <div className='relative flex flex-col items-center gap-2 border rounded-lg shadow' style={{backgroundImage:"linear-gradient(170deg, transparent 0%, transparent 50%, #D0E7D2 50%, #D0E7D2 80%, transparent 80%, transparent 100%)"}} key={i}>
            <h3 className='text-center text-xl py-2 px-4'>{item.name}</h3>
            <div className='relative aspect-square w-60 max-w-full'>
              <Image src={item.src} fill style={{objectFit:'contain'}} alt={item.name} />
            </div>
            <Counter className='absolute bottom-4 right-0 left-0' end={item.end} mini={true}  />
            
          </div>
        ))}
      </div>
    </Section>
  )
}


export const assessments = [
  {title:'LINE査定' , description:'LINEから写真を送るだけ' , icon:SiLine, href:'/assessments/line'},
  {title:'チャット査定' , description:'チャットでご相談ください' , icon:BsChatLeftText, href:'/assessments/chat'},
  {title:'持ち込み査定' , description:'弊社に査定品をお持ちください' , icon:AiOutlineShop, href:'/assessments/carryin'},
  {title:'訪問査定' , description:'スタッフが直接査定に伺います' , icon:GiJapan, href:'/assessments/onsite'},
]

export function AssessmentSection() {
  const heading = {
    title:"査定方法",
    description:'様々な鑑定・買取をさせていただいております、まずはお気軽にご相談ください。'
  }

  return (
    <Section {...heading}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
    {title:'LINE査定が簡単でした♪', description:'実家の整理で、価値のわからない古いものがたくさん出てきました、近所のお店だったので利用しました。LINEで写真を送るだけで、 すぐに査定をしてもらえたので助かりました。また利用する機会があればお願いします。', rating:5, author:'40代・女性'},
    {title:'遺品整理の困っていましたが', description:'家に大量に集めていた骨董品の処分に困り、とりあえず鑑定してもらうため、LINE査定をお願いしました。 写真を送るだけで簡単に査定してくれるので相談しやすかったです。査定額もすごい金額で引き取ってもらえました^^', rating:5, author:'40代・男性'},
    {title:'チャットサポートがとてもよかった', description:'LINEアプリを入れていないため、チャットで査定していただけました。とても簡単な操作で査定ができたのでびっくりしました。スマホに不慣れで不安もありましたが、安心して取引できました。', rating:5, author:'50代・男性'}
  ]
  return (
    <Section {...heading}>
      <div className='flex flex-col gap-6'>
        {reviews.map((review, i) => (
          <ReviewCard {...review} key={i} />
        ))}
      </div>
    </Section>
  )
}
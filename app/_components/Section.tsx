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
import { CSSProperties } from 'react'

export type SectionProps = {
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
}
export function Section({title, description, className, children}:SectionProps) {
  return (
    <div className={classNames('w-full', className)}>
      <section className='px-4 mx-auto max-w-4xl'>
        <Heading className="pb-12 text-center" title={title} description={description}/>
        {children}
      </section>
    </div>
  )
}


export function HeroSection() {
  const heading = {
    title: 
`骨董品・古美術品
無料で鑑定いたします
スマホで、かんたん査定
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
    <section className={classNames('w-full')} style={{}}>
      <div className='px-4 mx-auto max-w-4xl flex justify-between flex-col-reverse md:flex-row-reverse items-center'>
        
        <div className='flex flex-col text-center whitespace-pre-wrap gap-8 items-center'>
          <h2 className='text-2xl md:text-3xl font-black text-primary'>{heading.title}</h2>
          <div className="flex gap-8">
            <div className='btn btn-primary'>査定をはじめる</div>
            <div className='btn btn-primary btn-outline'>チャットで相談</div>
          </div>
          <p className=''>{heading.description}</p>
        </div>
        
        <div className='relative'>
          <Image priority={true} src={'/items/other.webp'} width={350} height={350} alt={'antique item'} className='absolute bottom-[30px]' />

          <div className='relative'>
            <div className='w-48 text-center text-secondary absolute font-bold' style={{top:'80px', left:'50%', transform:'translate(-50%, 0)'}}>
              <p className='mb-2'>いまだけ! LINE査定で<br />査定額 20%UP</p>
              <p className='text-4xl'>￥72,500</p>
            </div>
            <Image priority={true} src={'/home/phone_frame.webp'} width={350} height={539} alt={'smart_phone_frame'} />
          </div>
        </div>
      </div>

    </section>
  )
}


export function ItemSection() {
  const heading = {
    title:
`高額買取保障！
さがしています`,
    description:
`当社が特に高価買取に力を入れている商品を紹介します`
  }

  const items = [
    {title:'金製品', description:'金瓶・金杯・アクセサリー', src:'/items/gold.webp', end:3500000},
    {title:'鉄瓶', description:'南部鉄瓶・', src:'/items/iron.webp', end:500000},
    {title:'銀製品', description:'銀瓶・銀杯・カトラリー', src:'/items/silver.webp', end:40000},
    {title:'煎茶道具', description:'煎茶道具', src:'/items/sencha.webp', end:18000},
    {title:'竹花籠', description:'花籠', src:'/items/basket.webp', end:80000},
    {title:'蒔絵', description:'蒔絵', src:'/items/makie.webp', end:750000},
    {title:'御茶道具', description:'御茶道具', src:'/items/tea.webp', end:50000},
    {title:'陶磁器', description:'陶磁器', src:'/items/ceramics.webp', end:800000},
    {title:'仏教美術', description:'仏教美術', src:'/items/statue.webp', end:1200000},
    {title:'その他', description:'その他', src:'/items/other.webp', end:58000},
  ]

  const wantedPaper:CSSProperties = {
    background:`radial-gradient(#FFF3DC 90%, #A66D00 120%);`,
    color:'#5B3C00',
  }
  return (
    <Section {...heading} >
      <div className='flex flex-wrap gap-4 justify-center'>
        {items.map((item, i) => (
          <div key={i} className='flex flex-col gap-2 shadow-lg p-2 w-40 md:w-48' style={wantedPaper}>
            <h3 className='text-center text-lg font-bold'>{item.title}</h3>
            <div className='relative aspect-square border ' style={{borderColor:'#a88136'}}>
              <Image className='p-2' src={item.src} fill style={{objectFit:'contain'}} alt={item.title} />
            </div>
            <p className='text-center text-sm h-12'>{item.description}</p>
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
import {GiJapan} from 'react-icons/gi'
import {TfiPackage} from 'react-icons/tfi'
import {AiOutlineMail} from 'react-icons/ai'
import {SiLine} from 'react-icons/si'
import {Card, ReviewCard} from './Card'
import Heading from './Heading'
import Image from 'next/image'
import classNames from 'classnames'

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
`株式会社開豊ジャパンは、八王子市の古美術品店です。
骨董品や古美術の確かな目利きと高価買取実績がございます。
ご自宅に眠っている骨董品や美術品、また故人の思いの詰まった遺品など、一点一点丁寧に鑑定します。
価値がないと思われているものでも、高価買取の対象になることもあります。
お客様に安心していただけるよう、丁寧、スピーディーに鑑定・買取させていただきます。
`
  }
  return (
    <div className={classNames('w-full')}>
      <section className='px-6 mx-auto max-w-6xl'>
        <div className='relative py-12 flex flex-col whitespace-pre-wrap overflow-hidden'>
          {heading.title && 
            <h2 className='text-3xl md:max-w-xl text-center md:text-left tracking-widest leading-relaxed font-bold text-stone-900'>{heading.title}</h2>
          }
          <div className='mx-auto md:absolute md:bottom-0 md:-right-[250px] md:-z-10'>
            <Image className='transition-filter-shadow filter-shadow-md hover:filter-shadow-lg' src={'/hero_1.webp'} width={500} height={500} style={{objectFit:'contain'}} alt={'logo image'} />
          </div>
          {heading.description && 
            <p className='md:text-xl md:max-w-xl text-stone-700 mt-4'>{heading.description}</p>
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
    {name:'その他', src:'/hero_1.webp'},
  ]

  return (
    <Section {...heading}>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item, i) => (
          <div className='flex flex-col items-center gap-2' key={i}>
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
  {title:'出張査定' , description:'スタッフが直接査定に伺います。"日本全国対応"' , icon:GiJapan, href:'/assessment'},
  {title:'宅配査定' , description:'事前簡易査定後に、弊社にお送りください' , icon:TfiPackage, href:'/assessment'},
  {title:'メール査定' , description:'メールに写真を添付' , icon:AiOutlineMail, href:'/assessment'},
  {title:'LINE査定' , description:'LINEから写真を送るだけ' , icon:SiLine, href:'/assessment'},
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
          <Card className='flex-1 ' {...assessment} key={i} />
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
    {title:'骨董品の買取', description:'骨董品の買取をお願いしました。思い出の品でしたが、思ったよりも高く買い取っていただけました。', rating:4.5, author:'30代・男性'},
    {title:'骨董品の買取', description:'骨董品の買取をお願いしました。思い出の品でしたが、思ったよりも高く買い取っていただけました。', rating:5, author:'40代・女性'}
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
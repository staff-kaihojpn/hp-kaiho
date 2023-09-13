import {GiJapan} from 'react-icons/gi'
import {TfiPackage} from 'react-icons/tfi'
import {GrMailOption} from 'react-icons/gr'
import {SiLine} from 'react-icons/si'
import {Card} from './Card'
import Heading from './Heading'
import Image from 'next/image'
import classNames from 'classnames'



export function Items() {
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
    <section className={classNames('px-6')}>
      <Heading {...heading} />
      <div className='flex flex-wrap gap-4 place-content-between'>
        {items.map((item, i) => (
          <div className='flex flex-col gap-2' key={i}>
            <div className='relative w-36 aspect-square sm:w-48 md:w-60'>
              <Image className='' src={item.src} fill style={{objectFit:'contain'}} alt={item.name} />
            </div>
            <h3 className='text-center text-xl'>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
    
  )
}



export function Assessments() {

  const heading = {
    title:"査定方法",
    description:'様々な鑑定・買取をさせていただいております、まずはお気軽にご相談ください。'
  }

  const cards = [
    {title:'出張査定' , description:'スタッフが直接査定に伺います。"日本全国対応"' , icon:GiJapan},
    {title:'宅配査定' , description:'事前簡易査定後に、弊社にお送りください' , icon:TfiPackage},
    {title:'メール査定' , description:'メールに写真を添付' , icon:GrMailOption},
    {title:'LINE査定' , description:'LINEから写真を送るだけ' , icon:SiLine},
  ]
  return (
    <section className={classNames('px-6')}>
      <Heading {...heading}></Heading>
      <div className='grid grid-cols-2 gap-4 mx-auto max-w-4xl'>
        {cards.map((card, i) => (
          <Card className='flex-1 bg-slate-50 hover:shadow-lg cursor-pointer' {...card} key={i} />
        ))}
      </div>
    </section>
  )
}
import Image from 'next/image'
import { Section } from "."

export default function ItemSection() {
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

  return (
    <Section {...heading} >
      <div className='flex flex-wrap gap-4 justify-center'>
        {items.map((item, i) => (
          <div key={i} className='wanted-paper flex flex-col gap-2 shadow-lg p-2 w-40 md:w-48 '>
            <h3 className='text-center text-lg font-bold'>{item.title}</h3>
            <div className='relative aspect-square border' style={{borderColor:'#5B3C00'}}>
              <Image className='p-2' src={item.src} fill style={{objectFit:'contain'}} alt={item.title} />
            </div>
            <p className='text-center font-bold text-sm h-12'>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}


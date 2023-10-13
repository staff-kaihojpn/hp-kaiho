import Image from 'next/image'
import { Section } from "."
import Divider from '@/public/items/divider.svg'

const heading = {
  title:
`高額買取保障！
さがしています`,
  description:
`当社が特に高価買取に力を入れている商品を紹介します`
}

const items = [
  {title:'金製品', description:'金瓶 | 金杯 | アクセサリー | コイン | 小判 | 金歯', src:'/items/gold.webp'},
  {title:'鉄瓶', description:'南部鉄瓶 | 龍文堂 | 亀文堂 | 金寿堂 | 金龍堂 | 祥雲堂', src:'/items/iron.webp'},
  {title:'銀製品', description:'銀瓶 | 銀杯 | 銀舟 | トロフィー | コイン | 食器', src:'/items/silver.webp'},
  {title:'煎茶道具', description:'湯沸 | 茶托 | 菓子器 | 菓子盆 | 急須 | 煎茶碗', src:'/items/sencha.webp'},
  {title:'竹細工', description:'花籠 | 茶籠 | 花入 | 盛籠', src:'/items/basket.webp'},
  {title:'蒔絵', description:'香合 | 棗 | 椀 | 菓子器 | 硯箱 | 文箱', src:'/items/makie.webp'},
  {title:'御茶道具', description:'抹茶茶碗 | 釜 | 風炉 | 棗 | 茶杓 | 柄杓 | 建水 | 風炉先 | 屏風', src:'/items/tea.webp'},
  {title:'陶磁器', description:'青磁 | 白磁 | 色絵 | 焼締 | 素焼 | 染付', src:'/items/ceramics.webp'},
  {title:'仏教美術', description:'仏像 | 厨子 | 仏器 | 燭台 | 灯籠 | 鐘 | 経卓 | 欄間', src:'/items/statue.webp'},
  {title:'その他', description:'着物 | 植木鉢 | 盆石 | 日本人形 | 彫刻 | 箪笥 | 楽器 | レトロ', src:'/items/other.webp'},
]

export default function ItemSection() {
  return (
    <Section {...heading} >
      <div className='flex flex-wrap gap-4 justify-center'>
        {items.map((item, i) => (
          <div key={i} className='wanted-paper flex flex-col gap-2 shadow-lg p-2 w-40 md:w-48 '>
            <h3 className='text-center text-lg font-bold'>{item.title}</h3>
            <div className='relative aspect-square border' style={{borderColor:'#5B3C00'}}>
              <Image className='sepia-[50%] ' src={item.src} fill style={{objectFit:'contain'}} alt={item.title} />
            </div>
            <div className='flex gap-1'>
              <Divider className='fill-[#5B3C00]' width={8} height={60} />
              <p className='text-center font-bold text-sm flex-1'>{item.description}</p>
              <Divider className='fill-[#5B3C00]' width={8} height={60} style={{transform: 'scale(-1, 1)'}} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


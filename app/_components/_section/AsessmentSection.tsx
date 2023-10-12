import Link from "next/link"
import { Section } from "."
import Image from "next/image"


const heading = {
  title:"査定のすすめ方",
  description:
`査定は２ステップに分けて行います
かんたん査定で概算を出した後、
本査定で実際の買取金額をお伝えします`
}
const steps = [
  {
    title:'かんたん査定',
    description:
`まずはお手持ちのスマホ・パソコンから写真を送り、
概算の査定額を出しましょう`, 
    cards:[
      {
        title:'かんたん査定(LINE)' , 
        description:
`やることは、
LINEに写真を送るだけ！
かんたんに査定できます`, 
        image:'/home/step_line.webp', 
        href:'/assessments/line'
      },
      {
        title:'かんたん査定(チャット)',
        description:
`LINEをやってなくても大丈夫！
ホームページ上からチャットで相談や査定ができます`,
        image:'/home/step_chat.webp', 
        href:'/assessments/chat'
      },
    ]
  },
  {
    title:'本査定',
    description:
`かんたん査定が済んだ後、
鑑定士が実際の買取額を決定します`, 
    cards:[
      {
        title:'本査定（訪問）' , 
        description:
`かんたん査定が済んだ後、
ご自宅に鑑定士が査定に伺い、
査定を行います`, 
        image:'/home/step_onsite.webp', 
        href:'/assessments/carryin'
      },
      {
        title:'本査定（持込）',
        description:
`かんたん査定が済んだ後、
弊社に直接商品をお持ちいただき、
査定を行います`,
        image:'/home/step_carryin.webp', 
        href:'/assessments/onsite'
      },
    ]
  }
]


export default function AssessmentSection() {
  return (
    <Section {...heading}>
      <div className='flex flex-col items-center gap-12'>
        {steps.map((step, i) => (
          <div key={i} className='flex flex-col items-center gap-6'>
            <div className='flex gap-4 items-end max-w-sm '>
              <p className='text-7xl text-gold opacity-60'>{i+1}</p>
              <div>
                <h3 className='text-xl font-bold'>{step.title}</h3>
                <p className='text-sm'>{step.description}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              {step.cards.map((card, j) => (
                <div key={j} className='flex flex-col p-4 max-w-xs border rounded-lg items-center bg-white/50'>
                  <p className='text-xl font-bold mb-4'>{card.title}</p>
                  <Image src={card.image} width={300} height={460} alt={card.title} />
                  <p className='my-4'>{card.description}</p>
                  <Link href={card.href}>
                    <p className='font-bold'>{`〉もっと詳しく`}</p>
                  </Link>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  )
}

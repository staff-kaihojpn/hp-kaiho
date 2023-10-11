import Image from 'next/image'
import { Section } from '.'


const steps = [
  {title:'LINEアプリでトークを開始', image:'/home/howto_1.webp'},
  {title:'トークに写真を送りましょう', image:'/home/howto_2.webp'},
  {title:'鑑定結果のメッセージが届く', image:'/home/howto_3.webp'},
]

export default function HowtoSection() {

  return (
    <Section title={
`必要なのはスマホだけ！
まずは、かんたん査定から`
    }>
      <div className='flex flex-col md:flex-row gap-8'>
          {steps.map((step, i) => (
            <div key={i} className='flex flex-row-reverse md:flex-col items-center gap-4'>
              <div className='flex flex-1 gap-2 items-baseline'>
                <p className='text-5xl text-gold opacity-60'>{i+1}</p>
                <h3 className=''>{step.title}</h3>
              </div>
              <div className='w-[40%] md:w-auto'>
                <Image src={step.image} width={300} height={460} alt={step.title} />
              </div>
            </div>
          ))}
      </div>
    </Section>
  )

}

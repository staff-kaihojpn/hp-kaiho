import Image from 'next/image'

export type HeroProps = {
}

export default function Hero({}: HeroProps) {
  const heading = {
    title: 
`
ご自宅に眠っている
骨董品・古美術品
無料で査定いたします
`,
    description: 
`
株式会社開豊ジャパンは、八王子市の古美術品店です。
骨董品や古美術の確かな目利きと高価買取実績がございます。
ご自宅に眠っている骨董品や美術品、また故人の思いの詰まった遺品など、一点一点丁寧に鑑定します。
価値がないと思われているものでも、高価買取の対象になることもあります。
お客様に安心していただけるよう、丁寧、スピーディーに鑑定・買取させていただきます。
`
  }
  return (
    <section>
      <div className='relative px-6 py-12 overflow-hidden'>
        <div className='max-w-xl relative z-10 break-words whitespace-pre-wrap'>
          {heading.title && 
            <h2 className='text-3xl md:text-5xl font-bold text-stone-900 leading-[3rem]'>
              <span className='bg-stone-50/70'>{heading.title}</span>
            </h2>
          }
          {heading.description && 
            <p className='md:text-xl text-stone-700 mt-4 leading-7 md:leading-9'>
              <span className='bg-stone-50/70'>
                {heading.description}
              </span>
            </p>}
        </div>
        <div className='pb-4 absolute bottom-0 -right-[200px] '>
          <Image className='transition-filter-shadow filter-shadow-md hover:filter-shadow-lg' src={'/hero_1.webp'} width={500} height={500} style={{objectFit:'contain'}} alt={'logo image'} />
        </div>
      </div>
    </section>
  )
}
'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '@/app/_config'
import { useInView, animated } from '@react-spring/web'


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

export default function HeroSection() {
 const [ref, springs] = useInView(
    () => ({
      from: {
        rotate: 90,
      },
      to: {
        rotate: 0,
      }
    }),
    {
      rootMargin: '-20% 0%',
    }
  )

  return (
    <section className={classNames('w-full', 'bg-flash', 'pt-12 pb-20')}>
      <div className='px-4 mx-auto max-w-4xl flex justify-between flex-col-reverse md:flex-row-reverse items-center'>
        
        <div className='flex flex-col text-center whitespace-pre-wrap gap-8 items-center'>
          <h2 className='text-2xl md:text-3xl font-black text-primary'>{heading.title}</h2>
          <div className="flex gap-8">
            <Link href='/assessments/line'>
              <div className='btn btn-primary'>査定をはじめる</div>
            </Link>
            <div className='btn btn-primary btn-outline' onClick={config.action.openChat}>チャットで相談</div>
          </div>
          <p className=''>{heading.description}</p>
        </div>
        
        <div className='relative mb-12 md:mb-0 overflow-hidden'>
          <></>
          <Image ref={ref}  priority={true} src={'/items/other.webp'} width={350} height={350} alt={'antique item'} className='absolute bottom-[30px]' />

          <animated.div className='relative' style={{transformOrigin:'bottom left', ...springs}}>
            <div className='w-48 text-center absolute font-black' style={{top:'100px', left:'50%', transform:'translate(-50%, 0)'}}>
              <p className='mb-2'>
                <span className='text-gold'>いまだけ! LINE査定で<br /></span>
                <span className='text-2xl text-gold'>査定額 20%UP</span>
              </p>
            </div>
            <Image priority={true} src={'/home/phone_frame.webp'} width={350} height={539} alt={'smart_phone_frame'} />
          </animated.div>
        </div>
      </div>

    </section>
  )
}
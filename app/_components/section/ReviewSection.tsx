import { IoPersonCircleOutline } from "react-icons/io5"
import { Section } from "."
import { BsStarFill } from "react-icons/bs"
import classNames from "classnames"
import { CardProps } from "../Card"
import Image from "next/image"


export type PreviewCardProps = {
  rating?: number
  author?: string
} & CardProps

export function ReviewCard({title, icon: Icon, description, className, rating=5, author='', ...divProps}: PreviewCardProps) {
  return (
    <div {...divProps} className={classNames('shadow rounded-lg p-4 border bg-white/50', className)}>
      <div className='flex flex-row gap-6 items-center'>
        <div className='flex flex-col items-center justify-center'>
          <IoPersonCircleOutline className='text-5xl ' />
          <p className='text-xs'>{author}</p>
        </div>
        <div className='flex-1'>
          {title && <h2 className='font-bold '>{title}</h2>}
          <div className='flex gap-1 mt-1'>
            {rating && [...Array(5)].map((_, i) => (
              <BsStarFill key={`rating-${i}`} className={classNames((i+1)<=Math.floor(rating) ? 'text-yellow-400':'text-stone-200')}/>
            ))}
          </div>
          {description && <p className='mt-4'>{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default function ReviewSection() {
  const heading = {
    title:
`ご利用いただいた
お客様の声`,
    description:
`LINE査定、チャットサポートが
好評いただいています`
  }
  const reviews = [
    {title:'LINE査定が簡単でした♪', description:'実家の整理で、価値のわからない古いものがたくさん出てきました、近所のお店だったので利用しました。LINEで写真を送るだけで、 すぐに査定をしてもらえたので助かりました。また利用する機会があればお願いします。', rating:5, author:'40代・女性'},
    {title:'遺品整理の困っていましたが', description:'家に大量に集めていた骨董品の処分に困り、とりあえず鑑定してもらうため、LINE査定をお願いしました。 写真を送るだけで簡単に査定してくれるので相談しやすかったです。査定額もすごい金額で引き取ってもらえました^^', rating:5, author:'40代・男性'},
    {title:'チャットサポートがとてもよかった', description:'LINEアプリを入れていないため、チャットで査定していただけました。とても簡単な操作で査定ができたのでびっくりしました。スマホに不慣れで不安もありましたが、安心して取引できました。', rating:5, author:'50代・男性'}
  ]
  return (
    <Section {...heading}>
      <div className='relative flex items-end'>
        <div className='absolute bottom-0 -left-20 md:static md:left-0'>
          <Image src='/home/standing.webp' width={160} height={304} alt={heading.title} />
        </div>
        <div className='flex flex-col gap-6 flex-1 ml-12 md:ml-0'>
          {reviews.map((review, i) => (
            <ReviewCard {...review} key={i} />
          ))}
      </div>
      </div>
      
    </Section>
  )
}
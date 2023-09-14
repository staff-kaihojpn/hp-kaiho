import classNames from 'classnames'
import Image from 'next/image'

import type { IconType } from 'react-icons';
import { LuArrowRight } from 'react-icons/lu';
import {IoPersonCircleOutline} from 'react-icons/io5'
import {BsStarFill} from 'react-icons/bs'


type DivProps = JSX.IntrinsicElements['div']
export type CardProps = DivProps & {
  title?: string
  description?: string
  icon?: IconType,
  className?:string
}

export function Card({title, icon: Icon, description, className}: CardProps) {
  return (
    <div className={classNames('shadow rounded-lg p-4 bg-stone-100 hover:shadow-lg cursor-pointer', className)}>
      <div className='flex flex-col'>
        {Icon && <div><Icon className='text-4xl text-stone-600'/></div>}
        {title && <h2 className='font-bold text-stone-900 mt-4'>{title}</h2>}
        {description && <p className=' text-stone-600 mt-4'>{description}</p>}
        
        <div className="ml-auto text-xl">
          <LuArrowRight />
        </div>
      </div>
    </div>
  )
}

export type PreviewCardProps = {
  rating?: number
  author?: string
} & CardProps

export function ReviewCard({title, icon: Icon, description, className, rating=5, author='', ...divProps}: PreviewCardProps) {
  return (
    <div {...divProps} className={classNames('shadow rounded-lg p-4 border', className)}>
      <div className='flex gap-2'>
        <div className='w-28 flex flex-col items-center justify-center text-stone-600'>
          <IoPersonCircleOutline className='text-7xl ' />
          <p className='text-sm'>{author}</p>
        </div>
        <div className='flex-1'>
          {title && <h2 className='font-bold text-stone-900'>{title}</h2>}
          <div className='flex gap-1 mt-1'>
            {rating && [...Array(5)].map((_, i) => (
              <BsStarFill key={`rating-${i}`} className={classNames((i+1)<=Math.floor(rating) ? 'text-yellow-400':'text-stone-200')}/>
            ))}
          </div>
          {description && <p className='text-stone-600 mt-4'>{description}</p>}
        </div>
      </div>
    </div>
  )
}
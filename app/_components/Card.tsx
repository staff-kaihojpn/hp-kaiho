import classNames from 'classnames'
import Image from 'next/image'

import type { IconType } from 'react-icons';
import { LuArrowRight } from 'react-icons/lu';

export type CardProps = {
  title?: string
  description?: string
  icon?: IconType,
  className?:string,
}

export function Card({title, icon: Icon, description, className}: CardProps) {
  return (
    <div className={classNames('shadow rounded-lg p-4', className)}>
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
} & CardProps

export function ReviewCard({title, icon: Icon, description, className, rating}: PreviewCardProps) {
  return (
    <div className={classNames('shadow rounded-lg p-4', className)}>
      <div className='flex'>
        
        {Icon && 
          <div className='w-32'>
            <Icon className='text-4xl'/>
          </div>
        }
        <div className='flex-1'>
          {title && <h2 className='font-bold text-stone-900 mt-4'>{title}</h2>}
          {rating && <div>{rating}</div>}
          {description && <p className=' text-stone-600 mt-4'>{description}</p>}
        </div>
      </div>
    </div>
  )
}
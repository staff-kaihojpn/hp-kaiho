import classNames from 'classnames'
import Image from 'next/image'

import type { IconType } from 'react-icons';
import { LuArrowRight } from 'react-icons/lu';
import {IoPersonCircleOutline} from 'react-icons/io5'
import {BsStarFill} from 'react-icons/bs'
import Link from 'next/link';
import { CSSProperties } from 'react';


type DivProps = JSX.IntrinsicElements['div']
export type CardProps = DivProps & {
  href?: string
  title?: string
  description?: string
  icon?: IconType,
  className?:string
}

export function Card({href, title, icon: Icon, description, className}: CardProps) {
  return (
    <Link href={href||''} className={classNames('shadow rounded-lg p-4 bg-stone-50 hover:shadow-lg border cursor-pointer', className)}>
      <div className='flex flex-col'>
        {Icon && <div><Icon className='text-4xl text-stone-400'/></div>}
        {title && <h2 className='font-bold text-lg text-stone-900 mt-4'>{title}</h2>}
        {description && <p className=' text-stone-600 mt-4'>{description}</p>}
        
        <div className="ml-auto text-xl text-stone-400">
          <LuArrowRight />
        </div>
      </div>
    </Link>
  )
}

export type PreviewCardProps = {
  rating?: number
  author?: string
} & CardProps

export function ReviewCard({title, icon: Icon, description, className, rating=5, author='', ...divProps}: PreviewCardProps) {
  return (
    <div {...divProps} className={classNames('shadow rounded-lg p-4 border', className)}>
      <div className='flex flex-col md:flex-row gap-6 items-center'>
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


export type StepCardProps = JSX.IntrinsicElements['div'] & {
  step?: number
  title?: string
  description?: string
  icon?: IconType,
  className?:string
}



export const StepCard = ({title, step, icon: Icon, description, className}: StepCardProps) => {
  return (
    <div className={classNames(className, 'relative border bg-stone-50 border-stone-500 rounded-lg  flex gap-4 ')}>
      {step && 
        <div className='absolute top-0 left-0 w-10 h-10 text-white text-md font-bold px-2 rounded-tl-lg  overflow-hidden' 
          style={{backgroundImage:'linear-gradient(-45deg, transparent 0%, transparent 50%, #15803d 50%, #15803d 100%)'}}>
          {step}
        </div>
      }
      <div className='flex-1 p-6'>
        { title && <p className='font-bold'>{title}</p> }
        { description && <p className='mt-6 text-stone-600'>{description}</p> }
      </div>
      <div className='flex flex-col justify-center items-center w-16 '>
        {Icon && <Icon />}
      </div>
    
    </div>
  )
}


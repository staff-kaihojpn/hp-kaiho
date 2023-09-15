'use client'

import classNames from 'classnames'
import { useInView } from '@react-spring/web'

export type HeadingProps = {
  title?:string,
  description?:string,
  className?:string,
  children?:React.ReactNode,
}

export default function Heading({title, description, className}: HeadingProps) {
  const [ref, inView] = useInView({
    rootMargin: '-90px 0px -30% 0px',
  })

  return (
    <div className={classNames(className)}>
      {title && 
        <h2 ref={ref} className={classNames(inView&&'active', 'marker inline-block text-3xl tracking-widest text-stone-900 border-l-4 border-red-900')}>
          <span className='px-6'>{title}</span>
        </h2>
      }
      {description && <p className='text-stone-600 mt-6'>{description}</p>}
    </div>
  )
}
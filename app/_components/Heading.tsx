'use client'

import classNames from 'classnames'

export type HeadingProps = {
  title?:string,
  description?:string,
  className?:string,
  children?:React.ReactNode,
}

export default function Heading({title, description, className}: HeadingProps) {
  return (
    <div className={classNames(className)}>
      {title && 
        <h2 className={classNames('inline-block text-3xl tracking-widest text-stone-900 border-l-4 border-amber-700')}>
          <span className='px-6'>{title}</span>
        </h2>
      }
      {description && <p className='text-stone-600 mt-6'>{description}</p>}
    </div>
  )
}
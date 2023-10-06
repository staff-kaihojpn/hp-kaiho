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
        <h2 className='font-bold text-2xl md:text-3xl text-primary'>{title}</h2>
      }
      {description && <p className='mt-6'>{description}</p>}
    </div>
  )
}
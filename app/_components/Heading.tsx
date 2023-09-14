import classNames from 'classnames'
import Image from 'next/image'

export type HeadingProps = {
  title?:string,
  description?:string,
  className?:string,
  children?:React.ReactNode,
}

export default function Heading({title, description, className}: HeadingProps) {
  return (
    <div className={classNames(className)}>
      {title && <h2 className='text-3xl tracking-widest text-stone-900 border-l-4 border-red-900 pl-6'>{title}</h2>}
      {description && <p className='text-stone-600 mt-6'>{description}</p>}
    </div>
  )
}
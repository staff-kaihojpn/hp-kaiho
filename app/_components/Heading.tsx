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
    <div className={classNames("py-8", className)}>
      {title && <h2 className='text-4xl text-slate-900 border-l-4 border-red-900 pl-6'>{title}</h2>}
      {description && <p className='text-slate-600 mt-6'>{description}</p>}
    </div>
  )
}
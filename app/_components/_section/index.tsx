import Heading from '@/app/_components/Heading'
import classNames from 'classnames'

export type SectionProps = {
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
}
export function Section({title, description, className, children}:SectionProps) {
  return (
    <div className={classNames('w-full bg-flash py-20', className)}>
      <section className='px-4 mx-auto max-w-4xl'>
        <Heading className="pb-12 text-center" title={title} description={description}/>
        {children}
      </section>
    </div>
  )
}

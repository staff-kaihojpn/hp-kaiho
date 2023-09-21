import classNames from 'classnames'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { FloatingButton } from './Button'
import {SiLine} from 'react-icons/si'
import {config,  metadata } from '../_config'
import { CompanyTable } from './Table'

export type FooterProps = {
  className?:string,
  children?:React.ReactNode
}

export default function Footer({className, children}: FooterProps) {
  return (
    <footer className={classNames("bg-stone-900 text-stone-50 pb-8 mt-16",className)}>
      <div className='flex flex-col gap-16 justify-between items-center'>
          
        <div className='flex flex-col gap-4 items-center pt-10'>
          <Link href='/' aria-label='to home'>
            <Logo className={"fill-stone-50"} width={80} height={80} />
          </Link>
        </div>
        
        <div className='flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 w-full px-6 max-w-4xl'>
          
          <CompanyTable />
          <PageList />
        </div>
        

        <p><small>&copy; {new Date().getFullYear()}- {metadata.title+''}</small></p>
        
      </div>
      {process.env.NEXT_PUBLIC_LINE_SHARE_ID && 
        <FloatingButton href={`https://lin.ee/${process.env.NEXT_PUBLIC_LINE_SHARE_ID}`} target="_blank" rel="noopener noreferrer" icon={SiLine} className='fixed bottom-20 xs:bottom-24 right-4 xs:right-6 z-20 text-stone-50 bg-green-600 ' />
      }
      
    </footer>
  )
}


export function PageList() {
return (
  <div className='flex flex-wrap gap-8 '>
    {config.pages.map((page, i) => (
      <div key={i}>
        <p className='mb-2 font-bold text-stone-50'>
          {page.path ? <Link href={page.path}>{page.name+''}</Link> : page.name+''}
        </p>
        <ul className=''>
          {page.pages?.map((subpage, j) => (
            <li key={j} className=''>
              {subpage.path ? <Link href={subpage.path}>{subpage.name+''}</Link> : subpage.name+''}
            </li>
          ))}
          
        </ul>
      </div>
    ))}
  </div>
)


}
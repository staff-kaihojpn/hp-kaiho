import classNames from 'classnames'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { FloatingButton } from './Button'
import {SiLine} from 'react-icons/si'
import {config,  metadata } from '../_config'
import { CompanyTable } from './Table'
import Image from 'next/image'

export type FooterProps = {
  className?:string,
  children?:React.ReactNode
}

export default function Footer({className, children}: FooterProps) {
  return (
    <footer className={classNames("bg-stone-900 text-stone-300 py-12 mt-16",className)}>
      <div className='flex flex-col gap-16 justify-between items-center'>
          
        <div className='flex flex-col gap-4 items-center pt-10'>
          <Link href='/' aria-label='to home'>
            <Logo className={"fill-stone-50"} width={80} height={80} />
          </Link>
        </div>
        
        <div className='flex flex-col items-center md:items-start md:flex-row md:justify-between gap-16 w-full px-6 max-w-4xl'>
          
          <CompanyTable />
          <PageList />
        </div>
        

        <p><small>&copy; {new Date().getFullYear()}- {metadata.title+''}</small></p>
        
      </div>
      {process.env.NEXT_PUBLIC_LINE_SHARE_ID && 
        <>
          <Link href={config.link.line} className='fixed bottom-20 xs:bottom-24 right-20 xs:right-24 z-20 shadow-xl opacity-90 '><Image width={160} height={60} src="/coupon/line.webp" alt='line coupon'/></Link>
          <FloatingButton href={`https://lin.ee/${process.env.NEXT_PUBLIC_LINE_SHARE_ID}`} target="_blank" rel="noopener noreferrer" icon={SiLine} className='fixed bottom-20 xs:bottom-24 right-4 xs:right-6 z-20 text-stone-50 bg-green-600 ' />
        </>
      }
      
    </footer>
  )
}


export function PageList() {
return (
  <nav className='flex flex-wrap gap-12 text-sm '>
    {config.pageGroups.map((group, i) => (
      <div key={i}>
        <p className='text-sm h-12 '>
          {group.name}
        </p>
        <ul className='flex flex-col gap-4'>
          {group.pages?.map((page, j) => (
            <li key={j} className=''>
              <Link href={page.path||''} className={classNames('text-stone-50 font-bold')}>
                {page.name+''}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
)


}
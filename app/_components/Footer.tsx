import classNames from 'classnames'
import { BottomNav, ListNav } from './Nav'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { FloatingButton } from './Button'
import {SiLine} from 'react-icons/si'

export type FooterProps = {
  className?:string,
  children?:React.ReactNode
}

export default function Footer({className, children}: FooterProps) {
  return (
    <footer className={classNames("bg-stone-900 text-stone-50 pb-8 mt-16",className)}>
      <div className='flex flex-col gap-8 justify-between items-center'>
          
        <div className='flex flex-col gap-4 items-center pt-10'>
          <Link href='/' aria-label='to home'>
            <Logo className={"fill-white"} width={80} height={80} />
          </Link>
          <h1 className=''>開豊ジャパン</h1>
        </div>
        
        <ListNav />

        <p><small>&copy; {new Date().getFullYear()}- 開豊ジャパン</small></p>
        
      </div>
      {process.env.NEXT_PUBLIC_LINE_SHARE_ID && 
        <FloatingButton href={`https://lin.ee/${process.env.NEXT_PUBLIC_LINE_SHARE_ID}`} target="_blank" rel="noopener noreferrer" icon={SiLine} className='fixed bottom-24 right-6 z-50 text-stone-50 bg-green-600 ' />
      }
      
    </footer>
  )
}
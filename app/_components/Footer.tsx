import classNames from 'classnames'
import Image from 'next/image'
import { BottomNav, ListNav } from './Nav'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

export type FooterProps = {
  className?:string,
  children?:React.ReactNode
}

export default function Footer({className, children}: FooterProps) {
  return (
    <footer className={classNames("bg-stone-900 text-stone-50 pb-20 md:pb-4 mt-16",className)}>
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
      <BottomNav className='md:hidden fixed bottom-0 left-0 z-50 w-full '/>
    </footer>
  )
}
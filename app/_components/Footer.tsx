import classNames from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

export type FooterProps = {
  className?:string,
  children?:React.ReactNode
}

export default function Footer({className, children}: FooterProps) {
  return (
    <footer className={classNames("bg-gray-900 text-gray-50 pb-4",className)}>
      <div className='flex flex-col gap-8 justify-between items-center'>
          
        <div className='flex flex-col gap-4 items-center pt-10'>
          <Link href='/' aria-label='to home'>
            <Logo className={"fill-white"} width={80} height={80} />
          </Link>
          <h1 className=''>開豊ジャパン</h1>
        </div>
        
        <Nav />

        <p><small>&copy; {new Date().getFullYear()}- 開豊ジャパン</small></p>
        
      </div>
      
    </footer>
  )
}
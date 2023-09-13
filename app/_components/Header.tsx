import classNames from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  return (
    <header className={classNames("py-4 px-6 flex justify-between items-center z-20 backdrop-blur", className)}>
      <div className='flex gap-4 items-center'>
        <Link href='/' aria-label='to home' >
          <Logo className={"fill-red-900"} width={32} height={32} />
        </Link>
        
        <Link href='/'>
          <h1 className='text-xl'>開豊ジャパン</h1>
        </Link>
      </div>
      
      <Nav />
    
    </header>
  )
}
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { ListNav } from './Nav'
import { AiOutlineMenu } from 'react-icons/ai'

export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  return (
    <header className={classNames(" z-20 backdrop-blur", className)}>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-4 px-6'>
        <Link href='/' aria-label='to home' className='flex items-center' >
          <Logo className={"fill-red-900 mr-4"} width={32} height={32} />
          <h1 className='text-xl'>開豊ジャパン</h1>
        </Link>
      
        <ListNav className='hidden md:block' />

        <AiOutlineMenu className='md:hidden w-8 h-8 cursor-pointer' />
      </div>
    
    </header>
  )
}


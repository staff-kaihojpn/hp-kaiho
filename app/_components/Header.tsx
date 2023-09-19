'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { ListNav } from './Nav'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { ModalNav } from './Nav'

export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  const [isModal , setIsModal] = useState(false)
  
  return (
    <>
      <ModalNav className={classNames(!isModal&&'hidden')} onClose={()=>setIsModal(false)} />
      <header className={classNames(" z-10 backdrop-blur", className)}>
        <div className='flex justify-between items-center max-w-6xl mx-auto py-4 px-6'>
          <Link href='/' aria-label='to home' className='flex items-center' >
            <Logo className={"fill-red-900 mr-4"} width={32} height={32} />
            <h1 className='text-xl'>開豊ジャパン</h1>
          </Link>
        
          <ListNav className='hidden md:block' />

          <div className="md:hidden " onClick={()=>setIsModal(!isModal)}>
            <RxHamburgerMenu className='w-7 h-7 cursor-pointer' />
          </div>
          
        </div>
      
      </header>
    </>
    
  )
}


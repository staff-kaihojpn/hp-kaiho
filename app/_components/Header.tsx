'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { ListNav } from './Nav'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { MobileNav } from './Nav'
import { metadata } from '../_config'

export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  const [isMobileNav , setIsMobileNav] = useState(false)
  
  return (
    <header className={classNames(" z-10 backdrop-blur bg-stone-50/80", className)}>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-4 px-6'>
        <Link href='/' aria-label='to home' className='flex items-center' >
          <Logo className={"fill-stone-800 mr-4"} width={32} height={32} />
          <h1 className='text-xl'>{metadata.title+''}</h1>
        </Link>
      
        <ListNav className='hidden md:block' />

        <div className="md:hidden " onClick={()=>setIsMobileNav(!isMobileNav)}>
          <RxHamburgerMenu className='w-7 h-7 cursor-pointer' />
        </div>
        
      </div>
      <MobileNav className={classNames(!isMobileNav&&'hidden')} />
    
    </header>
  )
}


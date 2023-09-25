'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { ListNav } from './Nav'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { metadata } from '../_config'
import { AiOutlineClose } from 'react-icons/ai'

export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  const [isMobileNav , setIsMobileNav] = useState(false)
  
  return (
    <>
      <MobileNav className={classNames(!isMobileNav&&'hidden')} onClose={()=>setIsMobileNav(false)}/>
      <header className={classNames(" z-10 backdrop-blur bg-stone-50/80", className)}>
        <div className='flex justify-between items-center max-w-6xl mx-auto py-4 px-6'>
          <Link href='/' aria-label='to home' className='flex items-center' >
            <Logo className={"fill-stone-800 mr-4"} width={40} height={40} />
            <div>
              <p className='text-xs'>骨董品・古美術品 買取</p>
              <h1 className='text-xl'>{metadata.title+''}</h1>

            </div>
          </Link>
        
          <ListNav className='hidden md:block' />

          <div className="md:hidden " onClick={()=>setIsMobileNav(!isMobileNav)}>
            <RxHamburgerMenu className='w-7 h-7 cursor-pointer' />
          </div>
          
        </div>
      </header>
    </>
    
  )
}

export type MobileNavProps = JSX.IntrinsicElements['div'] & {
  onClose?:()=>void,
 }
 
 export function MobileNav({className, onClose}:MobileNavProps){
    return(
      <div className={classNames(className, "fixed w-full h-full z-20 flex flex-col items-center bg-stone-800/80 text-stone-50")}>
        <div className="flex justify-end w-full text-3xl py-4 px-6">
          <div className="cursor-pointer" onClick={()=>onClose && onClose()}>
            <AiOutlineClose />
          </div>
        </div>
        <p>aaa</p>
      </div>
    )
 }
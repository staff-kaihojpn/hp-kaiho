'use client'

import classNames from 'classnames'
import Link from 'next/link'
import Logo from '@/public/logo.svg'
import { ListNav } from './Nav'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { metadata } from '../_config'
import { AiOutlineClose } from 'react-icons/ai'
import { config } from '@/app/_config'

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
        <div className='flex justify-between items-center max-w-4xl mx-auto py-2 px-6'>
          <Link href='/' aria-label='to home'>
            <HeaderTitleNav />
          </Link>

          <DesktopNav />
          <div className="md:hidden " onClick={()=>setIsMobileNav(!isMobileNav)}>
            <RxHamburgerMenu className='w-7 h-7 cursor-pointer' />
          </div>
          
        </div>
      </header>
    </>
    
  )
}


export type HeaderTitleProps = JSX.IntrinsicElements['div'] & {
  dark?:boolean,
}
export function HeaderTitleNav({dark, ...props}:HeaderTitleProps){
  return (
    <div className={classNames(dark&&'text-stone-50', 'flex items-center')} {...props}>
      <Logo className={classNames(dark?"fill-stone-50":"fill-stone-800", "mr-4")} width={40} height={40} />
      <div>
        <p className='text-xs'>骨董品・古美術品 買取</p>
        <h1 className='text-xl'>{metadata.title+''}</h1>
      </div>
    </div>
  )
}

export type DesktopNavProps = JSX.IntrinsicElements['div'] & {
}
export function DesktopNav({...props}:DesktopNavProps){
  return (
    <div className=' relative hidden md:flex flex-row gap-4' {...props}>
      {config.pageGroups.map((group, i)=>(
        <div key={i} className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">{group.name}</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white/95 rounded-box w-52">
            {group.pages.map((page, j)=>(
              <li key={j}>
                <Link href={page.path} onClick={(e)=>e.currentTarget.blur()}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export type MobileNavProps = JSX.IntrinsicElements['div'] & {
  onClose?:()=>void,
}
export function MobileNav({className, onClose}:MobileNavProps){

  const handleOnClose = () => {
    onClose && onClose()
  }
  
  return(
    <div className={classNames(className, "fixed z-20 w-full h-full flex flex-col bg-stone-800 text-stone-300")}>
      <div className="relative flex justify-between items-center py-2 px-6">
        <HeaderTitleNav dark />
        <div className="absolute right-6 top-4 text-3xl cursor-pointer text-stone-50" onClick={handleOnClose}>
          <AiOutlineClose />
        </div>
      </div>

      <div className='flex flex-col gap-12 mt-8 px-6'>
        {config.pageGroups.map((group, i)=>(
          <div key={i}>
            <label className="">{group.name}</label>
            <ul className="pl-8 flex flex-col gap-2 mt-4 text-stone-50 font-bold text-xl">
              {group.pages.map((page, j)=>(
                <li key={j} className='' onClick={handleOnClose}>
                  <Link href={page.path} onClick={(e)=>e.currentTarget.blur()}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  )
}
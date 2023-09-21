'use client'

import classNames from "classnames"
import Link from "next/link"
import { IconType } from "react-icons"
import { assessments } from "./Section"
import {AiOutlineClose} from 'react-icons/ai'
import { Config } from '@/app/_config'

export type ListNavProps = {
  className?:string,
  children?:React.ReactNode,
}

export function ListNav({className, children}: ListNavProps) {
  const pages = [
    { name: 'LINE査定', href: Config.link.line},
    { name: 'サポートチャット', onClick: ()=>Config.action.openChat()},
  ]

  return (
    <nav className={classNames(className)}>
      <ul className='flex gap-4 items-center'>
        {pages.map(({name, href, onClick}) => (
            <li key={name} onClick={onClick} className={classNames(onClick && 'cursor-pointer')}>
              {href ? 
                <Link className="block py-2 px-3" href={href} >
                  {name}
                </Link>
                :
                <span>{name}</span>
              }
            </li>
        ))}
      </ul>
    </nav>
  )
}


export type BottomNavProps = {
  className?:string
}

export function BottomNav({className}:BottomNavProps){
  return (
    <div className={classNames("h-16 bg-white border-t border-stone-200",className)}>
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {assessments.map((assessment) => (
          BottomNavButton({icon:assessment.icon, label:assessment.title, href:assessment.href})
        ))}
      </div>
    </div>
  )
}


type BottomNavButtonProps = {
  icon?:IconType,
  label?:string,
  href?:string,
}

function BottomNavButton({icon:Icon, label='', href='/'}:BottomNavButtonProps){
  return (
    <Link href={href} className="inline-flex flex-col items-center justify-center px-5 hover:bg-stone-50 group">
      <div className="w-10 h-8">
        {Icon && <Icon className="w-10 h-8 fill-stone-500 group-hover:fill-blue-600"/>}
      </div>
      <span className="text-sm text-stone-500 group-hover:text-blue-600 ">{label}</span>
    </Link>
  )
}

export type ModalNavProps = JSX.IntrinsicElements['div'] & {
 onClose?:()=>void,
}

export function ModalNav({className, onClose}:ModalNavProps){
  return(
    <div className={classNames(className, "fixed flex flex-col items-center inset-0 w-full h-full bg-stone-800/80 z-20 py-4 px-6 text-stone-50")}>
      <div className="flex justify-end w-full text-3xl ">
        <div className="cursor-pointer" onClick={()=>onClose && onClose()}>
          <AiOutlineClose />
        </div>
      </div>
      <p>aaa</p>
    </div>
  )
}
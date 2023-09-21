'use client'

import classNames from "classnames"
import Link from "next/link"
import { IconType } from "react-icons"
import { assessments } from "./Section"
import {AiOutlineClose} from 'react-icons/ai'
import { config } from '@/app/_config'

export type ListNavProps = {
  className?:string,
  children?:React.ReactNode,
}

export function ListNav({className, children}: ListNavProps) {
  const pages = [
    { name: 'LINE査定', href: config.link.line},
    { name: 'サポートチャット', onClick: ()=>config.action.openChat()},
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
import classNames from "classnames"
import Link from "next/link"
import { IconType } from "react-icons"
import { assessments } from "./Section"

export type ListNavProps = {
  className?:string,
  children?:React.ReactNode,
}

export function ListNav({className, children}: ListNavProps) {
  const pages = [
    { name: '査定方法', href: '/assessment'},
    { name: '買取フォーム', href: '/'},
  ]

  return (
    <nav className={classNames(className)}>
      <ul className='flex gap-4 items-center'>
        {pages.map(({name, href}) => (
            <li key={name} >
              <Link className="block py-2 px-3" href={href} >
                {name}
              </Link>
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
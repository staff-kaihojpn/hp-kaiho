
import classNames from "classnames"
import Link from "next/link"
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
